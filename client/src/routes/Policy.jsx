import React from 'react'
import Policylist from '../components/Policylist'
import Addpolicy from '../components/Addpolicy'

const Policy = () => {
  return (
    <div>
    <nav className="px-4 py-2 bg-gray-900 text-white">
        <ul className="flex">
        <a href="/"> <li className="mx-2 cursor-pointer">Home </li></a>
         <li className="mx-2 cursor-pointer">About</li>
          <a href="tel:+91-6205692339">Contact<li className="mx-2 cursor-pointer"></li></a>
        </ul>
      </nav>
    <Addpolicy />
    <Policylist />
    
    </div>
  )
}

export default Policy