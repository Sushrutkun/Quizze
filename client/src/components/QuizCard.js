import React from 'react'
import getQuiz from './Api'
import { FaCircleInfo } from 'react-icons/fa6'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'

const QuizCard = () => {
  const apiData = getQuiz(50);
  const data = {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which of these countries national teams qualified for the 2018 FIFA World Cup in Russia?",
    "correct_answer": "Tunisia",
    "incorrect_answers": [
      "United States of America",
      "Italy",
      "Netherlands"
    ]
  };
  return (
    <div className='bg-zinc-300 h-screen w-screen'>
      <h1 className='Quiz Category text-4xl text-center'>This is a {data.category} Quizze</h1>
      <div className='box ml-40 mt-10 mr-40'>
        <div className='question border-4 border-gray-800'>
          <div className='flex justify-between'>
            <div className='bg-zinc-400 flex items-center gap-1 justify-start ml-4 mt-2 mb-2 text-2xl border-2 pl-1 pt-1 pb-1 pr-1 border-gray-500'>
              <FaCircleInfo />
              <h2>Question number</h2>
            </div>
            <div className='flex items-center gap-3 justify-start mr-4 mt-2 mb-2 text-md pl-1 pt-1 pb-1 pr-1 border-gray-500' >
              <div className='flex gap-1 items-center hover:border-2 border-gray-500 pl-1 pr-1 pt-1 pb-1'>
                <GrLinkPrevious />
                <h2>Previous</h2>
              </div>
              <div className='flex gap-1 items-center hover:border-2 border-gray-500 pl-1 pr-1 pt-1 pb-1'>
                <h2>Skip</h2>
                <GrLinkNext />
              </div>
            </div>
          </div>
          <div className='new_div ml-12 mt-2 mb-2 mr-12 flex flex-col flex-wrap '>
            <h3 className='Head ml-4 mr-4 text-xl font-semibold'>{data.question}</h3>
            <h5 className='Difficulty ml-4 text-base text-rose-600'>{data.difficulty}</h5>
          </div>
          <div className='ml-12'>
            <div className='ml-4 text-gray-600 text-lg'>
              Please choose one of the following answers:
            </div>
            <div className='flex flex-col text-lg gap-2 ml-8 mr-44'>
              <form id='myform'>
                <label>
                  <div className=' hover:bg-zinc-400 cursor-pointer'>
                    <input type='radio' value={'1'} id="1" name='question' class="w-4 h-4 mr-4" />
                    {data.correct_answer}
                  </div>
                </label>
                <label for='2'>
                  <div className=' hover:bg-zinc-400 cursor-pointer'>
                    <input type='radio' value={'2'} id="2" name='question' class="w-4 h-4 mr-4" />
                    {data.incorrect_answers[0]}
                  </div>
                </label>
                <label for='3'>
                  <div className=' hover:bg-zinc-400 cursor-pointer'>
                    <input type='radio' value={'3'} id="3" name='question' class="w-4 h-4 mr-4" />
                    {data.incorrect_answers[1]}
                  </div>
                </label>
                <label for='4'>
                  <div className=' hover:bg-zinc-400 cursor-pointer'>
                    <input type='radio' value={'4'} id="4" name='question' class="w-4 h-4 mr-4" />
                    {data.incorrect_answers[2]}
                  </div>
                </label>
                <div className='relative'>
                  <button type='reset' className='text-base hover:text-lg hover:text-red-400 mb-2 mt-1'>Clear Selection</button>
                  <br />
                  <button type='submit' className='flex flex-col justify-center mb-4 hover:text-2xl'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default QuizCard
