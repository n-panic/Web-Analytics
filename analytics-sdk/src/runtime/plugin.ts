import {defineNuxtPlugin, NuxtApp, useRuntimeConfig} from '#app'
import {useEventListener} from '@vueuse/core'
import {useStore} from "../lib/store";
import {getFingerprint} from "../lib/fingerprint";
// @ts-ignore
export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  const store = useStore;
  const options = useRuntimeConfig().public.gysAnalyticsSdk;
  nuxtApp.vueApp.directive('gys-track',  {
    async mounted(el, binding) {
      const fingerprint = await getFingerprint();
      store.value.gysSessionId = fingerprint.visitorId;
      useEventListener(el, 'click', (event: MouseEvent) => {
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
        // const blob = new Blob([JSON.stringify(store.value)], {type: 'application/json'});
        // navigator.sendBeacon(`${options.gysUrl}/api/stats`, blob);
      })

      useEventListener(document, 'visibilitychange', (event) => {
          if (document.visibilityState === "hidden") {
            const blob = new Blob([JSON.stringify(store.value)], {type: 'application/json'});
            navigator.sendBeacon(`${options.gysUrl}/api/stats`, blob);
          }
      }, {capture: true})
    },

    beforeUnmount(el, binding) {
      store.value = null;
    }
  })
  console.log('Plugin injected by gys-track!')
})
