import React from 'react';
import { useState } from 'react';
import Germany from '../assets/germany.jpg';
import Italy from '../assets/italy.png';
import Austria from '../assets/austria.png';
import Serbia from '../assets/serbia.png';
import US from '../assets/us.png';
import Argentina from '../assets/argentina.png';
import Russia from '../assets/russia.png';
import India from '../assets/india.png';
import Monaco from '../assets/monaco.png';
import Ireland from '../assets/ireland.png';
import '../styles/FlagQuiz.css';

function FlagsQuiz() {
  const questions = [
    {
      questionText: <img src={Germany} alt="G" />,
      answerOptions: [
        { answerText: 'Germany', isCorrect: true },
        { answerText: 'Belgium', isCorrect: false },
      ],
    },
    {
      questionText: <img src={Italy} alt="I" />,
      answerOptions: [
        { answerText: 'Hungary', isCorrect: false },
        { answerText: 'Italy', isCorrect: true },
      ],
    },
    {
      questionText: <img src={Austria} alt="A" />,
      answerOptions: [
        { answerText: 'Austria', isCorrect: true },
        { answerText: 'Australia', isCorrect: false },
      ],
    },
    {
      questionText: <img src={Serbia} alt="S" />,
      answerOptions: [
        { answerText: 'Serbia', isCorrect: true },
        { answerText: 'Slovenia', isCorrect: false },
      ],
    },
    {
      questionText: <img src={US} alt="US" />,
      answerOptions: [
        { answerText: 'United Kingdom', isCorrect: false },
        { answerText: 'United States', isCorrect: true },
      ],
    },
    {
      questionText: <img src={Argentina} alt="A" />,
      answerOptions: [
        { answerText: 'Uruguay', isCorrect: false },
        { answerText: 'Argentina', isCorrect: true },
      ],
    },
    {
      questionText: <img src={Russia} alt="R" />,
      answerOptions: [
        { answerText: 'Slovakia', isCorrect: false },
        { answerText: 'Russia', isCorrect: true },
      ],
    },
    {
      questionText: <img src={India} alt="I" />,
      answerOptions: [
        { answerText: 'India', isCorrect: true },
        { answerText: 'Iran', isCorrect: false },
      ],
    },
    {
      questionText: <img src={Monaco} alt="M" />,
      answerOptions: [
        { answerText: 'Monaco', isCorrect: true },
        { answerText: 'Poland', isCorrect: false },
      ],
    },
    {
      questionText: <img src={Ireland} alt="I" />,
      answerOptions: [
        { answerText: 'Ireland', isCorrect: true },
        { answerText: 'Cuba', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }

  };

  return (
    <div className='flags'>
      {showScore ? (
        <div className='score-section'>
          <h1 className='score'>Correct answers {score} of {questions.length}</h1>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <h1 className='question'><span>{currentQuestion + 1}</span>/{questions.length}</h1>
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button className='flagsBtn' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default FlagsQuiz;