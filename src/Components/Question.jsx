import './Question.css'

const Question = (props) => {
	return (
		<div className="question">
			
			{props.children}
			
		</div>
	)
}

export default Question
