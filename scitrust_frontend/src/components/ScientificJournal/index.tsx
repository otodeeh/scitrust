import React, { useContext, useState } from 'react'
import { ScientificJournalsContext } from '../../context/ScientificJournalsContext'
import { InputComment } from '../InputComment'
import { ModalRating } from '../ModalRating'
import { SimpleRating } from '../SimpleRating'
import './styles.scss'

type Props = {
	rating: number
	id: number
	data: {
		issn: string
		title: string
		id: number
		description: string
		stratum: string
		createdAt: Date
		comments: {
			id: number
			text: string
			createdAt: Date
			user: {
				name: string
				ratings: {
					id: number
					value: number
				}[]
			}
		}[]
	}
}

export const ScientificJournal = ({ rating, id, data }: Props) => {
	const [addComments, setAddComments] = useState<boolean>(false)
	const [modalRatingShow, setModalRatingShow] = useState<boolean>(false)
	const [availablePeriodicals, setAvailablePeriodicals] = useState<any>()

	const { onCommentChange } = useContext(ScientificJournalsContext)

	const changeColor = () => {
		if (rating >= 4) {
			return '#d9e6bd'
		} else if (rating <= 4 && rating >= 2.5) {
			return '#e6ccbd'
		} else if (rating <= 2.5 && rating >= 0) {
			return '#e6bdbd'
		} else if (rating === -1) {
			return '#c2dfe9'
		}
	}

	return (
		<>
			<div
				className="scientific-journal"
				style={{ backgroundColor: `${changeColor()}` }}
			>
				<div className="content-information">
					<div className="header">
						<h1>{data.title}</h1>
						<SimpleRating
							value={rating}
							onChangeValue={() => {}}
							type="readonly"
						/>
					</div>
					<div
						className="info"
						style={{ display: 'flex', justifyContent: 'space-between' }}
					>
						<p>ISSN: {data.issn}</p>
						<p>{`${new Date(data.createdAt).toLocaleDateString()}`}</p>
					</div>
					<p className="description">{data.description}</p>
				</div>
				<div className="content-actions">
					<div className="interaction">
						<p onClick={() => setAddComments(!addComments)}>Comentar</p>
						<p
							onClick={() => {
								setAvailablePeriodicals(data)
								setModalRatingShow(!modalRatingShow)
							}}
						>
							Avaliar
						</p>
					</div>
					{addComments && (
						<div className="comments">
							<InputComment
								id={`${id}`}
								onSubmit={(text) => onCommentChange(text, id)}
							/>
						</div>
					)}
				</div>
				<div className="comments-container">
					{data.comments.map((comment) => (
						<div key={comment.id} className="comment">
							<label htmlFor="">{comment.user.name}:</label>
							<p>{comment.text}</p>
						</div>
					))}
				</div>
			</div>
			{modalRatingShow && (
				<ModalRating
					data={availablePeriodicals}
					onClose={() => setModalRatingShow(false)}
				/>
			)}
		</>
	)
}
