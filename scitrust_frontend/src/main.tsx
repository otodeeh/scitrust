import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'
import './index.css'
import Routes from './routes/index.tsx'
import { store } from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<AuthProvider>
					<Routes />
				</AuthProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
