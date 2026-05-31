import { type HapiGoQueryPayload, hapigoOpenUrl } from './shared'

/**
 * HapiGo clipboard search payload definition.
 */
export type SearchClipboard = HapiGoQueryPayload

/**
 * Send text to HapiGo clipboard search.
 *
 * @param payload HapiGo clipboard search payload.
 * @returns HapiGo URL scheme link.
 * @example
 * searchClipboard({ query: 'request' })
 * // => 'hapigo://open?extensionID=CLIPBOARD&query=request'
 * @link https://docs-cn.hapigo.com/adv/urlscheme
 */
export function searchClipboard(payload: SearchClipboard) {
  return hapigoOpenUrl('CLIPBOARD', payload)
}
