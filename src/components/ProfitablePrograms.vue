<template>
	<section id="programs" class="programs">
		<div class="programs__container">
			<div class="programs__inner">
				<div class="programs__title title">{{ title }}</div>
				<Preloader v-if="isLoading" />
				<Filters
					:options="options"
					@sortHandler="sortPrograms"
					@changeQuery="sortProgramsByQuery"
				/>
				<TransitionGroup
					tag="div"
					name="programs-items"
					class="programs__items"
				>
					<div
						class="programs__item item-program"
						v-for="item in filteredPrograms"
						:key="item.title + item.id"
					>
						<div class="item-program__wrapper">
							<div class="item-program__title">{{ item.title }}</div>
							<br />
							<!-- <div class="item-program__body">{{ item.body }}</div> -->
							<router-link
								class="item-program__hidden"
								:to="{
									name: 'program_detail',
									params: { name: item.id },
								}"
								>read more!</router-link
							>
						</div>
					</div>
				</TransitionGroup>
				<div class="programs__empty" v-if="filteredPrograms.length <= 0">
					<p class="programs__empty-text">Sorry, can't find anything...</p>
				</div>

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
			sortBy: '',
			query: '',
			options: [
				{
					code: 'title',
					value: 'By Title',
				},
				{
					code: 'body',
					value: 'By Description',
				},
			],
		}
	},
	async mounted() {
		await this.getData(this.pageNum)
	},
	methods: {
		sortPrograms(newVal) {
			this.sortBy = newVal
		},
		sortProgramsByQuery(newVal) {
			this.query = newVal
		},
		showMore() {
			this.pageNum++
			this.getData(this.pageNum)
			if (this.pageNum == this.maxPageNum) {
				this.lastPage = true
			}
		},
		async getData(pageNum) {
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
	watch: {
		sortBy() {
			if (this.sortBy != '') {
				this.items.sort((a, b) => (a[this.sortBy] > b[this.sortBy] ? 1 : -1))
			}
		},
	},
	computed: {
		filteredPrograms() {
			return this.items.filter(element =>
				element.title.toLowerCase().includes(this.query.toLowerCase())
			)
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
