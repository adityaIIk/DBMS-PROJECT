import React, { useContext, useEffect } from 'react'
import { Companyscontext } from '../context/Companycontext'
import Carapi from '../apis/Carapi'



const Carlist = (props) => {
 
 
    const { cars, setCars } = useContext(Companyscontext)

    useEffect(() => {
    
        const fetchData = async () => {
    
            try {
              const response = await Carapi.get("/")
              setCars(response.data.data.info)
      
            } catch (error) {
      
            }
      
          }
      
          fetchData();
      
        }, [])

        

 
 
    return (

        <div className='container px-6 py-9'>
      <table className="table table-hover table-Info">
        <thead>
          <tr className='bg-warning'>

      
            <th scope="col">MAKE/MODEL</th>
            <th scope="col">COLOUR</th>
            <th scope="col">YEAR MANUFACTURED</th>

            
          </tr>
        </thead>
        <tbody>


    



        {cars && cars.map((info) => {

            return (
        
              <tr key={info.id}>
                <td>{info.make_model}</td>
                <td>{info.colour}</td>
                <td>{info.year_man}</td>
              </tr>
            )
        
        
        
          }
          )}
          </tbody>
      </table>
    </div>

  )
}

export default Carlist