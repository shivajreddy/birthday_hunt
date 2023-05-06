import React from 'react';

const NextQuestionButton = ({ onNext }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button style={{fontSize : '2rem'}} onClick={onNext}>Next Question</button>
    </div>
  );
};

export default NextQuestionButton;