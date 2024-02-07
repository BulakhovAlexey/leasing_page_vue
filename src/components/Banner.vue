<template>
	<section class="banner">
		<div class="banner__container">
			<div class="banner__inner"></div>
			<div class="banner__text">
				<p>{{ bannerData.text }}</p>
				<div class="banner__btn">
					<a :href="bannerData.btnLink" class="banner__link">
						{{ bannerData.btnText }}
					</a>
				</div>
			</div>
		</div>
		<Navigation />
	</section>
</template>

<script>
import Navigation from '@/components/UI/Navigation.vue'
export default {
	components: {
		Navigation,
	},
	props: {
		bannerData: {
			type: Object,
			required: true,
		},
	},
}
</script>
