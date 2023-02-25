import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Companycollate from '../apis/Companycollate'
import { Companyscontext } from '../context/Companycontext'


const AddCar = () => {
const {id}=useParams()
    const [make_model, setMake_model] = useState('')
    const [colour, setColour] = useState('')
    const [year_man, setYear_man] = useState('')
    
    const { addCar } = useContext(Companyscontext)

    

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await Companycollate.post(`/${id}/info`, {
                make_model: make_model,
                colour: colour,
                year_man: year_man

            })
            addCar(response.data.data.info)

            window.location.reload();
        } catch (error) {
            console.log(error)

        }
    }





    return (
        <div className='sm:text-center'>

            <div className=' px-6 py-9 '>
                <form action="">
                    <div className="form-row">
                        <div className='col'>
                            <input value={make_model} onChange={e => setMake_model(e.target.value)} type='text' className="form-control" placeholder='MAKE/MODEL' />
                        </div>

                        <div className="col">
                            <input value={colour} onChange={e => setColour(e.target.value)} type='text' className="form-control" placeholder='COLOUR' />
                        </div>

                        <div className='col'>
                            <input value={year_man} onChange={e => setYear_man(e.target.value)} type='text' className="form-control" placeholder='YEAR' />
                        </div>
                        <button onClick={handleSubmit} className="btn btn-success">Add</button>
                    </div>
                </form>
            </div>
            </div>
    )
}

export default AddCar