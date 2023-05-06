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


const Question = ({ question }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
      <h2>{question}</h2>
    </div>
  );
};

export default Question;