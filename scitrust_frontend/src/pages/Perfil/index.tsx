import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './styles.scss'

export const Perfil = () => {
	const { user } = useContext(AuthContext)

	return (
		<div className="perfil">
			<label htmlFor="">
				Nome:
				<p>{user.name}</p>
			</label>
			<label htmlFor="">
				Email:
				<p>{user.email}</p>
			</label>
		</div>
	)
}
