import { FC } from 'react'
import styles from './styles.module.scss'

interface BenefitsItemProps {
	image: string
	title: string
	subTitle: string
}

const BenefitsItem: FC<BenefitsItemProps> = ({ image, title, subTitle }) => {
	return (
		<div className={styles.benefitsItem}>
			<img src={image} alt='' />
			<h3>{title}</h3>
			<span>{subTitle}</span>
		</div>
	)
}

export default BenefitsItem
