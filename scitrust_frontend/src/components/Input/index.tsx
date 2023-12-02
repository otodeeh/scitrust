import React from 'react'
import { InputRoot } from './InputRoot'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	children?: React.ReactNode
	innerRef?: any
}

export const Input = ({ children, innerRef, ...rest }: Props) => {
	return (
		<>
			<InputRoot>
				<input {...rest} {...innerRef} />
			</InputRoot>
		</>
	)
}
