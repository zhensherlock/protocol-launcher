import { type StreamDeckPluginMessagePayload, streamDeckPluginMessageUrl } from './shared'

/**
 * Stream Deck plugin message payload definition.
 */
export type PluginMessage = StreamDeckPluginMessagePayload

/**
 * Send a deep-link message to a Stream Deck plugin.
 *
 * @param payload Stream Deck plugin message payload.
 * @returns Stream Deck plugin message URL.
 * @example
 * pluginMessage({
 *   pluginUuid: 'com.elgato.hello-world',
 *   path: '/hello',
 *   query: { name: 'Elgato' },
 *   fragment: 'waving',
 * })
 * // => 'streamdeck://plugins/message/com.elgato.hello-world/hello?name=Elgato#waving'
 * @link https://docs.elgato.com/streamdeck/sdk/guides/deep-linking/
 */
export function pluginMessage(payload: PluginMessage) {
  return streamDeckPluginMessageUrl(payload)
}
