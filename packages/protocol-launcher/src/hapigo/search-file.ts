import { type HapiGoQueryPayload, hapigoOpenUrl } from './shared'

/**
 * HapiGo file search payload definition.
 */
export type SearchFile = HapiGoQueryPayload

/**
 * Send text to HapiGo file search.
 *
 * @param payload HapiGo file search payload.
 * @returns HapiGo URL scheme link.
 * @example
 * searchFile({ query: 'pdf' })
 * // => 'hapigo://open?extensionID=FILE&query=pdf'
 * @link https://docs-cn.hapigo.com/adv/urlscheme
 */
export function searchFile(payload: SearchFile) {
  return hapigoOpenUrl('FILE', payload)
}
