import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IProduct } from '../models/IProduct'

export const productsAPI = createApi({
	reducerPath: 'productsAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7777/api' }),
	tagTypes: ['Products'],
	endpoints: build => ({
		fetchAllProducts: build.query<IProduct[], number>({
			query: () => ({
				url: '/products',
			}),
		}),
	}),
})
