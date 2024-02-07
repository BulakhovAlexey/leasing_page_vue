<template>
	<section id="calc" class="calculator">
		<div class="calculator__container">
			<div class="calculator__inner">
				<h2 class="calculator__title title">{{ data.title }}</h2>
				<form class="calculator__form form-calculator">
					<div class="form-calculator__row">
						<div class="form-calculator__field">
							<label for="price">{{ data.price.text }}</label>
							<div class="form-calculator__input input">
								<input
									class="input__rub"
									type="number"
									name="price"
									v-model="priceValue"
								/>
								<Slider
									v-model="priceValue"
									:min="priceMin"
									:max="priceMax"
									:lazy="false"
									:tooltips="false"
									:step="1000"
								/>
							</div>
						</div>
						<div class="form-calculator__field">
							<label for="percent">{{ data.firstAmount.text }}</label>
							<div class="form-calculator__input">
								<span class="percent">{{ percent }}%</span>
								<input
									class="input__perс"
									type="number"
									name="percent"
									v-model="firstAmountValue"
								/>
								<Slider
									v-model="firstAmountValue"
									:min="firstAmountMin"
									:max="firstAmountMax"
									:lazy="false"
									:tooltips="false"
									:step="1000"
								/>
							</div>
						</div>
						<div class="form-calculator__field">
							<label for="period">{{ data.period.text }}</label>
							<div class="form-calculator__input">
								<input
									class="input__period"
									type="number"
									name="period"
									v-model="periodValue"
								/>
								<Slider
									v-model="periodValue"
									:min="periodMin"
									:max="periodMax"
									:lazy="false"
									:tooltips="false"
									:step="1"
								/>
							</div>
						</div>
					</div>
					<div class="form-calculator__row">
						<div class="form-calculator__field">
							<p class="form-calculator__desc">{{ sumText }}</p>
							<p class="form-calculator__value">
								{{ numFormatter(CountFinalSum) }}
							</p>
						</div>
						<div class="form-calculator__field">
							<p class="form-calculator__desc">{{ sumPerMonthText }}</p>
							<p class="form-calculator__value">
								{{ numFormatter(CountPaymentPerMonth) }}
							</p>
						</div>
						<button type="submit" class="form-calculator__button">
							Оставить заявку
						</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import Slider from '@vueform/slider'
export default {
	components: {
		Slider,
	},
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			priceValue: this.data.price.default,
			priceMin: this.data.price.from,
			priceMax: this.data.price.to,
			periodValue: this.data.period.default,
			periodMin: this.data.period.from,
			periodMax: this.data.period.to,
			firstAmountValue: this.data.firstAmount.default,
			firstAmountMin: 0,
			firstAmountMax: 0,
			percent: this.data.firstAmount.percent,
			sumText: this.data.sum,
			sumPerMonthText: this.data.paymentPerMonth,
		}
	},
	mounted() {
		this.firstAmountMin = Math.round(
			(this.data.price.default * this.data.firstAmount.from) / 100
		)
		this.firstAmountMax = Math.round(
			(this.data.price.default * this.data.firstAmount.to) / 100
		)
	},
	watch: {
		firstAmountValue: {
			handler(newValue) {
				this.updatePercent(newValue)
			},
		},
		priceValue: {
			handler(newValue) {
				this.updateFirstAmount(newValue)
			},
		},
	},
	methods: {
		numFormatter(num) {
			return new Intl.NumberFormat('ru', {
				style: 'currency',
				currency: 'RUB',
				minimumFractionDigits: 0,
			}).format(num)
		},
		updatePercent(value) {
			this.percent = Math.round((value / this.priceValue) * 100)
		},
		updateFirstAmount(newValue) {
			this.firstAmountValue = Math.round(newValue * (this.percent / 100))
			this.firstAmountMin = Math.round(newValue * 0.05)
			this.firstAmountMax = Math.round(newValue * 0.6)
		},
		updateFirstAmountPercent(value) {
			this.percent = Math.round((this.firstAmountValue / value) * 100)
			this.firstAmountMin = Math.round(value / 10)
			this.firstAmountMax = Math.round(value * 0.6)
		},
	},
	computed: {
		CountPaymentPerMonth() {
			return Math.round(
				(this.priceValue - this.firstAmountValue) *
					((0.05 * Math.pow(1.05, this.periodValue)) /
						(Math.pow(1.05, this.periodValue) - 1))
			)
		},
		CountFinalSum() {
			return Math.round(
				this.firstAmountValue + this.periodValue * this.CountPaymentPerMonth
			)
		},
	},
}
</script>

<style lang="scss" scoped></style>
