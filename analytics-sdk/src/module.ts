import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { defu } from 'defu';

// Module options TypeScript interface definition
export interface ModuleOptions {
  gysUrl: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'gys-analytics-sdk',
    configKey: 'gysAnalyticsSdk'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    gysUrl : process.env.BACK_URL || 'http://localhost:3001'
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.gysAnalyticsSdk = defu(nuxt.options.runtimeConfig.public.gysAnalyticsSdk, {
      ...options
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
