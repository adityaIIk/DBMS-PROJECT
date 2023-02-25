import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className="px-4 py-2 bg-gray-900 text-white">
        <ul className="flex">
          <a href="/"> <li className="mx-2 cursor-pointer">Home </li></a>
          <a href="https://funny-alfajores-cb514b.netlify.app/"> <li className="mx-2 cursor-pointer">About </li></a>
          <a href="tel:+91-6205692339">Contact<li className="mx-2 cursor-pointer"></li></a>

        </ul>
      </nav>

      <p className="text-center py-7 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">POLICY COLLATE SYSTEM</p>


    </div>
  )
}

export default Header