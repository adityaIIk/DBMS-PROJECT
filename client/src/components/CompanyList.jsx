import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Companycollate from '../apis/Companycollate'
import { Companyscontext } from '../context/Companycontext'


const CompanyList = (props) => {

  const { companys, setCompanys } = useContext(Companyscontext)

  let history = useNavigate();

  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await Companycollate.get("/")
        setCompanys(response.data.data.company)

      } catch (error) {

      }

    }

    fetchData();

  }, [])

  const handleDelete = async (id) => {

    try {
      const response = await Companycollate.delete(`/${id}`)
      console.log(response)

      setCompanys(companys.filter(company => {
        return company.company_id !== id
      }))

    } catch (error) {

    }

  }

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history(`/company/${id}/update`);

  }

  const handleInfo = (e, id) => {
    e.stopPropagation();
    history(`/company/${id}/info`);
    
  }
 
  return (
    <div className='container px-5'>
      <table className="table table-hover table-Info">
        <thead>
          <tr className='bg-primary'>

            <th scope="col">Company_Id</th>
            <th scope="col">Company_Name</th>
            <th scope="col">Progress</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            <th scope="col">Info</th>
          </tr>
        </thead>
        <tbody>


          {companys && companys.map((company) => {

            return (

              <tr key={company.id}>
                <td>{company.company_id}</td>
                <td>{company.company_name}</td>
                <td>{company.progress}</td>
                <td><button onClick={(e) => handleUpdate(e, company.company_id)} className="btn btn-warning">Update</button></td>
                <td><button onClick={() => handleDelete(company.company_id)} className="btn btn-danger">Delete</button></td>
                <td><button onClick={(e)=> handleInfo(e, company.company_id)} className="btn btn-success">Info</button></td>
              </tr>
            )



          }
          )}
  
        </tbody>
      </table>
    </div>

  )
}

export default CompanyList