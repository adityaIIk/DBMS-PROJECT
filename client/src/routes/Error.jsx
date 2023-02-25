
import React, { useState } from 'react';
import Companycollate from '../apis/Companycollate';
import { useNavigate } from 'react-router-dom';

function IncorrectPasswordPage() {
    const history=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform login logic here
   try{
    const response =await Companycollate.post('/login',{
        username,
        password
    })
    if(response.data.data.owner!=undefined){
        history('/company')
    }
    else
    history('/error')
   }catch(e){
    console.log(e)
   }
  };

  return (
    <div >


<nav className="px-4 py-2 bg-gray-900 text-white">
        <ul className="flex">
        <a href="/"> <li className="mx-2 cursor-pointer">Home </li></a>
        <a href="https://funny-alfajores-cb514b.netlify.app/"> <li className="mx-2 cursor-pointer">About </li></a>
          <a href="tel:+91-6205692339">Contact<li className="mx-2 cursor-pointer"></li></a>
        </ul>
      </nav>
      <div className="text-center text-6xl mb-6 font-medium py-6 flex text-center justify-content-center">
       Admin Login
      </div>
<div className=' flex justify-content-center'>
<form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg " >
      <label className="block font-medium text-lg mb-2 ">
        Username:
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="border border-gray-400 p-2 rounded-lg"
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border border-gray-400 p-2 rounded-lg"
        />
      </label>
      <button onClick={handleSubmit} type="submit" className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600" style={{width:'100px'}}>
        Login
      </button>
    </form>
    
      
</div>
<div className="text-center text-xl mb-6 font-medium pt-6 flex text-center justify-content-center text-red-500">
      Incorrect Username or Password!
      </div>
      <div className="text-center text-xl mb-6 font-medium  flex text-center justify-content-center text-red-500">
      Please Try Again!
      </div>

    </div>
    
  );
}

export default IncorrectPasswordPage;
