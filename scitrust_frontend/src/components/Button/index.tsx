import React from 'react'
import './styles.scss'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
	size: 'sm' | 'md' | 'lg'
}

export const Button = ({ size, ...rest }: ButtonProps) => {
	return (
		<div className={`button-component ${size} `}>
			<button className={`${size}`} {...rest}></button>
		</div>
	)
}
