import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout: FC = () => {
	return (
		<div>
			<Header></Header>
			<main>
				<Outlet></Outlet>
			</main>
		</div>
	)
}

export default Layout
