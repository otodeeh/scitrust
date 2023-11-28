import React from 'react'
import { NavLink } from 'react-router-dom'
import sci from '../../assets/sci.svg'
import { InputNone } from '../Input/InputNone'
import { InputRoot } from '../Input/InputRoot'
import './styles.scss'

const NavBar = () => {
	return (
		<>
			<nav className="header-content-menu">
				<div className="header-search-menu">
					<img src={sci} alt="" style={{ height: '100%' }} />
					<InputRoot>
						<InputNone placeholder="Buscar ISSN ou nome" />
					</InputRoot>
					{/* <span>Perfil</span> */}
				</div>
			</nav>
			<nav className="header-content-menu">
				<div className="header-menu">
					<NavLink to="/home">
						<span>Home</span>
					</NavLink>
					<NavLink to="/login">
						<span>Perfil</span>
					</NavLink>
				</div>
			</nav>
		</>
	)
}

export default NavBar
