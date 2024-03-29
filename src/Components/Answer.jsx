import './Answer.css'

const Answer = ({correctAnswer, onAnswer, answer, setAnswer}) => {
	
	function handleTextChange (event) {
		setAnswer(event.target.value)
		// console.log("now answer is", answer)
	}
	
	const handleSubmit = () => {
		if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
			onAnswer(true)
		} else {
			onAnswer(false)
		}
	}
	
	return (
		<div className="answer">
			
			<textarea onChange={handleTextChange} value={answer} />
			{/*<textarea onChange={handleTextChange} value={answer} rows={3} cols={20}/>*/}
			{answer !== '' && (
				<button className="submit-button" onClick={handleSubmit}>Submit Answer</button>
			)}
		
		</div>
	)
}

export default Answer
