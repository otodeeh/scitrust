import React from 'react'
import { useRoutes } from 'react-router-dom'
import { DefaultLayout } from '../components/DefaultLayout'
import { Authentication } from '../pages/Authentication'
import { ScientificJournalsList } from '../pages/ScientificJournals'

export default () =>
	useRoutes([
		{
			path: '/',
			element: <DefaultLayout></DefaultLayout>
		},
		{
			path: '/home',
			element: (
				<DefaultLayout>
					<ScientificJournalsList />
				</DefaultLayout>
			)
		},
		{
			path: '/login',
			element: <Authentication />
		}
	])
