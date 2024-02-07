<template>
	<div class="home">
		<Banner :bannerData="bannerData" />
		<Advantages :items="advantagesData" />
		<Offers :data="offersData" />
		<Calculator :data="calculatorsData" />
		<ProfitablePrograms />
	</div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Advantages from '@/components/Advantages.vue'
import Offers from '@/components/Offers.vue'
import Calculator from '@/components/Calculator.vue'
import ProfitablePrograms from '@/components/ProfitablePrograms.vue'

//data from seeders
import bannerData from '@/seeders/bannerData.js'
import advantagesData from '@/seeders/advantagesData.js'
import offersData from '@/seeders/offersData.js'
import calculatorsData from '@/seeders/calculatorsData.js'
export default {
	components: {
		Banner,
		Advantages,
		Offers,
		Calculator,
		ProfitablePrograms,
	},
	data() {
		return {
			bannerData: bannerData,
			advantagesData: advantagesData.items,
			offersData: offersData,
			calculatorsData: calculatorsData,
		}
	},
}
</script>
