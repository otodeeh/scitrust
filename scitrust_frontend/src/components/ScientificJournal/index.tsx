import React, { useState } from 'react'
import { InputComment } from '../InputComment'
import './styles.scss'

type Props = {
	note: number
	id: string
}

export const ScientificJournal = ({ note, id }: Props) => {
	const [addComments, setAddComments] = useState<boolean>(false)

	const changeColor = () => {
		if (note >= 4) {
			return '#d9e6bd'
		} else if (note <= 4 && note >= 2.5) {
			return '#e6ccbd'
		} else {
			return '#e6bdbd'
		}
	}

	return (
		<div
			className="scientific-journal"
			style={{ backgroundColor: `${changeColor()}` }}
		>
			<div className="content-information">
				<h1>Titulo</h1>
				<div
					className="info"
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<p>ISSN: 1234</p>
					<p>01/05/2023</p>
				</div>
				<p className="description">
					Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veniam dolore quas officia veritatis quidem, ducimus perspiciatis
					facilis, culpa, voluptas error ut incidunt odio ab fugit? Nam sapiente
					laudantium magnam suscipit.
				</p>
			</div>
			<div className="content-actions">
				<div className="interaction">
					<p onClick={() => setAddComments(!addComments)}>Comentar</p>
					<p>Avaliar</p>
				</div>
				{addComments && (
					<div className="comments">
						<InputComment id={id} />
					</div>
				)}
			</div>
		</div>
	)
}
