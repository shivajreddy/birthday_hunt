import './HomePage.css'
import { FallingEmojis } from 'falling-emojis'
import Question from './Question.jsx'
import Answer from './Answer.jsx'

const HomePage = () => {
	
	
	return (
		<div className="main-page gradient-background">
			<FallingEmojis emoji={'🎂️'}/>
			
			<h1 style={{textAlign: "center", fontSize:"4em", paddingTop:"100px", color: "white"}}>🎉 Birthday Hunt 🎉</h1>
			
			<div className="container">
				<div className="content">
					
					<Question>
						WHAT IS YOUR MAVAYA NAME ?
					</Question>
					<Answer></Answer>
					
				
				</div>
			</div>
			
		</div>
	)
}

export default HomePage
