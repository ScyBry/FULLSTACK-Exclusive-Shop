import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { categoryAPI } from '../services/CategoriesService'
import { productsAPI } from '../services/ProductsService'

const rootReducer = combineReducers({
	[categoryAPI.reducerPath]: categoryAPI.reducer,
	[productsAPI.reducerPath]: productsAPI.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({}).concat([
			categoryAPI.middleware,
			productsAPI.middleware,
		]),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
