import { qs } from '@protocol-launcher/shared'
import type { OpenChatExtensionPayload } from './shared'

/**
 * Open Viber Chat Extensions.
 *
 * Viber documents three Chat Extension deeplink scenarios: opening the default
 * screen, opening a specific service, and opening a specific service with a
 * search term.
 *
 * @param payload Viber Chat Extension payload.
 * @returns Viber Chat Extension deeplink.
 * @example
 * openChatExtension()
 * // => 'viber://chatex'
 *
 * @example
 * openChatExtension({
 *   service: 'example',
 *   search: 'coffee',
 * })
 * // => 'viber://chatex?service=example&search=coffee'
 *
 * @link https://developers.viber.com/docs/guides/chatex/
 */
export function openChatExtension(payload: OpenChatExtensionPayload = {}) {
  const { service, search } = payload

  if (search !== undefined && service === undefined) {
    throw new Error('Viber Chat Extension search requires a service.')
  }

  const params = qs({
    service,
    search,
  })

  return `viber://chatex${params}`
}
