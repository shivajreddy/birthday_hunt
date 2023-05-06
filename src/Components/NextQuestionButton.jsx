import React from 'react';

const NextQuestionButton = ({ onNext }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={onNext}>Next Question</button>
    </div>
  );
};

export default NextQuestionButton;