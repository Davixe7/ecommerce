import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-teal/theme.css'
// import as directive
import BadgeDirective from 'primevue/badgedirective';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue)
app.use(createPinia())
app.use(router)

app.mount('#app')
app.directive('badge', BadgeDirective);
