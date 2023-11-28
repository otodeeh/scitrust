import React from 'react'

interface InputNoneProps extends React.ComponentPropsWithRef<'input'> {}

export const InputNone = ({ ...rest }: InputNoneProps) => {
	return (
		<>
			<input {...rest} />
		</>
	)
}
