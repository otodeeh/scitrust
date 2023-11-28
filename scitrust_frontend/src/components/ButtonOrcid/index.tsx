import React from 'react'
import IconOrcid from '../../assets/ORCID_iD.svg'
import './styles.scss'

interface ButtonProps {
	size: 'sm' | 'md' | 'lg'
	title: string
}

export const ButtonOrcid = ({ size, title }: ButtonProps) => {
	return (
		<div className={`button-orcid ${size} `}>
			<img className="orcid" src={IconOrcid} alt="" />
			<p>{title}</p>
		</div>
	)
}
