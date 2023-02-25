import React from 'react'
import { Link } from 'react-router-dom';
const Land = () => {
  return (
    <div><nav className="px-4 py-2 bg-gray-900 text-white">
        <ul className="flex">
        <a href="/"> <li className="mx-2 cursor-pointer">Home </li></a>
        <a href="https://funny-alfajores-cb514b.netlify.app/"> <li className="mx-2 cursor-pointer">About </li></a>
          <a href="tel:+91-6205692339">Contact<li className="mx-2 cursor-pointer"></li></a>
        </ul>
      </nav>
<div className="bg-gray-200 min-h-screen flex items-center justify-center">
    
    <div className="w-full max-w-sm">
    
      <div className="text-center text-6xl mb-6 font-medium">
        Policy Collate
      </div>
      <div className="text-center text-lg mb-6">
        Manage your policies with ease
      </div>
      <div className="flex items justify-center">
        <Link to="/company/login" className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-4 px-9 rounded-lg relative right-9 bg-cyan-500 shadow-lg shadow-cyan-500/50 ... ">
          Admin
        </Link>

        <Link to="/customer" className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-4 px-9 rounded-lg relative left-9 bg-cyan-500 shadow-lg shadow-cyan-500/50 ... ">
          Customer
        </Link>
        
       
      </div>
      
      
    </div>
    
  </div>
      
      </div>
  )
}

export default Land



// import React from 'react';
// import { Link } from 'react-router-dom';

// const Land = () => {
//   return (
  
      
     


    
    
//   );
// };

// export default Land;
