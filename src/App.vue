<template>
	<div class="wrapper" :class="{bodyFix: show}">
		<Header />
		<main>
			<router-view />
		</main>
		<Footer />
		<AuthPopup />
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import AuthPopup from '@/components/UI/AuthPopup.vue'
import { mapGetters } from 'vuex'
export default {
	components: {
		Header,
		Footer,
		AuthPopup
	},
	computed: {
		...mapGetters({
			show: 'auth/getShowPopup',
		}),
	},
}
</script>
<style lang="scss">
main {
	padding-top: 80px;
}
</style>
