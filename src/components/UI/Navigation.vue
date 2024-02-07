<template>
	<div class="navigation">
		<ul class="navigation__list">
			<li class="navigation__item">
				<a href="#offers" v-smooth-scroll class="navigation__link">{{
					offersTitle
				}}</a>
			</li>
			<li class="navigation__item">
				<a href="#calc" v-smooth-scroll class="navigation__link">
					{{ calcTitle }}
				</a>
			</li>
			<li class="navigation__item">
				<a href="#programs" v-smooth-scroll class="navigation__link">{{
					programsTitle
				}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
import offersData from '@/seeders/offersData.js'
import calculatorsData from '@/seeders/calculatorsData.js'
import programsData from '@/seeders/programs.js'
export default {
	data() {
		return {
			calcTitle: calculatorsData.title,
			offersTitle: offersData.title,
			programsTitle: programsData.title,
		}
	},
}
</script>

<style lang="scss" scoped></style>
