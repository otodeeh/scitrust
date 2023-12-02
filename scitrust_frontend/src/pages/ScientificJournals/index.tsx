import React, { useContext, useEffect } from 'react'
import { ScientificJournal } from '../../components/ScientificJournal'
import { ScientificJournalsContext } from '../../context/ScientificJournalsContext'
import './styles.scss'

export const ScientificJournalsList = () => {
	const { list, onSearchParams } = useContext(ScientificJournalsContext)

	useEffect(() => {
		onSearchParams('')
	}, [])

	const calculateAverageRating = (ratings: number[]) => {
		if (ratings.length === 0) {
			return -1
		} else {
			const sum = ratings.reduce((a, b) => a + b, 0)
			return sum / ratings.length
		}
	}

	return (
		<>
			<div className="scientific-journals-list">
				{list?.periodicals.map((journal) => (
					<ScientificJournal
						key={journal.id}
						rating={calculateAverageRating(
							journal.ratings.map((rating) => rating.value)
						)}
						id={journal.id}
						data={journal}
					/>
				))}
			</div>
		</>
	)
}
