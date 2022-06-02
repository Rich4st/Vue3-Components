import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // pinia
import router from './router';
// tailwindcss
import './index.css';

const app = createApp(App);

app.use(router).use(createPinia()).mount('#app');
