import {defineNuxtPlugin, NuxtApp} from '#app'
import {useEventListener} from '@vueuse/core'
import {useStore} from "../lib/store";

// @ts-ignore
export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  const store = useStore;
  nuxtApp.vueApp.directive('gys-track',  {
    mounted(el, binding) {
      store.value.gysSessionId = crypto.randomUUID();
      useEventListener(el, 'click', (event: MouseEvent) => {
        console.log('click');
        // @ts-ignore
        store.value.events.push({
          type: 'click',
          target: {
            width: el.clientWidth,
            height: el.clientHeight,
            mouseX: event.clientX,
            mouseY: event.clientY,
            tag: el.tagName
          },
          timestamp: Date.now()
        })
      })
    },

    beforeUnmount(el, binding) {
      store.value = null;
    }
  })
  console.log('Plugin injected by gys-track!')
})
