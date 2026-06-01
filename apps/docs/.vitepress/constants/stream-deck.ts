export const pluginMessageParams = {
  pluginUuid: 'com.elgato.hello-world',
  path: '/hello',
  query: { name: 'Elgato' },
  fragment: 'waving',
} as const

export const passivePluginMessageParams = {
  pluginUuid: 'com.elgato.hello-world',
  path: '/hello',
  query: { streamdeck: 'hidden' },
} as const

export const oauth2RedirectProxyParams = {
  pluginUuid: 'com.elgato.hello-world',
  path: '/auth',
} as const
