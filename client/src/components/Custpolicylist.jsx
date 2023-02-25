import React, { useContext, useEffect } from 'react'
import { Companyscontext } from '../context/Companycontext'
import GetPolicy from '../apis/GetPolicy'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Companycollate from '../apis/Companycollate'

const Custpolicylist = (props) => {

    const { id } = useParams()
    const {make_model}=useParams()
    const { policys, setpolicys } = useContext(Companyscontext)
    const {year_man} = useParams()




    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await Companycollate.get(`/${id}/info/${make_model}`)
                setpolicys(response.data.data.policyy)

            } catch (error) {

            }

        }

        fetchData();

    }, [])


    const handleDelete = async (id, make_model , idv) => {

        try {
          const response = await GetPolicy.delete(`/${id}/info/${make_model}/policy/${idv}`);
          console.log(response)
    
          setpolicys(policys.filter(policyy => {
            return policyy.idv !== idv
          }))
    
        } catch (error) {
    
        }
    
      }



    return (


        <div className="sm:text-center">
            

          
          <p className="py-7 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">POLICY DETAILS</p>
            <div className='container px-6 py-9'>
                <table className="table table-hover table-Info">
                    <thead>
                        <tr className='bg-success'>


                            <th scope="col">IDV</th>
                            <th scope="col">PREMIUM</th>
                            <th scope="col">FREE-PICKUP</th>
                            <th scope="col">24X7 Assisstance</th>    
                            <th scope="col">BUY POLICY</th>
                            {/* <th scope="col">DELETE</th> */}
                        </tr>
                    </thead>
                    <tbody>


                        {policys && policys.map((policy) => {

                            return (

                                <tr key={policy.make_model}>

                                    <td>{policy.idv}</td>
                                    <td>{policy.premium}</td>
                                    <td>{policy.free_pickup}</td>
                                    <td>{policy.assistance}</td>
                                    <td>   <a href="https://ci.policybazaar.com/?utm_content=home_v11" >
                                    <button  class="btn btn-info">BUY</button>
                                    </a>  </td>
                                    {/* <td><button onClick={() => handleDelete(policy.company_id, policy.make_model , policy.idv)} className="btn btn-danger">DELETE</button></td> */}
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

export default Custpolicylist