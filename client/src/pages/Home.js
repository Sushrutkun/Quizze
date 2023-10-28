import React from 'react'
import NavBar from '../components/NavBar'
import Basic from '../components/Basic'

const Home = ({questions,categoryid,setQuestions,setCategoryid}) => {
    return (
        <div className='h-screen w-screen relative'>
            <NavBar />
            <Basic questions={questions} categoryid={categoryid} setCategoryid={setCategoryid} setQuestions={setQuestions}/>
        </div>
    )
}

export default Home
