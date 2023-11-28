import React, { ChangeEvent, useEffect, useState } from 'react'
import './styles.scss'

interface Props extends React.ComponentPropsWithRef<'textarea'> {}

export const InputComment = ({ ...rest }: Props) => {
	const [text, setText] = useState<string>('')

	const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setText(event.target.value)
	}

	const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault()
			console.log('Message sent:', text)
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
			textarea.style.height = 'auto' // Redefine a altura para o valor automático antes de calcular
			textarea.style.height = `${textarea.scrollHeight}px` // Define a altura com base no conteúdo
			inputComment.style.height = 'auto' // Redefine a altura para o valor automático antes de calcular
			inputComment.style.height = `${inputComment.scrollHeight}px` // Define a altura com base no conteúdo
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
