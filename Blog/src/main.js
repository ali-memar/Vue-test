import Vue from 'vue'
import Home from './components/Home'
import VueRouter from 'vue-router';
import Routes from './components/routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})

Vue.config.productionTip = false

new Vue({
    render: h => h(Home),
    router: router,

}).$mount('#app')
