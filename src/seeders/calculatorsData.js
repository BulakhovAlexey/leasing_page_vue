export default {
	title: 'Рассчитайте стоимость автомобиля в лизинг',
	price: {
		text: 'Стоимость автомобиля',
		default: 3300000,
		from: 1500000,
		to: 10000000,
	},
	firstAmount: {
		text: 'Первоначальный взнос',
		default: 420000,
		from: 10,
		to: 60,
		percent: 13,
	},
	period: {
		text: 'Срок лизинга',
		default: 10,
		from: 6,
		to: 120,
	},
	rate: 20,
}
