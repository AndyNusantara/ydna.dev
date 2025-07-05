import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
	link?: string
}

const Button: React.FC<ButtonPropsType> = (props) => {
	const buttonStyle = cn(
		'h-10 border-2 w-fit gap-2 flex justify-center items-center rounded-sm p-2 text-cyan-400',
		props.className
	)

	return (
		<button {...props} className={buttonStyle}>
			{props.children}
		</button>
	)
}

export default Button
