require('./bootstrap');

window.Vue = require('vue');


Vue.component('my-thoughts-component', require('./components/MyThoughtComponent.vue'));
Vue.component('thought-component', require('./components/ThoughtComponent.vue'));
Vue.component('form-component', require('./components/FormComponent.vue'));

const app = new Vue({
    el: '#app'
});
