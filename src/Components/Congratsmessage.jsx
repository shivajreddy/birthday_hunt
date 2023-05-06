import React from 'react';

const CongratsMessage = ({ score, totalQuestions }) => {
  return (
    <div>
      <p>Congratulations, you have completed the quiz!</p>
      <p>Your final score is: {score}/{totalQuestions}</p>
    </div>
  );
};

export default CongratsMessage;
