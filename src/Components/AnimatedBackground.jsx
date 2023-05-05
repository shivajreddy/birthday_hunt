import './AnimatedBackground.css'
// import HeartEmoji from './HeartEmoji.jsx'
import { FallingEmojis } from 'falling-emojis';



const AnimatedBackground = () => {
	return (
		<div className="main-page gradient-background">
			
			<FallingEmojis emoji={'❤️'} />
		
		</div>
	)
}

export default AnimatedBackground
