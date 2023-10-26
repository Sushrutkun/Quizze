import React, { useEffect, useState } from 'react'
// import getQuiz from './Api'
import axios from 'axios'
import { FaCircleInfo } from 'react-icons/fa6'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'

const QuizCard = ({ page, setPage }) => {
  const [apiData, setApiData] = useState([]);

  const [vis, setVis] = useState('visible');
  const [ans, setAns] = useState(false);
  console.log(page);
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      const url = `https://opentdb.com/api.php?amount=1&category=21`;
      const res = await axios.get(url);
      setApiData(res.data.results);
    };

    fetchData();
  }, [page]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let radio = document.getElementsByName("question");
    console.log(radio);
    for (let i = 0; i < radio.length; i++) {
      // Do stuff
      console.log(radio[i]);
      radio[i].checked = false;
    }
    // radio.checked = false;
    setPage(page + 1);
    ans === true ? alert("**correct**") : alert("incorrect")
  }
  console.log(apiData[0]);

  return (
    <div>
      {
        apiData.map((data_entry) => (
          <div>
            <h1 className='Quiz Category text-4xl text-center'>This is a {data_entry.category} Quizz</h1>
            <div className='box ml-40 mt-10 mr-40'>
              <div className='question border-2 rounded-2xl border-gray-800'>
                <div className='flex justify-between'>
                  <div className='bg-zinc-200 rounded-lg flex items-center gap-1 justify-start ml-4 mt-2 mb-2 text-2xl border-2 pl-1 pt-1 pb-1 pr-1 border-gray-500'>
                    <FaCircleInfo />
                    <h2>Question number {page} of 50</h2>
                  </div>
                  <div className='flex items-center gap-3 justify-start mr-4 mt-2 mb-2 text-md pl-1 pt-1 pb-1 pr-1 border-gray-500'>
                    <div className={`flex gap-1 items-center cursor-pointer hover:border-2 hover:rounded-lg border-gray-500 pl-1 pr-1 pt-1 pb-1 ${page === 1 ? 'hidden' : 'visible'} `} style={{ visibility: vis }}
                      onClick={() => {
                        page > 1 ? setPage(page - 1) : setPage(page);
                      }
                      }
                    >
                      <GrLinkPrevious />
                      <h2>Previous</h2>
                    </div>
                    <div className={`flex gap-1 items-center cursor-pointer hover:border-2 hover:rounded-lg border-gray-500 pl-1 pr-1 pt-1 pb-1 ${page === 50 ? 'hidden' : 'visible'}`} onClick={() => setPage(page + 1)}>
                      <h2>Skip</h2>
                      <GrLinkNext />
                    </div>
                  </div>
                </div>
                <div className='new_div ml-12 mt-2 mb-2 mr-12 flex flex-col flex-wrap '>
                  <h3 className='Head ml-4 mr-4 text-xl font-semibold'>{data_entry.question}</h3>
                  <h5 className='Difficulty ml-4 text-base text-orange-600'>{data_entry.difficulty.toUpperCase()}</h5>
                </div>
                <div className='ml-12'>
                  <div className='ml-4 text-gray-600 text-lg'>
                    Please choose one of the following answers:
                  </div>
                  <div className='flex flex-col text-lg gap-2 ml-8 mr-96'>
                    <form id='myform'>
                      <label onClick={() => { setAns(true); console.log(ans) }} >
                        <div className=' hover:bg-zinc-300 cursor-pointer rounded-lg duration-200'>
                          <input type='radio' id='1' name='question' class="w-3 h-3 mr-4 ml-2" />
                          {data_entry.correct_answer}
                        </div>
                      </label>
                      {
                        data_entry.incorrect_answers.map((option, index) => (
                          <label key={index} onClick={() => { setAns(false); console.log(ans) }}>
                            <div className='hover:bg-zinc-300 cursor-pointer rounded-lg duration-200' >
                              <input type='radio' name='question' className="w-3 h-3 mr-4 ml-2" />
                              {option}
                            </div>
                          </label>
                        ))
                      }
                      <div className=''>
                        <button type='reset' className='text-base text-red-400 mb-2 mt-1'>Clear Selection</button>
                        <div className='flex justify-end items-center'>
                          <button type='submit' className=' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={handleSubmit}>Save & Next</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )

}
export default QuizCard
