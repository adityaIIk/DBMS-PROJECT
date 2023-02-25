require("dotenv").config();

const express = require('express');

const cors = require("cors");

const db = require("./db");


const morgan = require('morgan');

const app = express();

app.use(cors());

app.use(express.json());


//Get all Company

app.get('/api/v1/company', async (req, res) => {

    try {
        const results = await db.query("select * from company left join (select * from claimset) claimset on company.company_id=claimset.company_id")


        res.status(200).json(
            {
                status: 'success',
                results: results.rows.length,
                data: { company: results.rows }


            }
        )
    } catch (err) {


        console.log(err)
    }


})

//Get a company

app.get('/api/v1/company/:id/update', async (req, res) => {

    console.log(req.params.id)

    try {
        const results = await db.query("select * from company where company_id = $1", [req.params.id])
        const response = await db.query("select * from claimset where company_id=$1", [req.params.id]);

        res.status(200).json({
            status: 'success',
            data: {
                company: results.rows[0],
                claimset: response.rows

            }
        })

    } catch (err) {

        console.log(err)

    }

})



//Create a company

app.post('/api/v1/company', async (req, res) => {

    console.log(req.body)

    try {

        const results = await db.query("INSERT INTO company(company_id,company_name) values ($1, $2) returning *", [req.body.company_id, req.body.company_name]);
        const response = await db.query("INSERT INTO claimset(company_id,progress) values ($1, $2) returning *", [req.body.company_id, req.body.progress]);

        console.log(results)

        res.status(200).json({

            status: 'success',
            data: {
                company: results.rows[0],
                claimset: response.rows
            }
        })
    } catch (error) {

        console.log(error)
    }

})



//update a company

app.put("/api/v1/company/:id", async (req, res) => {
    try {
        const results = await db.query(
            "UPDATE company SET company_name = $1 where company_id = $2 returning *",
            [req.body.company_name, req.params.id]
        );
        const response = await db.query("UPDATE claimset SET progress=$1 where company_id=$2 returning *", [req.body.progress, req.params.id])

        res.status(200).json({
            status: "success",
            data: {
                company: results.rows[0],
                claimset: response.rows[0]
            },
        });
    } catch (err) {
        console.log(err);
    }
    console.log(req.params.id);
    console.log(req.body);
});

//Delete a company

app.delete('/api/v1/company/:id', async (req, res) => {

    try {
        const results = await db.query("DELETE FROM company where company_id = $1", [req.params.id])
        res.status(200).json({

            status: "success",
        })


    } catch (error) {
        console.log(error)

    }
})


//Get all Car

app.get('/api/v1/company/:id/info', async (req, res) => {

    try {
        const results = await db.query("select * from car where company_id = $1 ", [req.params.id])
        const response = await db.query("select * from company where company_id =$1", [req.params.id])


        res.status(200).json(


            {
                status: 'success',
                results: results.rows.length,
                response: response.rows.length,
                data: {
                    car: results.rows,
                    company: response.rows
                }


            }

        )
    } catch (err) {


        console.log(err)
    }


})

app.post('/api/v1/company/:id/info', async (req, res) => {

    console.log(req.body)

    try {

        const results = await db.query("INSERT INTO car (company_id,make_model,colour, year_man) values ($1, $2, $3,$4) returning *", [req.params.id, req.body.make_model, req.body.colour, req.body.year_man]);

        console.log(results)

        res.status(200).json({

            status: 'success',
            data: {
                car: results.rows[0]
            }
        })
    } catch (error) {

        console.log(error)
    }

})

app.delete('/api/v1/company/:id/info/:year_man', async (req, res) => {

    try {
        const results = await db.query("DELETE FROM car where year_man= $1", [req.params.year_man])
        res.status(200).json({

            status: "success",
        })


    } catch (error) {
        console.log(error)

    }
})

//Get all Policy

app.get('/api/v1/company/:id/info/:make_model', async (req, res) => {

    try {
        const results = await db.query("select * from policyy left join (select * from services) services on services.company_id=policyy.company_id where policyy.company_id= $1 and policyy.make_model=$2;", [req.params.id, req.params.make_model])


        res.status(200).json(
            {
                status: 'success',
                results: results.rows.length,

                data: { policyy: results.rows }


            }

        )
    } catch (err) {


        console.log(err)
    }


})


app.post('/api/v1/company/:id/info/:make_model', async (req, res) => {

    console.log(req.body)

    try {

        const results = await db.query("INSERT INTO policyy (company_id ,make_model ,idv , premium) values ($1, $2, $3,$4) returning*", [req.params.id, req.params.make_model, req.body.idv, req.body.premium]);

        // const response = await db.query("INSERT INTO services (company_id,free_pickup,assistance)values ($1, $2, $3) returning*", [req.params.id, req.body.free_pickup, req.body.assistance]);

        console.log(results)

        res.status(200).json({

            status: 'success',
            data: {
                policyy: results.rows[0],
                // services: response.rows[0]
            }
        })
    } catch (error) {

        console.log(error)
    }

})

app.delete('/api/v1/company/:id/info/:year_man/policy/:idv', async (req, res) => {

    try {
        const results = await db.query("DELETE FROM policyy where idv=$1", [req.params.idv])
        const response = await db.query("DELETE FROM services where company_id=$1", [req.params.id])
        res.status(200).json({

            status: "success",
        })


    } catch (error) {
        console.log(error)

    }
})

const port = process.env.PORT || 5001;
app.listen(port, () => {

    console.log('Server listening on port 5001')
})  

//SignIn

app.post("/api/v1/company/login", async (req, res) =>{
    try{
        const results= await db.query(
            "SELECT * FROM owner WHERE username =$1 AND password =$2",
            [req.body.username, req.body.password]
        );
        res.status(201).json({
            status: "success",
            data:{
                owner: results.rows[0],
            }
        });
    }catch(err){
        console.log(err)
    }
});