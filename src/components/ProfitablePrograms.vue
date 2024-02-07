<template>
	<section id="programs" class="programs">
		<div class="programs__container">
			<div class="programs__inner">
				<div class="programs__title title">{{ title }}</div>
				<Preloader v-if="isLoading" />
				<Filters />
				<transition-group
					name="programs-items"
					class="programs__items"
					tag="div"
				>
					<div
						class="programs__item item-program"
						v-for="item in items"
						:key="item.id"
					>
						<div class="item-program__title">{{ item.title }}</div>
						<br />
						<div class="item-program__body">{{ item.body }}</div>
					</div>
				</transition-group>
				<div class="programs__show-more" v-if="!lastPage" @click="showMore">
					SHOW MORE
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Preloader from '@/components/UI/Preloader.vue'
import Filters from '@/components/UI/Filters.vue'
import { getPrograms } from '@/api/programsApi.js'
import data from '@/seeders/programs.js'

export default {
	components: { Preloader, Filters },
	data() {
		return {
			title: data.title,
			items: [],
			isLoading: false,
			pageNum: 1,
			maxPageNum: 10,
			lastPage: false,
		}
	},
	async mounted() {
		await this.get(this.pageNum)
	},
	methods: {
		showMore() {
			this.pageNum++
			this.get(this.pageNum)
			if (this.pageNum == this.maxPageNum) {
				this.lastPage = true
			}
		},
		async get(pageNum) {
			this.isLoading = true
			try {
				const result = await getPrograms(pageNum)
				if (result.length > 0) {
					this.items = [...this.items, ...result]
				} else {
					this.lastPage = true
				}
			} catch (error) {
				console.log(error)
			}
			this.isLoading = false
		},
	},
}
</script>

<style lang="scss" scoped>
.programs-items-move {
	transition: transform 1s ease;
}
.programs-items-enter-active,
.programs-items-leave-active {
	transition: transform 1s ease;
	transform: translate(0, 0);
}
.programs-items-enter-from,
.programs-items-leave-to {
	transform: translate(0, 100%);
}
</style>
