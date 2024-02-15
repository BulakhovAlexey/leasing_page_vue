<template>
	<footer class="footer">
		<div class="footer__container">
			<div class="footer__inner">
				<div class="footer__logo">
					<img class="footer__img" src="../assets/img/logo.png" alt="Logo" />
				</div>
				<ul class="header__list">
					<li class="header__item">
						<RouterLink to="/" class="header__link">Main</RouterLink>
					</li>
					<li class="header__item">
						<RouterLink to="/about" class="header__link">About</RouterLink>
					</li>
				</ul>
			</div>
		</div>
		<p class="footer__text">All rights reserved</p>
	</footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
