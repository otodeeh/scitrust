import axios, { AxiosRequestConfig } from 'axios'
import { GetPeriodical } from '../models/usecases/get-periodical'

const axiosConfig: AxiosRequestConfig = {
	baseURL: import.meta.env.VITE_REACT_APP_API_URL,
	headers: { 'X-Custom-Header': 'foobar' },
	validateStatus: (status) => {
		return status >= 200 && status < 400
	},
	transformResponse: [
		function (data) {
			if (data) {
				return JSON.parse(data)
			}
			return data
		}
	]
}

export const api = axios.create(axiosConfig)

export const login = (data: any) => {
	return api.post('/login', data)
}

export const getPeriodicals = (params: GetPeriodical.Params) => {
	const search = params?.term || ''
	const limit = `&limit=${params.limit}`
	const offset = `&offset=${params.offset}`

	return api.get<GetPeriodical.Return>(
		`/periodicals?term=${search}${limit}${offset}`
	)
}

export const addComment = (data: any) => {
	return api.post(`/periodicals/comments/${data.periodicalId}`, data)
}

export const addRating = (data: any) => {
	return api.post(`/periodicals/rating/${data.periodicalId}`, data)
}
