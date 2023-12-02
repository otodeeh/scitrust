import React, { ChangeEvent, useEffect, useState } from 'react'
import './styles.scss'

interface Props extends React.ComponentPropsWithRef<'textarea'> {
	onSubmit: (value: any) => void
}

export const InputComment = ({ onSubmit, ...rest }: Props) => {
	const [text, setText] = useState<string>('')

	const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setText(event.target.value)
	}

	const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault()
			onSubmit(text)
			setText('')
		}
	}

	useEffect(() => {
		const textarea = document.getElementById(
			`expanding-textarea${rest.id}`
		) as HTMLTextAreaElement
		const inputComment = document.getElementById(
			`input-comment${rest.id}`
		) as HTMLDivElement
		if (textarea) {
			textarea.style.height = 'auto'
			textarea.style.height = `${textarea.scrollHeight}px`
			inputComment.style.height = 'auto'
			inputComment.style.height = `${inputComment.scrollHeight}px`
		}
	}, [text])

	return (
		<div id={`input-comment${rest.id}`} className="input-comment">
			<textarea
				value={text}
				onChange={handleTextChange}
				{...rest}
				id={`expanding-textarea${rest.id}`}
				className="expanding-textarea"
				placeholder="Comente..."
				onKeyDown={(event: React.KeyboardEvent<HTMLTextAreaElement>) =>
					handleKeyPress(event)
				}
			/>
		</div>
	)
}
