require('./bootstrap');


import Vue from 'vue';
import VueCarousel from 'vue-carousel';
 
Vue.use(VueCarousel);
import landing from './pages/Landing.vue';


var app = new Vue({
    data: {
        message: 'Welcome to Eruditee!'
    },
    template: '<landing/>',
    components: {
        landing
    }
}).$mount('#app')