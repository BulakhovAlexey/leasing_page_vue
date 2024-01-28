<template>
	<Header />
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</nav>
	<router-view />
</template>

<script>
import Header from '@/components/Header.vue'

export default {
	components: {
		Header,
	},
}
</script>
<style lang="scss"></style>
