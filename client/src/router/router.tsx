import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout'
import MainPage from '../pages/MainPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout></Layout>,
		children: [
			{
				index: true,
				element: <MainPage></MainPage>,
			},
		],
	},
])
