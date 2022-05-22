import React from 'react';
import { useState } from 'react';
import '../styles/WorldHistory.css';

function WorldHistory() {

  const questions = [
    {
      questionText: 'Which of the following statements are correct regarding Pyramids built by Egyptians?',
      answerOptions: [
        { answerText: 'Pyramids were royal tombs with four triangle-shaped sides that meet in a point on top.', isCorrect: true },
        { answerText: 'Pyramids were stone tombs with four rectangle-shaped sides that join a limestone roof.', isCorrect: false },
        { answerText: 'Pyramids were temples where the people are allowed to come and pray.', isCorrect: false },
        { answerText: 'Pyramids acted as warehouses where surplus food is stored.', isCorrect: false },
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
    <div className='worldHistory'>
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
            <div className='question-text'><h1 className='question'>{questions[currentQuestion].questionText}</h1></div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button className='historyBtn' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default WorldHistory;