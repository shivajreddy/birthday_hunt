import HomePage from './Components/HomePage.jsx'
import BirthdayGame from './Components/BirthdayGame.jsx'
import Game from './Components/Game.jsx'
import './App.css'
import { FallingEmojis } from 'falling-emojis'

function App () {
	
	return (
		<>
			<div className="gradient-background">
				<FallingEmojis emoji={'🎂'} />
				
				{/*<Title/>*/}
				
				<Game/>
			</div>
		</>
	)
}

export default App
