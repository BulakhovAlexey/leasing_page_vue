import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSmoothScroll from 'vue3-smooth-scroll'

import '@/assets/scss/main.scss'

const app = createApp(App)

app
	.use(router)
	.use(VueSmoothScroll, {
		duration: 1000, // animation duration in ms
		offset: -60, // offset in px from scroll element, can be positive or negative
	})
	.mount('#app')
