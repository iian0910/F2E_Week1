import '@/assets/style/main.scss';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Vue from 'vue';
import App from './App.vue';

gsap.registerPlugin(ScrollTrigger);

Vue.config.productionTip = false

Vue.mixin({
  created: function () {
    this.gsap = gsap;
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
