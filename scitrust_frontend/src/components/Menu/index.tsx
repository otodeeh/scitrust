import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import sci from '../../assets/sci.svg'
import { AuthContext } from '../../context/AuthContext'
import { Input } from '../Input'
import './styles.scss'

const NavBar = () => {
	const { onLogout } = useContext(AuthContext)

	return (
		<>
			<nav className="header-content-menu">
				<div className="header-search-menu">
					<img src={sci} alt="" style={{ height: '100%' }} />
					<Input placeholder="Buscar ISSN ou nome" />
				</div>
			</nav>
			<nav className="header-content-menu">
				<div className="header-menu">
					<NavLink to="/home">
						<span>Home</span>
					</NavLink>
					<NavLink to="/perfil">
						<span>Perfil</span>
					</NavLink>
					<NavLink to="/login" onClick={onLogout}>
						<span>Sair</span>
					</NavLink>
				</div>
			</nav>
		</>
	)
}

export default NavBar
