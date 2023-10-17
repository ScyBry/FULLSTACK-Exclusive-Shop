import ServiceIcon from '../assets/BenefitsIcons/Icon-Customer.png'
import SecureIcon from '../assets/BenefitsIcons/Secure.png'
import DeliveryIcon from '../assets/BenefitsIcons/icon-delivery.png'

export const headerRoutes = [
	{
		name: 'Home',
		route: '/',
	},

	{
		name: 'Contact',
		route: 'Contact',
	},

	{
		name: 'About',
		route: 'about',
	},

	{
		name: 'SignUp',
		route: 'signUp',
	},
]

export const benefitsContent = [
	{
		id: 1,
		image: DeliveryIcon,
		title: 'FREE AND FAST DELIVERY',
		subTitle: 'Free delivery for all orders over $140',
	},

	{
		id: 2,
		image: ServiceIcon,
		title: '24/7 CUSTOMER SERVICE',
		subTitle: 'Friendly 24/7 customer support',
	},

	{
		id: 3,
		image: SecureIcon,
		title: 'MONEY BACK GUARANTEE',
		subTitle: 'We return money within 30 days',
	},
]
