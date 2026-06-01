import { type StreamDeckOauth2RedirectProxyPayload, streamDeckOauth2RedirectProxyUrl } from './shared'

/**
 * Stream Deck OAuth2 redirect proxy payload definition.
 */
export type Oauth2RedirectProxy = StreamDeckOauth2RedirectProxyPayload

/**
 * Create a Stream Deck OAuth2 redirect proxy URL.
 *
 * @param payload Stream Deck OAuth2 redirect proxy payload.
 * @returns Stream Deck OAuth2 redirect proxy URL.
 * @example
 * oauth2RedirectProxy({
 *   pluginUuid: 'com.elgato.hello-world',
 *   path: '/auth',
 * })
 * // => 'https://oauth2-redirect.elgato.com/streamdeck/plugins/message/com.elgato.hello-world/auth'
 * @link https://docs.elgato.com/streamdeck/sdk/guides/deep-linking/
 */
export function oauth2RedirectProxy(payload: Oauth2RedirectProxy) {
  return streamDeckOauth2RedirectProxyUrl(payload)
}
