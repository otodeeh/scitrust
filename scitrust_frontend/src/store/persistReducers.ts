import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export default (reducers: any) =>
	persistReducer(
		{
			key: 'appStore',
			storage,
			whitelist: ['auth']
		},
		reducers
	)
