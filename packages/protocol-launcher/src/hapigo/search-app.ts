import { type HapiGoQueryPayload, hapigoOpenUrl } from './shared'

/**
 * HapiGo app search payload definition.
 */
export type SearchApp = HapiGoQueryPayload

/**
 * Send text to HapiGo app search.
 *
 * @param payload HapiGo app search payload.
 * @returns HapiGo URL scheme link.
 * @example
 * searchApp({ query: 'hapigo' })
 * // => 'hapigo://open?extensionID=APP&query=hapigo'
 * @link https://docs-cn.hapigo.com/adv/urlscheme
 */
export function searchApp(payload: SearchApp) {
  return hapigoOpenUrl('APP', payload)
}
