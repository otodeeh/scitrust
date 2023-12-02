import { produce } from 'immer'

const INITIAL_STATE = {
	token: null,
	name: null,
	id: null,
	email: null
}

export default function auth(state = INITIAL_STATE, action: any) {
	return produce(state, (draft) => {
		switch (action.type) {
			case '@auth/SIGN_IN_SUCCESS': {
				draft.token = action.payload.token
				draft.name = action.payload.name
				draft.id = action.payload.id
				draft.email = action.payload.email
				break
			}
			case '@auth/SIGN_OUT': {
				draft.token = null
				draft.name = null
				draft.id = null
				draft.email = null
				break
			}
			default:
		}
	})
}
