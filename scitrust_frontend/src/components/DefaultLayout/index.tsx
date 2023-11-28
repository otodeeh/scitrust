import React from 'react'
import NavBar from '../Menu'
import './styles.scss'

type TParams = {
	children?: React.ReactNode
}

export const DefaultLayout = ({ children }: TParams) => (
	<div className="main-content-module">
		<NavBar />
		<div className={`section`}>{children}</div>
	</div>
)
