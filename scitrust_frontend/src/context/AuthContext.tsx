import React, {
	ReactNode,
	createContext,
	useEffect,
	useRef,
	useState
} from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { authenticateResponse, loginRequest } from '../models/users'
import { store } from '../store'
import { signOut, useSignInRequest } from '../store/modules/auth/actions'

export const AuthContext = createContext({
	user: {} as authenticateResponse,
	isLoading: false,
	isCompleted: false,
	onLogin: (data: loginRequest) => {},
	onLogout: () => {}
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isCompleted, setIsCompleted] = useState<boolean>(false)

	const signInRequest = useSignInRequest()

	const userRef = useRef<authenticateResponse>(store.getState().auth)

	const dispatch = useDispatch()

	useEffect(() => {
		const auth = store.getState().auth
		if (auth.token) {
			userRef.current = auth
		}
	}, [])

	const handleLogin = async (data: loginRequest) => {
		console.log('🚀 ~ file: AuthContext.tsx:40 ~ handleLogin ~ data:', data)
		try {
			setIsLoading(true)
			await signInRequest(data)
			toast.success('authContext.loginSuccess')
		} catch (error) {
			setIsLoading(false)
			toast.error('authContext.loginError')
		}
	}

	const handleLogout = () => {
		userRef.current = {} as authenticateResponse
		dispatch(signOut())
	}

	const value = {
		user: userRef.current,
		isLoading,
		isCompleted,
		onLogin: handleLogin,
		onLogout: handleLogout
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
