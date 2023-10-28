import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Quiz from "./pages/Quiz"
import { useState } from 'react';

function App() {
  const [categoryid, setCategoryid] = useState(9);
  const [questions, setQuestions] = useState(10);
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home questions={questions} categoryid={categoryid} setCategoryid={setCategoryid} setQuestions={setQuestions}/>} />
          <Route path='/quiz' element={<Quiz questions={questions} categoryid={categoryid} setCategoryid={setCategoryid} setQuestions={setQuestions}  />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
