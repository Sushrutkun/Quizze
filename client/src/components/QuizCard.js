import React from 'react'
import getQuiz from './Api'

const QuizCard = () => {
    const apiData=getQuiz(50);
  return (
    <h1 className="text-3xl font-bold underline">
      QuizCard
    </h1>
  )
}

export default QuizCard
