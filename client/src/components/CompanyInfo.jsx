import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Companycollate from '../apis/Companycollate'
import { Companyscontext } from '../context/Companycontext'
import AddCar from './AddCar'

const CompanyInfo = (props) => {


    
    const { id } = useParams()

    // const { addCar } = useContext(Companyscontext)

    // const [make_model, setMake_model] = useState('')
    // const [colour, setColour] = useState('')
    // const [year_man, setYear_man] = useState('')


    //  ADD HEADER 
    const { companys } = useContext(Companyscontext)
    const [company_name, setCompany_name] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await Companycollate.get(`/${id}/info`)
            setCompany_name(response.data.data.company.company_name);
        }
        fetchData();
    }, [])
    // ADD HEADER 

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     try {
    //         const response = await Companycollate.post(`/${id}/info`, {
    //             make_model: make_model,
    //             colour: colour,
    //             year_man: year_man

    //         })
    //         addCar(response.data.data.info)

    //         window.location.reload();
    //     } catch (error) {
    //         console.log(error)

    //     }
    // }





    return (
        <div className='sm:text-center'>


            <div className="sm:text-center">

                <p className="py-7 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Car Details</p>

            </div>
           <AddCar />
        </div>
    )
}

export default CompanyInfo