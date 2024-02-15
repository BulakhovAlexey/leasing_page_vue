<template>
	<Preloader v-if="isLoading" />
	<div>program - {{ $route.params.name }}</div>
	<div>{{ item.userId }}</div>
	<div>{{ item.id }}</div>
	<div>{{ item.title }}</div>
	<div>{{ item.body }}</div>
	<RouterLink to="/"> BACK </RouterLink>
</template>

<script>
import { getOneProgramById } from '@/api/programsApi.js'
import Preloader from '@/components/UI/Preloader.vue'
export default {
	components: {
		Preloader,
	},
	data() {
		return {
			isLoading: false,
			id: this.$route.params.name,
			item: {},
		}
	},
	async mounted() {
		await this.getItemInfo(this.id)
	},
	methods: {
		async getItemInfo(id) {
			this.isLoading = true
			try {
				const result = await getOneProgramById(id)
				this.item = result
			} catch (error) {
				console.log(error)
			}
			this.isLoading = false
		},
	},
}
</script>

<style lang="scss" scoped></style>
