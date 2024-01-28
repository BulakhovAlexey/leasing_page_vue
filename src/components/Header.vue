<template>
	<header class="header">
		<div class="header__container">
			<div class="header__top">
				<nav class="header__menu">
					<RouterLink to="/" class="header__logo">
						<img class="header__img" src="../assets/img/logo.png" alt="logo" />
					</RouterLink>
					<ul class="header__list">
						<li class="header__item">
							<RouterLink to="/" class="header__link">Main</RouterLink>
						</li>
						<li class="header__item">
							<RouterLink to="/about" class="header__link">About</RouterLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
