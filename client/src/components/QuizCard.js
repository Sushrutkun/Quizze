import React, { useEffect, useState } from 'react'
// import getQuiz from './Api'
import axios from 'axios'
import { FaCircleInfo } from 'react-icons/fa6'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import {HashLoader} from 'react-spinners'


const QuizCard = ({ page, setPage, questions, categoryid, setQuestions, setCategoryid }) => {
  const [apiData, setApiData] = useState([]);
  const [ans, setAns] = useState(false);
  // let apiarr=[];


  console.log(page);
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      const url = `https://opentdb.com/api.php?amount=${questions}&category=${categoryid}`;
      console.log(url);
      // alert(url);
      const res = await axios.get(url);
      setApiData(res.data.results);
    };
    fetchData();
    // apiarr=[apiData[page-1]];
    // window.location.reload();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let radio = document.getElementsByName("question");
    console.log(radio);
    for (let i = 0; i < radio.length; i++) {
      console.log(radio[i]);
      radio[i].checked = false;
    }
    // radio.checked = false;
    setPage(page + 1);
    // ans === true ? alert("**correct**") : alert("incorrect")
  }
  const data = apiData[0];
  const apiarr = [apiData[page - 1]];
  console.log(apiarr);

  return (
    <div>
      {
        apiarr.length !== 0 && apiarr.map((data) => (

          !data?<div className=' w-[95vw] h-[95vh] flex justify-center items-center'><HashLoader
          color="#3d27b9"
          size={150}
        /></div>:
          <div>
            <h1 className='Quiz Category text-4xl text-center'>This is a {data?.category} Quizz</h1>
            <div className='box ml-40 mt-8 mr-40'>
              <div className='question border-2 rounded-2xl border-gray-800 pt-1'>
                <div className='flex justify-between'>
                  <div className='bg-zinc-200 rounded-lg flex items-center gap-1 justify-start ml-4 mt-2 mb-2 text-2xl border-2 pl-2 pt-1 pb-2 pr-2 border-gray-500'>
                    <FaCircleInfo />
                    <h2>Question number {page} of {questions}</h2>
                  </div>
                  <div className='flex items-center gap-3 justify-start mr-4 mt-2 mb-2 text-md pl-1 pt-1 pb-1 pr-1 border-gray-500'>
                    <div className={`flex gap-1 items-center cursor-pointer hover:border-2 hover:rounded-lg border-gray-500 pl-1 pr-1 pt-1 pb-1 ${page === 1 ? 'hidden' : 'visible'} `}
                      onClick={() => {
                        page > 1 ? setPage(page - 1) : setPage(page);
                      }
                      }
                    >
                      <GrLinkPrevious />
                      <h2>Previous</h2>
                    </div>
                    <div className={`flex gap-1 items-center cursor-pointer hover:border-2 hover:rounded-lg border-gray-500 pl-1 pr-1 pt-1 pb-1 ${page === questions ? 'hidden' : 'visible'}`} onClick={() => setPage(page + 1)}>
                      <h2>Skip</h2>
                      <GrLinkNext />
                    </div>
                  </div>
                </div>
                <div className='new_div ml-12 mt-2 mb-2 mr-12 flex flex-col flex-wrap '>
                  <h3 className='Head ml-4 mr-4 text-xl font-semibold'>{(new DOMParser()).parseFromString(data?.question, 'text/html').body.textContent}</h3>
                  <h5 className={`Difficulty ml-4 text-base font-semibold
                  ${data?.difficulty === 'easy' ? 'text-green-500' : null}
                  ${data?.difficulty === 'medium' ? 'text-yellow-500' : null}
                  ${data?.difficulty === 'hard' ? 'text-red-500' : null}
                  `}>{data?.difficulty.toUpperCase()}</h5>
                </div>
                <div className='ml-12'>
                  <div className='ml-4 text-gray-600 text-lg'>
                    Please choose one of the following answers:
                  </div>
                  <div className='flex flex-col text-lg gap-2 ml-8 mr-96'>
                    <form id='myform' onSubmit={handleSubmit}>
                      <label onClick={() => { setAns(true); console.log(ans) }} >
                        <div className=' hover:bg-zinc-300 cursor-pointer rounded-lg duration-200'>
                          <input type='radio' id='1' name='question' class="w-3 h-3 mr-4 ml-2" />
                          {/* {data_entry.correct_answer} */}
                          {(new DOMParser()).parseFromString(data?.correct_answer, 'text/html').body.textContent}
                        </div>
                      </label>
                      {
                        data?.incorrect_answers.map((option, index) => (
                          <label key={index} onClick={() => { setAns(false); console.log(ans) }}>
                            <div className='hover:bg-zinc-300 cursor-pointer rounded-lg duration-200' >
                              <input type='radio' name='question' className="w-3 h-3 mr-4 ml-2" />
                              {/* {option} */}
                              {(new DOMParser()).parseFromString(option, 'text/html').body.textContent}
                            </div>
                          </label>
                        ))
                      }
                      <div className=''>
                        <button type='reset' className='text-base text-red-400 mb-2 mt-1'>Clear Selection</button>
                        <div className='flex justify-end items-center mt-2 mb-2'>
                          <button type='submit' className=' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Save & Next</button>
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
