// import './Question.css'
//
// const Question = (props) => {
// 	return (
// 		<div className="question">
//
// 			{props.children}
//
// 		</div>
// 	)
// }
//
// export default Question
import './Question.css'


const Question = ({ question }) => {
  return (
    <div className="question">
      <h2>{question}</h2>
    </div>
  );
};

export default Question;