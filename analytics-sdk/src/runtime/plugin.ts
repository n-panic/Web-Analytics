import {defineNuxtPlugin, NuxtApp} from '#app'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  nuxtApp.vueApp.directive('gys-track', {
    mounted(el, binding) {

    }
  })
  console.log('Plugin injected by my-module!')
})
