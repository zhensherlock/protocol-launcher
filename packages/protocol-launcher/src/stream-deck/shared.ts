import { qs } from '@protocol-launcher/shared'

const STREAM_DECK_PLUGIN_MESSAGE_BASE = 'streamdeck://plugins/message'
const STREAM_DECK_OAUTH2_REDIRECT_PROXY_BASE = 'https://oauth2-redirect.elgato.com/streamdeck/plugins/message'

export type StreamDeckQuery = Record<string, unknown>

export interface StreamDeckPluginMessagePayload {
  /**
   * Stream Deck plugin unique identifier.
   *
   * @example 'com.elgato.hello-world'
   */
  pluginUuid: string
  /**
   * Optional message path appended after the plugin identifier.
   *
   * @example '/hello'
   * @example '/Hello world'
   */
  path?: `/${string}`
  /**
   * Optional query string values. Use `{ streamdeck: 'hidden' }` for a passive deep-link.
   *
   * @example { name: 'Elgato' }
   * @example { streamdeck: 'hidden' }
   */
  query?: StreamDeckQuery
  /**
   * Optional URL fragment.
   *
   * @example 'waving'
   */
  fragment?: string
}

export interface StreamDeckOauth2RedirectProxyPayload {
  /**
   * Stream Deck plugin unique identifier.
   *
   * @example 'com.elgato.hello-world'
   */
  pluginUuid: string
  /**
   * Optional redirect path appended after the plugin identifier.
   *
   * @example '/auth'
   */
  path?: `/${string}`
}

function normalizePath(path?: string) {
  if (!path) return ''

  return path
    .split('/')
    .map((part, index) => (index === 0 ? '' : encodeURIComponent(part)))
    .join('/')
}

function normalizeFragment(fragment?: string) {
  if (!fragment) return ''

  const normalizedFragment = fragment.startsWith('#') ? fragment.slice(1) : fragment
  return `#${encodeURIComponent(normalizedFragment)}`
}

export function streamDeckPluginMessageUrl(payload: StreamDeckPluginMessagePayload) {
  const { pluginUuid, path, query = {}, fragment } = payload

  return `${STREAM_DECK_PLUGIN_MESSAGE_BASE}/${encodeURIComponent(pluginUuid)}${normalizePath(path)}${qs(
    query,
  )}${normalizeFragment(fragment)}`
}

export function streamDeckOauth2RedirectProxyUrl(payload: StreamDeckOauth2RedirectProxyPayload) {
  const { pluginUuid, path } = payload

  return `${STREAM_DECK_OAUTH2_REDIRECT_PROXY_BASE}/${encodeURIComponent(pluginUuid)}${normalizePath(path)}`
}
