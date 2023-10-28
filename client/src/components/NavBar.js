import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-black text-white text-xl pl-8 pt-1 pb-2 mb-3 relative '>
      <div className='flex justify-evenly '>
        <Link to='/' className='group transition duration-300'>Home
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600 rounded-xl"></span>
        </Link>
        <a className='group transition duration-300'>Dashboard
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600 rounded-xl"></span>
        </a>
        <Link to='/login' className='group transition duration-300'>Login
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600 rounded-xl"></span>
        </Link>
        <a className='group transition duration-300' href='https://github.com/Sushrutkun/Quizze'>Github
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-sky-600 rounded-xl"></span>
        </a>
      </div>
    </div>
  )
}

export default NavBar
