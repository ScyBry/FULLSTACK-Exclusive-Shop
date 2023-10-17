import { MoonLoader } from 'react-spinners'
import { categoryAPI } from '../../services/CategoriesService'
import SectionTitle from '../SectionTitle'
import CategoryItem from '../items/CategoryItem'
import styles from './styles.module.sass'

const Categories = () => {
	const { data: categories, isLoading } =
		categoryAPI.useFetchAllCategoriesQuery(2)

	return (
		<section className={styles.container}>
			<div className={styles.categories__header}>
				<SectionTitle
					name='Categories'
					title='Browse By Categories'
				></SectionTitle>
			</div>

			<div className={styles.categories__main}>
				{isLoading
					? Array.from({ length: 5 }, () => (
							<MoonLoader color='#DB4444'></MoonLoader>
					  ))
					: categories.map(category => (
							<CategoryItem
								key={category.id}
								category={category}
							></CategoryItem>
					  ))}
			</div>
		</section>
	)
}

export default Categories
