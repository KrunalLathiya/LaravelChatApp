require('./bootstrap');

window.Vue = require('vue');

Vue.component('chat-component', require('./components/ChatComponent.vue'));
Vue.component('user-component', require('./components/UserComponent.vue'));
Vue.component('chat-messages-component', require('./components/ChatMessageComponent.vue'));
Vue.component('chat-form-component', require('./components/ChatFormComponent.vue'));
Vue.component('message-component', require('./components/MessageComponent.vue'));

const app = new Vue({
    el: '#app'
});
