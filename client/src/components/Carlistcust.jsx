import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Companyscontext } from '../context/Companycontext'
import Carapi from '../apis/Carapi'
import { useParams } from 'react-router-dom'
import Companycollate from '../apis/Companycollate';


const Caraddlist = (props) => {
  const { id } = useParams()
  
  let history = useNavigate();
  const { cars, setCars } = useContext(Companyscontext)

  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await Companycollate.get(`/${id}/info`)
        setCars(response.data.data.car)

      } catch (error) {

      }

    }

    fetchData();

  }, [])


  const handleDelete = async (id, year_man) => {

    try {
      const response = await Carapi.delete(`/${id}/info/${year_man}`)
      console.log(response)

      setCars(cars.filter(car => {
        return car.year_man !== year_man
      }))

    } catch (error) {

    }

  }


  const handleGet = (id, mid) => {

    history(`/customer/${id}/info/${mid}/policy`);

  }


  return (

    <div className='sm:text-center'>

      <div className='container px-6 py-9'>
        <table className="table table-hover table-Info">
          <thead>
            <tr className='bg-warning'>


              <th scope="col">MAKE/MODEL</th>
              <th scope="col">COLOUR</th>
              <th scope="col">YEAR MANUFACTURED</th>
              <th scope="col">GET POLICY</th>
              {/* <th scope="col">DELETE</th> */}



            </tr>
          </thead>
          <tbody>


            {cars && cars.map((info) => {

              return (

                <tr key={info.make_model}>
                  <td>{info.make_model}</td>
                  <td>{info.colour}</td>
                  <td>{info.year_man}</td>
                  <td><button onClick={() => handleGet(info.company_id, info.make_model)} className="btn btn-success">GET</button></td>
                  {/* <td><button onClick={() => handleDelete(info.company_id, info.year_man)} className="btn btn-danger">Delete</button></td> */}

                </tr>
              )



            }
            )}
          </tbody>
        </table>
      </div>


    </div>

  )
}

export default Caraddlist