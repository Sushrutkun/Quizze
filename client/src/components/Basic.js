import React, { useState } from 'react'
import logo from '../assests/logo.svg'
import { useNavigate } from 'react-router-dom'

const Basic = ({questions,categoryid,setQuestions,setCategoryid}) => {
    const navigate = useNavigate();
    // const [question, setQuestion] = useState(10);
    const handlequestion = (e) => {
        setQuestions(e.target.value);
    }
    const handlecategory=(e)=>{
        setCategoryid(e.target.value);
    }

    return (
        <div className='flex flex-row justify-center items-center border-2 border-black rounded-2xl ml-60 mr-60 mt-10'>
            <img src={logo} alt='Logo' className=' h-40 w-40 mr-10 -ml-5' />
            <div>
                <h1 className='text-bold text-2xl text-center'>The Ultimate Trivia Quiz</h1>
                <hr className=' border-2 border-gray-500' />
                <form onSubmit={() => navigate('/quiz')} className='flex flex-col'>
                    <div className='flex flex-col mt-1'>
                        <label for="trivia_category" className=' text-gray-500 text-sm m-1 mb-0'>In which category do you want to play the quiz?</label>
                        <select name="trivia_category" className='text-black block border-2 border-gray-400 rounded-lg m-1 p-1' onChange={handlecategory}>
                            <option value="9" className='text-gray-600'>Any Category</option>
                            <option value="9"className='text-gray-600'>General Knowledge</option>
                            <option value="10"className='text-gray-600'>Entertainment: Books</option>
                            <option value="11"className='text-gray-600'>Entertainment: Film</option>
                            <option value="12"className='text-gray-600'>Entertainment: Music</option>
                            <option value="13"className='text-gray-600'>Entertainment: Musicals &amp; Theatres</option>
                            <option value="14"className='text-gray-600'>Entertainment: Television</option>
                            <option value="15"className='text-gray-600'>Entertainment: Video Games</option>
                            <option value="16"className='text-gray-600'>Entertainment: Board Games</option>
                            <option value="17"className='text-gray-600'>Science &amp; Nature</option>
                            <option value="18"className='text-gray-600'>Science: Computers</option>
                            <option value="19"className='text-gray-600'>Science: Mathematics</option>
                            <option value="20"className='text-gray-600'>Mythology</option>
                            <option value="21"className='text-gray-600'>Sports</option>
                            <option value="22"className='text-gray-600'>Geography</option>
                            <option value="23"className='text-gray-600'>History</option>
                            <option value="24"className='text-gray-600'>Politics</option>
                            <option value="25"className='text-gray-600'>Art</option>
                            <option value="26"className='text-gray-600'>Celebrities</option>
                            <option value="27"className='text-gray-600'>Animals</option>
                            <option value="28"className='text-gray-600'>Vehicles</option>
                            <option value="29"className='text-gray-600'>Entertainment: Comics</option>
                            <option value="30"className='text-gray-600'>Science: Gadgets</option>
                            <option value="31"className='text-gray-600'>Entertainment: Japanese Anime &amp; Manga</option>
                            <option value="32"className='text-gray-600'>Entertainment: Cartoon &amp; Animations</option>
                        </select>
                    </div>

                    <div className='flex flex-col mt-1'>
                        <label for="trivia_amount" className='text-gray-500 text-sm m-1 mb-0'>How many questions do you want in your quiz?</label>
                        <input type="number" id="trivia_amount" name="quantity" min="1" max="50" defaultValue='10' className="text-black block border-2 border-gray-400 rounded-lg m-1 p-1" onChange={handlequestion}></input>
                    </div>


                    <div className='flex flex-col mt-1'>
                        <label for="trivia_difficulty" className='text-gray-500 text-sm m-1 mb-0'>How difficult do you want your quiz to be?</label>
                        <select name="trivia_difficulty" className='text-black block border-2 border-gray-400 rounded-lg m-1 p-1'>
                            <option value="any" className='text-gray-600'>Any Difficulty</option>
                            <option value="easy" className='text-gray-600'>Easy</option>
                            <option value="medium" className='text-gray-600'>Medium</option>
                            <option value="hard" className='text-gray-600' >Hard</option>
                        </select>
                    </div>

                    <div className='flex flex-col mt-1'>
                        <label for="trivia_type" className='text-gray-500 text-sm m-1 mb-0'>Which type of questions do you want in your quiz?</label>
                        <select name="trivia_type" className='text-black block border-2 border-gray-400 rounded-lg m-1 p-1' >
                            <option value="any"className='text-gray-600'>Any Type</option>
                            <option value="multiple"className='text-gray-600'>Multiple Choice</option>
                        </select>
                    </div>

                    <button type='submit' className=' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 mr-2 mb-2 p-1 '>Start Quiz</button>
                </form>
            </div>
        </div>
    )
}

export default Basic
