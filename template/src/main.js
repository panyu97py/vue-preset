import Vue from 'vue';
import App from './App.vue';
import store from './store'
import router from './router'
import './directives'
import './plugins'
import './styles/index.scss'

Vue.config.productionTip = false;

new Vue({
    render(h) {
        return h(App);
    },
    router,
    store,
}).$mount('#app');
