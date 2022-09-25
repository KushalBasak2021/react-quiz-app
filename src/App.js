import React, { useState } from "react";
import questions from "./questionData";
import "./App.css";

function App() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  function handleClick(isCorrect) {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionNumber(
      (previousQuestionNumber) => previousQuestionNumber + 1
    );
  }
  return (
    <>
      {currentQuestionNumber === 4 ? (
        <div className="App conditional">
          Your score is {score}/{questions.length}
        </div>
      ) : (
        <div className="App">
          <div className="left-section">
            <h3>Question</h3>
            <p>
              {currentQuestionNumber + 1}/{questions.length}
            </p>
            <h4>{questions[currentQuestionNumber].questionText}</h4>
          </div>
          <div className="right-section">
            {questions[currentQuestionNumber].answerOptions.map(
              (answerOptions) => (
                <button onClick={() => handleClick(answerOptions.isCorrect)}>
                  {answerOptions.answerText}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
