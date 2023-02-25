import React,{useContext,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Companyscontext } from '../context/Companycontext'
import GetPolicy from '../apis/GetPolicy'




const Addpolicy = () => {


    const { addPolicy} = useContext(Companyscontext)

    // const[year_man, setYear_man] = useState('')
    const[idv, setIdv] = useState('')
    const[premium,setPremium] = useState('')
    const[free_pickup, setFreePickup] = useState('')
    const[assistance, setAssistance] = useState('')
    const[company_id, setCompanyId] = useState('')
    
const {make_model} = useParams()



    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await GetPolicy.post(`/${id}/info/${make_model}`, {
                
                company_id: company_id,

                
                idv:idv,
                premium:premium,
                free_pickup:free_pickup,
                assistance:assistance

                
            })
            addPolicy(response.data.data.policy)
            
            console.log(response)
            window.location.reload()
        } catch (error) {
            console.log(error)

        }
    }


  



// TITLE 
    const { id } = useParams()
    const { companys } = useContext(Companyscontext)
    const [company_name, setCompany_name] = useState('')

    useEffect(() =>{
            const fetchData = async () => {
            const response = await GetPolicy.get(`/${id}`)    
                setCompany_name(response.data.data.company.company_name);
            }
            fetchData();
    },[])
  // TITLE 
  
  





return (
    

    
<div className="sm:text-center">
          
          <p className="py-7 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">POLICY DETAILS</p>
         
        
        <div className=' px-6 py-9 '>
             <form action="">
                <div className="form-row">
                    

                    <div className="col">
                        <input value={idv} onChange={e => setIdv(e.target.value)} type='text' className="form-control" placeholder='IDV' />
                    </div>

                    <div className='col'>
                        <input value={premium} onChange={e => setPremium(e.target.value)} type='text' className="form-control" placeholder='PREMIUM' />
                    </div>
                    
              

                {/* <div className='col'>
                        <input value={free_pickup} onChange={e =>  setFreePickup(e.target.value)} type='text' className="form-control" placeholder='FREE-PICKUP' />
                    </div>
                   
                

                <div className='col'>
                        <input value={assistance} onChange={e => setAssistance(e.target.value)} type='text' className="form-control" placeholder='Assisstance' />
                    </div> */}
                    <button onClick={handleSubmit} className="btn btn-success">Add</button>
                </div>
            </form>
        </div>
       
        
    </div>
  )
}

export default Addpolicy


