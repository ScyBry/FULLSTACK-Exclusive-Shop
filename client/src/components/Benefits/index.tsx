import { FC } from 'react'
import { benefitsContent } from '../../utils/constants'
import BenefitsItem from '../items/BenefitsItem'

const Benefits: FC = () => {
	return (
		<div>
			{benefitsContent.map(benefit => (
				<BenefitsItem
					key={benefit.id}
					image={benefit.image}
					title={benefit.title}
					subTitle={benefit.subTitle}
				></BenefitsItem>
			))}
		</div>
	)
}

export default Benefits
