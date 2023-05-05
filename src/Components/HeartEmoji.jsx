import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './HeartEmoji.css'

const HeartEmoji = () => {
	const [hearts, setHearts] = useState([])
	
	useEffect(() => {
		const newHearts = []
		for (let i = 0; i < 10; i++) {
			newHearts.push({
				x: Math.floor(Math.random() * window.innerWidth),
				y: Math.floor(Math.random() * window.innerHeight),
				direction: Math.random() < 0.5 ? -1 : 1,
				speed: Math.floor(Math.random() * 10) + 1,
			})
		}
		setHearts(newHearts)
	}, [])
	
	return (
		<div className="heart-container">
			{hearts.map((heart, index) => (
				<motion.span
					key={index}
					style={{
						fontSize: '2rem',
						display: 'inline-block',
						position: 'absolute',
						top: heart.y,
						left: heart.x,
						transform: `rotate(${index % 2 === 0 ? '-' : ''}45deg)`,
					}}
					// animate={{
					// 	y: heart.y + heart.direction * 50,
					// 	rotate: 360,
					// }}
					transition={{
						duration: heart.speed,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
				>
					{'❤️'}
				</motion.span>
			))}
		</div>
	)
}

export default HeartEmoji
