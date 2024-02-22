<template>
	<Preloader v-if="isLoading" />
	<section class="one_program">
		<div class="one_program__container">
			<div class="one_program__inner">
				<div class="one_program__title title">Program - {{ item.title }}</div>
				<div class="one_program__code">Код программы: {{ item.id }}</div>
				<div class="one_program__body">{{ item.body }}</div>
			</div>
			<div class="one_program__back">
				<RouterLink class="one_program__back-link" to="/#programs">Go back</RouterLink>
			</div>
		</div>
	</section>
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
