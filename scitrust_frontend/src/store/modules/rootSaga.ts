import { SagaIterator } from 'redux-saga'
import { all } from 'redux-saga/effects'
import auth from './auth/sagas'

export default function* rootSaga(): SagaIterator {
	return yield all([auth])
}
