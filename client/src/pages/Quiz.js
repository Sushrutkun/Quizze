import React, { useState } from 'react'
import QuizCard from '../components/QuizCard'
import NavBar from "../components/NavBar"

const Quiz = ({questions,categoryid,setQuestions,setCategoryid}) => {
    const[page,setPage]=useState(1);
    return (
        <div className='h-screen w-screen relative'>
            <NavBar />
            <QuizCard page={page} setPage={setPage} questions={questions} categoryid={categoryid} setCategoryid={setCategoryid} setQuestions={setQuestions}/>
        </div>
    )
}

export default Quiz
