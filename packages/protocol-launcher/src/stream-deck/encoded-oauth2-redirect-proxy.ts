import { type StreamDeckOauth2RedirectProxyPayload, streamDeckOauth2RedirectProxyUrl } from './shared'

/**
 * Stream Deck encoded OAuth2 redirect proxy payload definition.
 */
export type EncodedOauth2RedirectProxy = StreamDeckOauth2RedirectProxyPayload

/**
 * Create an encoded Stream Deck OAuth2 redirect proxy URL.
 *
 * @param payload Stream Deck OAuth2 redirect proxy payload.
 * @returns Encoded Stream Deck OAuth2 redirect proxy URL.
 * @example
 * encodedOauth2RedirectProxy({
 *   pluginUuid: 'com.elgato.hello-world',
 *   path: '/auth',
 * })
 * // => 'https%3A%2F%2Foauth2-redirect.elgato.com%2Fstreamdeck%2Fplugins%2Fmessage%2Fcom.elgato.hello-world%2Fauth'
 * @link https://docs.elgato.com/streamdeck/sdk/guides/deep-linking/
 */
export function encodedOauth2RedirectProxy(payload: EncodedOauth2RedirectProxy) {
  return encodeURIComponent(streamDeckOauth2RedirectProxyUrl(payload))
}
