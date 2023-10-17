import { FC } from 'react'
import SearchIcon from '../../assets/SearchIcon.svg'
import styles from './styles.module.sass'

const SearchBar: FC = () => {
	return (
		<div>
			<form className={styles.searchBar}>
				<input
					className={styles.searchBar__input}
					type='search'
					placeholder='What are you looking for?'
				/>
				<button>
					<img src={SearchIcon} alt='SearchButton' />
				</button>
			</form>
		</div>
	)
}

export default SearchBar
