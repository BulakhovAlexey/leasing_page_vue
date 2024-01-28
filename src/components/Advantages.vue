<template>
	<section class="advantages">
		<div class="advantages__container">
			<div class="advantages__items">
				<div
					v-for="item in items"
					:key="item.text"
					class="advantages__item item"
				>
					<div class="item__inner">
						<div class="item__text">{{ item.text }}</div>
						<div class="item__description">
							{{ item.description }}{{ item.stars }}
						</div>
					</div>
				</div>
			</div>
			<div class="advantages__stars stars" v-if="starsArray.length > 0">
				<div
					class="stars__item"
					v-for="(star, index) in starsArray"
					:key="index"
				>
					<p class="stars__text">{{ star.index + star.text }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		items: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			starsArray: [],
		}
	},
	mounted() {
		this.initStarsArray(this.items)
	},
	methods: {
		initStarsArray(items) {
			let star = '*'
			items.forEach(item => {
				if (item.starText != '') {
					item.stars = star
					let starItem = {
						index: star,
						text: item.starText,
					}
					this.starsArray.push(starItem)
					star += '*'
				}
			})
		},
	},
}
</script>

<style lang="scss" scoped></style>
