import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className='homePage'>
        <h1 className='title'>QUIZLY</h1>
        <div className='options'>
        <Link to="/flagsQuiz"><button className='option'>Flags Quiz</button></Link>
        <Link to="/worldHistory"><button className='option'>World History</button></Link>
        <Link to="/musicQuiz"><button className='option'>Music Quiz</button></Link>
        </div>
        
    </div>
  )
}

export default Home;