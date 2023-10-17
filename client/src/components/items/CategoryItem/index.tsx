import { FC } from 'react'
import { ICategory } from '../../../models/ICategory'
import styles from './styles.module.sass'

interface CategoryItemProps {
	category: ICategory
}

export const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
	return (
		<div className={styles.categoryItem}>
			<img src={category.image} alt={category.name} />
			<span>{category.name}</span>
		</div>
	)
}

export default CategoryItem
