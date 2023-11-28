import React from 'react'
import sci from '../../assets/sci.svg'
import { ButtonOrcid } from '../../components/ButtonOrcid'
import './styles.scss'

export const Authentication = () => {
	return (
		<div className="authentication">
			<div className="container">
				<img className="logo" src={sci} alt="" style={{ height: '100%' }} />
				<ButtonOrcid size="lg" title="Entrar com ORCID" />
			</div>
		</div>
	)
}
