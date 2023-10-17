export interface IProduct {
	id: number
	name: string
	images: Array<string>
	description: string
	quantity: number
	rating: string
	orders: number
	price: string
	createdAt: Date
	updatedAt: Date
}
