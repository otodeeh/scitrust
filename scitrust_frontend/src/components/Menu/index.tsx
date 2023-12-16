import { debounce } from 'lodash'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import sci from '../../assets/sci.svg'
import { AuthContext } from '../../context/AuthContext'
import { ScientificJournalsContext } from '../../context/ScientificJournalsContext'
import { Input } from '../Input'
import './styles.scss'

const NavBar = () => {
	const { onLogout } = useContext(AuthContext)
	const { onSearchParams } = useContext(ScientificJournalsContext)

	const onSearch = debounce((term: string) => {
		onSearchParams(term)
	}, 600)

	return (
		<>
			<nav className="header-content-menu">
				<div className="header-search-menu">
					<img src={sci} alt="" style={{ height: '100%' }} />
					<Input
						placeholder="Buscar ISSN ou nome"
						onChange={(e) => onSearch(e.target.value)}
					/>
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
