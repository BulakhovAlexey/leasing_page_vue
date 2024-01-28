<template>
	<section class="offers">
		<div class="offers__container">
			<div class="offers__inner">
				<h2 class="offers__title title">{{ data.title }}</h2>
				<div class="offers__block">
					<div class="offers__images images">
						<img
							src="../assets/img/brands_logos/1.webp"
							alt="logo"
							class="images__item"
						/>
						<img
							src="../assets/img/brands_logos/2.webp"
							alt="logo"
							class="images__item"
						/>
						<img
							src="../assets/img/brands_logos/3.webp"
							alt="logo"
							class="images__item"
						/>
						<img
							src="../assets/img/brands_logos/4.webp"
							alt="logo"
							class="images__item"
						/>
						<img
							src="../assets/img/brands_logos/5.webp"
							alt="logo"
							class="images__item"
						/>
						<img
							src="../assets/img/brands_logos/6.webp"
							alt="logo"
							class="images__item"
						/>
						<img
							src="../assets/img/brands_logos/7.webp"
							alt="logo"
							class="images__item"
						/>
						<img
							src="../assets/img/brands_logos/8.webp"
							alt="logo"
							class="images__item"
						/>
						<img
							src="../assets/img/brands_logos/9.webp"
							alt="logo"
							class="images__item"
						/>
						<img
							src="../assets/img/brands_logos/10.webp"
							alt="logo"
							class="images__item"
						/>
						<img
							src="../assets/img/brands_logos/11.webp"
							alt="logo"
							class="images__item"
						/>
					</div>
					<ul class="offers__list list">
						<li
							class="list__item item"
							v-for="(item, index) in data.cars"
							:key="index"
						>
							<a :href="item.link" class="item__link">
								<div class="item__name">{{ item.name }}</div>
								<div class="item__count">{{ item.count }}</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped></style>
