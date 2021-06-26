import Vue from "vue";
import locomotiveScroll from "locomotive-scroll";
Vue.prototype.$lms = locomotiveScroll;
Object.defineProperty(Vue.prototype, "locomotiveScroll", {
  value: locomotiveScroll
});
