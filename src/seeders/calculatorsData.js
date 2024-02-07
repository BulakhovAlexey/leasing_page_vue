export default {
	title: 'Рассчитайте стоимость автомобиля в лизинг',
	price: {
		text: 'Стоимость автомобиля',
		default: 3000000,
		from: 1500000,
		to: 10000000,
	},
	firstAmount: {
		text: 'Первоначальный взнос',
		default: 300000,
		from: 5,
		to: 60,
		percent: 10,
	},
	period: {
		text: 'Срок лизинга',
		default: 10,
		from: 6,
		to: 120,
	},
	sum: 'Сумма',
	paymentPerMonth: 'Ежемесячный платеж',
	rate: 20,
}
