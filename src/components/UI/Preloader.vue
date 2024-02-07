<template>
	<div class="preloader">
		<div class="preloader__inner">
			<img class="preloader__img" src="@/assets/img/745.gif" alt="preloader" />
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.preloader {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba($color: #000000, $alpha: 0.6);
	&__inner {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&__img {
		max-width: 64px;
		height: auto;
	}
}
</style>
