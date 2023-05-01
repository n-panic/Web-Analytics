import { ref, Ref } from 'vue'
import {debouncedRef} from "./debouncedRef";
import {useEventListener} from "@vueuse/core";

export function useMouse(element: HTMLElement | Window = window): { x: Ref<number>, y: Ref<number> } {
  const x: Ref<number> = debouncedRef(0, 1000)
  const y: Ref<number> = debouncedRef(0, 1000)

  useEventListener(element, 'mousemove', (event: MouseEvent) => {
    x.value = event.pageX
    y.value = event.pageY
  });

  return { x, y }
}
