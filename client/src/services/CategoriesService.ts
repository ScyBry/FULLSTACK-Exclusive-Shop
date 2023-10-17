import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ICategory } from '../models/ICategory'

export const categoryAPI = createApi({
	reducerPath: 'categoryAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7777/api' }),
	tagTypes: ['Category'],
	endpoints: build => ({
		fetchAllCategories: build.query<ICategory[], number>({
			query: () => ({
				url: '/category',
			}),
		}),
	}),
})
