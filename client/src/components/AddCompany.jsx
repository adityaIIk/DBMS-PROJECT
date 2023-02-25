import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import Companycollate from "../apis/Companycollate"
import { Companyscontext } from '../context/Companycontext'

const AddCompany = () => {

    
    
    const [company_id, setCompanyId] = useState('')
    const [company_name, setCompanyName] = useState('')
    const [progress, setProgress] = useState('')
    
    const { addCompany } = useContext(Companyscontext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await Companycollate.post("/", {
                company_id: company_id,
                company_name: company_name,
                progress: progress
            })
            addCompany(response.data.data.company);
            setCompanyId("")
            setCompanyName("")
            setProgress("")
            window.location.reload()
        } catch (error) {
            console.log(error)

        }
    }
    return (


        <div className=' ml-9 mr-9 px-3 py-9 '>
            <form action="">
                <div className="form-row">
                    <div className='col'>
                        <input value={company_id} onChange={e => setCompanyId(e.target.value)} type='text' className="form-control" placeholder='company_id' />
                    </div>

                    <div className="col">
                        <input value={company_name} onChange={e => setCompanyName(e.target.value)} type='text' className="form-control" placeholder='company_name' />
                    </div>

                    <div className='col'>
                        <input value={progress} onChange={e => setProgress(e.target.value)} type='text' className="form-control" placeholder='progress' />
                    </div>
                    <button onClick={handleSubmit} className="btn btn-success">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddCompany