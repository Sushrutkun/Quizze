import React, { useState } from 'react'
import QuizCard from '../components/QuizCard'
import NavBar from "../components/NavBar"

const Home = () => {
    const[page,setPage]=useState(1);
    return (
        <div className='h-screen w-screen'>
            <NavBar />
            <QuizCard page={page} setPage={setPage} />
        </div>
    )
}

export default Home
