import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { authenticateResponse } from '../../../models/users'
import { api, login } from '../../../service/api'
import { signInSuccess } from './actions'

interface SignInRequestAction extends PayloadAction<any> {
	resolve: () => void
	reject: (reason?: any) => void
}

function setApiHeaders(accessToken: string) {
	api.interceptors.request.use(function (config: any) {
		config.headers['x-access-token'] = accessToken
		return config
	})
}

function* signIn({
	payload,
	resolve,
	reject
}: SignInRequestAction): Generator<any, void, any> {
	try {
		const response: AxiosResponse<authenticateResponse> = yield call(
			login,
			payload
		)
		const { id, token, name, email } = response.data

		yield call(setApiHeaders, token)

		const signInSuccessPayload = {
			token,
			name,
			id,
			email
		}

		yield put(signInSuccess(signInSuccessPayload))

		window.location.replace(`/home`)
		resolve()
	} catch (error) {
		reject(error)
	}
}

export function setToken(data: any) {
	if (!data?.payload?.auth?.token) return
	const { token } = data.payload.auth
	setApiHeaders(token)
}

export function signOut(data: any) {
	localStorage.clear()
}

export default all([
	takeLatest('persist/REHYDRATE', setToken),
	takeLatest('@auth/SIGN_IN_REQUEST', signIn),
	takeLatest('@auth/SIGN_OUT', signOut)
])
