import { useDispatch } from 'react-redux'

export const useSignInRequest = () => {
	const dispatch = useDispatch()

	const signInRequest = async ({
		email,
		password
	}: {
		email: string
		password: string
	}) => {
		return new Promise((resolve, reject) => {
			try {
				dispatch({
					type: '@auth/SIGN_IN_REQUEST',
					payload: { email, password },
					resolve,
					reject
				})
			} catch (error) {
				reject(error)
			}
		})
	}

	return signInRequest
}

export const signInSuccess = ({
	token,
	name,
	id,
	email
}: {
	token: string
	name: string
	id: number
	email: string
}) => ({
	type: '@auth/SIGN_IN_SUCCESS',
	payload: {
		token,
		name,
		id,
		email
	}
})

export const signOut = () => ({
	type: '@auth/SIGN_OUT'
})
