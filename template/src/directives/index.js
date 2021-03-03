import Vue from 'vue'

Vue.directive('demo', (el, binding, vNode) => {
    el.style.cursor = 'pointer'
})
