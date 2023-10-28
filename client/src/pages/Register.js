import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import dummy from '../assests/dummy.png'
import axios from 'axios';

const Register = () => {
  const BASE_URL = "http://localhost:5000/"
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const data = await axios.post(`${BASE_URL}register`, {
        username,
        email,
        password
      });
      localStorage.setItem('username', data.username);
      localStorage.setItem('email', data.email);
      console.log(data);
      e.target.reset();
      alert(`Hello ${data.username}`);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  const handleusername = (e) => {
    setUsername(e.target.value);
  }
  const handleemail = (e) => {
    setEmail(e.target.value);
  }
  const handlepassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className='w-screen h-screen flex flex-row justify-center items-center'>
      <div className='box border-2 border-black p-4 rounded-3xl'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          <div className=' w-32 h-32 text-center m-2'>
            <img src={dummy} alt='dummy' className='avatar' />
          </div>
          <div className='flex flex-col m-1 mt-2'>
            <input type='text' placeholder='Enter Username' className='email border-2 border-gray-400 p-1 pl-2 w-72 m-1 mb-2 rounded-lg' required onChange={handleusername} />
            <input type='email' placeholder='Enter email' className='email border-2 border-gray-400 p-1 pl-2 w-72 m-1 mb-2 rounded-lg' required onChange={handleemail} />
            <input type='password' placeholder='Your Password' className='pass border-2 border-gray-400 p-1 pl-2 w-72 m-1 mb-2 rounded-lg' required onChange={handlepassword} />
          </div>
          <Link to='/login' className='-ml-32 text-sm text-blue-400 mb-4'>Already User Login here</Link>
          <button type='submit' className=' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
