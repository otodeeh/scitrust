import React from 'react'
import { useRoutes } from 'react-router-dom'
import { DefaultLayout } from '../components/DefaultLayout'
import { ProtectedRoute } from '../components/ProtectedRoute'
import { ScientificJournalsProvider } from '../context/ScientificJournalsContext'
import { Authentication } from '../pages/Authentication'
import { Perfil } from '../pages/Perfil'
import { ScientificJournalsList } from '../pages/ScientificJournals'

export default () =>
	useRoutes([
		{
			path: '/',
			element: (
				<DefaultLayout>
					<ProtectedRoute>
						<></>
					</ProtectedRoute>
				</DefaultLayout>
			)
		},
		{
			path: '/home',
			element: (
				<ScientificJournalsProvider>
					<DefaultLayout>
						<ScientificJournalsList />
					</DefaultLayout>
				</ScientificJournalsProvider>
			)
		},
		{
			path: '/login',
			element: (
				// <UnprotectedRoutes>
				<Authentication />
				// </UnprotectedRoutes>
			)
		},
		{
			path: '/perfil',
			element: (
				<DefaultLayout>
					<ProtectedRoute>
						<Perfil />
					</ProtectedRoute>
				</DefaultLayout>
			)
		}
	])
