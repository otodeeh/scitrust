import React, { ReactNode, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export const UnprotectedRoutes = ({ children }: { children: ReactNode }) => {
	const { user } = useContext(AuthContext)

	return user.token ? <Navigate to={`/home`} /> : <>{children}</>
}
