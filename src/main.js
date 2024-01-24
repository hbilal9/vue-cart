import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue3-toastify/dist/index.css';

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
