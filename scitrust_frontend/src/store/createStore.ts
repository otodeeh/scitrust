import { Middleware, Store, applyMiddleware, createStore } from 'redux'

export default function configureStore(
	reducers: any,
	middlewares: Middleware[]
): Store {
	const enhancer = applyMiddleware(...middlewares)

	const store = createStore(reducers, enhancer)
	return store
}
