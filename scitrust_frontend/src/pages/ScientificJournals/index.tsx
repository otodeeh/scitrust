import React from 'react'
import { ScientificJournal } from '../../components/ScientificJournal'
import './styles.scss'

export const ScientificJournalsList = () => {
	return (
		<div className="scientific-journals-list">
			<ScientificJournal note={4.5} id="1" />
			<ScientificJournal note={3} id="2" />
			<ScientificJournal note={2} id="3" />
			<ScientificJournal note={5} id="4" />
		</div>
	)
}
