import { Badge } from '@mui/material'
import { FC } from 'react'
import CartIcon from '../../assets/Cart.svg'
import WishlistIcon from '../../assets/Wishlist.svg'
import styles from './styles.module.sass'

const UsersSection: FC = () => {
	return (
		<div className={styles.usersSection_container}>
			<Badge badgeContent={4} color='error'>
				<img src={WishlistIcon} alt='CartIcon' />
			</Badge>
			<Badge badgeContent={4} color='error'>
				<img src={CartIcon} alt='CartIcon' />
			</Badge>
		</div>
	)
}

export default UsersSection
