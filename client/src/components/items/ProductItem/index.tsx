import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import { IconButton, Rating } from '@mui/material'
import { FC } from 'react'
import { IProduct } from '../../../models/IProduct'
import styles from './styles.module.sass'

interface ProductItemProps {
	product: IProduct
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
	console.log(+product.rating)
	return (
		<div className={styles.itemContainer}>
			<div className={styles.item__imageContainer}>
				<IconButton aria-label='Add To Wishlist' size='small'>
					<FavoriteBorderRoundedIcon></FavoriteBorderRoundedIcon>
				</IconButton>
				<img src={product.images[0]} alt={product.name} />
				<button className={styles.cartButton}>Add To Cart</button>
			</div>
			<div className={styles.item__info}>
				<h4>{product.name}</h4>
				<div className={styles.info}>
					<span className={styles.itemPrice}>${product.price}</span>
					<div className={styles.ratingContainer}>
						<Rating
							name='read-only'
							value={+product.rating}
							readOnly
							precision={0.1}
						/>
						<span className={styles.orders}>({product.orders})</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
