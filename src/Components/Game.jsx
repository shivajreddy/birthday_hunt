import { useState } from 'react'
import Title from './Title'
import Question from './Question'
import Answer from './Answer'
import Checkmark from './Checkmark'
import NextQuestionButton from './NextQuestionButton'
import CongratsButton from './CongratsButton.jsx'
import CongratsMessage from './Congratsmessage.jsx'

const questions = [
	{
		question: 'WHAT IS YOUR MAVAYA\'S NAME?',
		answer: 'jayarami reddy',
	},
	{
		question: 'WHAT IS YOUR ATHAYA\'S NAME?',
		answer: 'Tulasi',
	},
	{
		question: "What is my wife's name",
		answer: 'England Reddy',
	},
	{
		question: 'Who loves the other person more, Shiva or England',
		answer: 'Shiva',
	},
	{
		question: "what did you eat yesterday for lunch.",
		answer: '',
	},
	// Add more questions here
]

const Game = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [showCheckmark, setShowCheckmark] = useState(false)
	const [showNextButton, setShowNextButton] = useState(false)
	const [score, setScore] = useState(0)
	const [answer, setAnswer] = useState('')
	const [showCongratsButton, setShowCongratsButton] = useState(false)
	const [showCongratsMessage, setShowCongratsMessage] = useState(false)
	
	const handleAnswer = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1)
			setShowCheckmark(isCorrect)
			if (currentQuestionIndex == questions.length - 1) {
				// setShowCongratsMessage(true)
				setShowCongratsButton(true)
			} else {
				setShowNextButton(true)
			}
		} else {
			setShowCheckmark(false)
			setShowNextButton(false)
		}
	}
	
	const handleNextQuestion = () => {
		setShowCheckmark(false)
		setShowNextButton(false)
		setCurrentQuestionIndex(currentQuestionIndex + 1)
		setAnswer('')
	}
	
	const handleCongratsClick = () => {
		setShowCongratsMessage(true)
	}
	
	const currentQuestion = questions[currentQuestionIndex]
	
	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100vh',
		}}>
			<Title/>
			<div style={{ width: '80%', margin: '2rem' }}>
				{
					!showCongratsButton &&
					<div>
						<Question question={currentQuestion.question}/>
						<Answer correctAnswer={currentQuestion.answer}
										onAnswer={handleAnswer}
										answer={answer} setAnswer={setAnswer}/>
						{showCheckmark && <Checkmark/>}
						{showNextButton &&
							<NextQuestionButton onNext={handleNextQuestion}/>}
						{showCongratsButton &&
							<CongratsButton onCongratsClick={handleCongratsClick}/>}
						<div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
							Score: {score}/{questions.length}
						</div>
					
					</div>
				}
				{showCongratsButton &&
					<div>
					<CongratsMessage score={score} totalQuestions={questions.length}/>
					</div>
					}
			</div>
		</div>
	)
}

export default Game
