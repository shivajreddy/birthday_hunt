import { useState } from 'react'
import './Answer.css'

const Answer = () => {
	const [value, ChangeValue] = useState("");
	
	function handleTextChange(event){
		ChangeValue(event.value);
	}
	
	
	return (
		<div>
			
			
			<textarea onChange={handleTextChange} value={value} className="answer" rows={3} cols={20} />
			
		</div>
	)
}

export default Answer
