import {useSessionStorage} from "@vueuse/core";

export const useStore = useSessionStorage('gys', {gysSessionId: '', events: []});
