import * as React from 'react'
import { motion, useSpring, useTransform, useScroll } from 'framer-motion'

type CircleIndicatorProps = {
	place?: 'top-right' | 'bottom-right' | 'bottom-left'
}

const CircleIndicator: React.FC<CircleIndicatorProps> = (props) => {
	const { scrollYProgress } = useScroll()
	const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])
	const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })

	const place =
		props.place === 'top-right'
			? 'top-7 right-7'
			: props.place === 'bottom-left'
			? 'bottom-7 left-7'
			: props.place === 'bottom-right'
			? 'bottom-7 right-7'
			: 'top-7 left-7'

	const style = `${place} sticky`

	return (
		<div className={style}>
			<svg className={`fixed w-12 h-12 ${place}`} viewBox="0 0 60 60">
				<motion.path
					fill="none"
					strokeWidth="2"
					stroke="white"
					strokeDasharray="0 1"
					d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
					style={{
						pathLength,
						rotate: 90,
						translateX: 5,
						translateY: 5,
						scaleX: -1 // Reverse direction of line animation
					}}
				/>
			</svg>
		</div>
	)
}

export default CircleIndicator
