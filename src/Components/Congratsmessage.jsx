import React from 'react'

const CongratsMessage = ({ score, totalQuestions }) => {
	return (
		<div>
			<h1 style={{ textAlign: 'center', fontSize: '60px' }}>Time to get your gift!</h1>
			<p style={{ textAlign: 'center', fontSize: '52px' }}>Defense Of The Ancients</p>
			<p style={{ textAlign: 'center', fontSize: '52px' }}> lives here</p>
		</div>
	)
}

export default CongratsMessage
