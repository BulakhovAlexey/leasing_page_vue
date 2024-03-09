<template>
	<header class="header">
		<div class="header__container">
			<div class="header__top">
				<RouterLink to="/" class="header__logo">
					<img class="header__img" src="../assets/img/logo.png" alt="logo" />
				</RouterLink>
				<div class="header__btns" :class="{open: burgerOpen}">
					<nav class="header__menu">
						<ul class="header__list" @click="closeMenu">
							<li class="header__item">
								<RouterLink to="/" class="header__link">Main</RouterLink>
							</li>
							<li class="header__item">
								<RouterLink to="/about" class="header__link">About</RouterLink>
							</li>
						</ul>
					</nav>
					<div class="header__auth">
						<div v-if="isAuth" class="header__auth-block auth-block">
							<div class="auth-block__user">{{ authLogin }}</div>
							<div
								@click="leave"
								class="auth-block__exit">Leave</div>
						</div>
						<div 
							v-else 
							@click="open"
							class="header__notAuth">Log In</div>
					</div>
				</div>
				<div v-if="!burgerOpen" @click="burgerMenu" class="header__burger close">
					<span></span>
				</div>
				<div v-else @click="burgerMenu" class="header__burger open">
					<span></span>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
	data(){
		return{
			burgerOpen: false,
		}
	},
	methods: {
		...mapActions({
			open: 'auth/open',
			leave: 'auth/leave'
		}),
		burgerMenu(){
			this.burgerOpen = !this.burgerOpen
		},
		closeMenu(event){
			if(event.target.classList.contains('header__link')){
				this.burgerOpen = !this.burgerOpen
			}
		}
	},
	computed: {
		...mapGetters({
			isAuth: 'auth/getIsAuth',
		}),
		...mapState({
			authLogin: state => state.auth.authLogin,
		})
	}
}
</script>

<style lang="scss" scoped></style>
