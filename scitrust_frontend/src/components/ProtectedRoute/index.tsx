import React, { ReactNode, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { api } from '../../service/api'

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
	const { user, onLogout } = useContext(AuthContext)

	api.interceptors.response.use(
		(response: any) => response,
		async function (error: any) {
			if (error.response.status === 401 && user.token) {
				return onLogout()
			}
			return Promise.reject(error)
		}
	)

	return user.token ? <>{children}</> : <Navigate to={`/login`} />
}
