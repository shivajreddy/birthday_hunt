import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #ffb6c1;
`;

const QuestionText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const AnswerInput = styled.input`
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 10px;
  border: none;
  margin-bottom: 2rem;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 10px;
  border: none;
  background-color: #ffe4e1;
  cursor: pointer;
`;

const Question = ({ question, answer, nextQuestion }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      nextQuestion();
    } else {
      alert('Sorry, wrong answer. Please try again.');
    }
  };

  return (
    <Container>
      <QuestionText>{question}</QuestionText>
      <form onSubmit={handleSubmit}>
        <AnswerInput
          type="text"
          placeholder="Your answer..."
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </Container>
  );
};

export default Question;
