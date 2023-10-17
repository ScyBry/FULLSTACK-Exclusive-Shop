import { FC } from 'react'
import { productsAPI } from '../../services/ProductsService'
import SectionTitle from '../SectionTitle'
import ProductItem from '../items/ProductItem'
import styles from './styles.module.sass'

const Products: FC = () => {
	const { data: products, isLoading } = productsAPI.useFetchAllProductsQuery(0)
	console.log(products)
	console.log(isLoading)
	return (
		<section className={styles.products}>
			<SectionTitle
				name='Our Products'
				title='Explore Our Products'
			></SectionTitle>

			<div className={styles.products__container}>
				{isLoading ? (
					<p>aboba</p>
				) : (
					products?.map(product => (
						<ProductItem key={product.id} product={product}></ProductItem>
					))
				)}
			</div>
		</section>
	)
}

export default Products
