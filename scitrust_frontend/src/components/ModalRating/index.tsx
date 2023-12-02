import React, { useContext } from 'react'
import { ScientificJournalsContext } from '../../context/ScientificJournalsContext'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { SimpleRating } from '../SimpleRating'
import './styles.scss'

interface Params {
	onClose: () => void
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
			}
		}[]
	}
}

export const ModalRating = ({ onClose, data }: Params) => {
	const { onRatingChange } = useContext(ScientificJournalsContext)
	const [value, setValue] = React.useState<number | null>(null)

	const onSubmit = (id: number) => {
		if (value !== null) {
			console.log(value, id)
			onRatingChange(value, id, () => {
				onClose()
			})
		}
	}

	return (
		<div className="modal-rating">
			<Modal showClose onClose={() => onClose()} title="Avaliar">
				<div className="content">
					<div className="description">
						<span>Você deseja avaliar esta publicação?</span>
						<p>{data.title}</p>
						<p>{data.issn}</p>
					</div>
					<SimpleRating
						type="rating"
						onChangeValue={(e) => {
							setValue(e)
						}}
					/>
				</div>
				<div className="action">
					<Button
						className="confirm"
						size="lg"
						onClick={() => onSubmit(data.id)}
					>
						Confirmar
					</Button>
					<Button className="cancel" size="lg" onClick={() => onClose()}>
						Cancelar
					</Button>
				</div>
			</Modal>
		</div>
	)
}
