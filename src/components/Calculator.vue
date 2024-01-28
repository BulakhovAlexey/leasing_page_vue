<template>
	<section class="calculator">
		{{ data }}
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
								/>
								<br />
								{{ firstAmountValue }}
								<br />
								{{ firstAmountMin }}
								<br />
								{{ firstAmountMax }}
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
								/>
							</div>
						</div>
					</div>
					<div class="form-calculator__row">
						<div class="form-calculator__field">
							<p class="form-calculator__desc">Сумма</p>
							<p class="form-calculator__value">34343434</p>
						</div>
						<div class="form-calculator__field">
							<p class="form-calculator__desc">платеж</p>
							<p class="form-calculator__value">343454545</p>
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
			firstAmountMin: 330000,
			firstAmountMax: 1980000,
			percent: this.data.firstAmount.percent,
		}
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
		updatePercent(value) {
			this.percent = Math.round((value / this.priceValue) * 100)
		},
		updateFirstAmount(value) {
			console.log(value)
			this.percent = Math.round((this.firstAmountValue / value) * 100)
			console.log('percent' + this.percent)

			this.firstAmountMin = Math.round(value / 10)
			this.firstAmountMax = Math.round(value * 0.6)

			//this.updatePercent(value)
		},
	},
}
</script>

<style lang="scss" scoped></style>
