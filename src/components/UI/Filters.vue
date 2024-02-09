<template>
	<div class="filters">
		<div class="filters__inner">
			<input
				class="filters__input"
				type="text"
				v-model="query"
				:placeholder="placeholder"
				@input="changeQuery"
			/>
			<select @change="selectChanges" class="filters__select">
				<option disabled selected>Sort</option>
				<option
					v-for="(option, index) in options"
					:key="index"
					:value="option.code"
				>
					{{ option.value }}
				</option>
			</select>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Array,
		},
	},
	data() {
		return {
			placeholder: 'Search...',
			query: '',
		}
	},
	methods: {
		selectChanges(event) {
			this.$emit('sortHandler', event.target.value)
		},
		changeQuery(event) {
			this.$emit('changeQuery', event.target.value)
		},
	},
}
</script>

<style lang="scss" scoped></style>
