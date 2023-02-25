import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Companycollate from '../apis/Companycollate'
import { Companyscontext } from '../context/Companycontext'


const UpdateCompany = (props) => {

    const { id } = useParams()
    let history = useNavigate()
    const { companys } = useContext(Companyscontext)
    const [company_name, setCompany_name] = useState('')
    const [company_id, setCompany_id] = useState('')
    const [progress, setProgress] = useState('')
    console.log(companys)

    useEffect(() =>{
            const fetchData = async () => {
            const response = await Companycollate.get(`/${id}/update`)
            console.log(response.data.data)
                // setCompany_id(response.data.data.company.company_id);
                // setCompany_name(response.data.data.company.company_name);
                // setProgress(response.data.data.claimset.progress);


            }
            fetchData();
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedCompany = await Companycollate.put(`/${id}`, {
            
            // company_id,
            company_name,
            progress:progress

        })

        console.log(updatedCompany)
        history("/company")
    }


    return (
        <div>
            {/* <h1 >{companys[0].company_id}</h1> */}
            <form action="">
                <div className='ml-12 mr-12 px-3 py-3'>
                    {/* <div className='form-group' >
                <label htmlFor="company_id">Company_Id</label>
                <input value = {company_id} onChange={e => setCompany_id(e.target.value)} id='company_id' className='form-control' type='text'></input>
            </div> */}

                    <div className='form-group'>
                        <label htmlFor="company_name">Company_Name</label>
                        <input value={company_name} onChange={e => setCompany_name(e.target.value)} id='company_name' className='form-control' type='text'></input>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="progress">Progress</label>
                        <input value={progress} onChange={e => setProgress(e.target.value)} id='progress' className='form-control' type='text'></input>
                    </div>

                    
                    <button  onClick={handleSubmit} className='btn btn-primary'>Submit</button></div>

            </form>
        </div>




    )

}

export default UpdateCompany