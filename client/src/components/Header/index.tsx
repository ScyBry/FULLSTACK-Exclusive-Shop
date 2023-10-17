import { FC } from 'react'
import { headerRoutes } from '../../utils/constants'
import SearchBar from '../SearchBar'
import UsersSection from '../UsersSection'
import styles from './styles.module.sass'

const Header: FC = () => {
	const isAuth = true
	return (
		<section className={styles.container}>
			<header className={styles.header}>
				<span className={styles.header__logo}>Exclusive</span>
				<ul className={styles.header__links}>
					{headerRoutes.map(link => (
						<li key={link.name} className={styles.link}>
							{link.name}
						</li>
					))}
				</ul>

				<SearchBar></SearchBar>

				{isAuth && <UsersSection></UsersSection>}
			</header>
		</section>
	)
}

export default Header
