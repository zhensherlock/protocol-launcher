import { type HapiGoQueryPayload, hapigoOpenUrl } from './shared'

/**
 * HapiGo translate payload definition.
 */
export type Translate = HapiGoQueryPayload

/**
 * Send text to HapiGo Translate.
 *
 * @param payload HapiGo translate payload.
 * @returns HapiGo URL scheme link.
 * @example
 * translate({ query: 'app' })
 * // => 'hapigo://open?extensionID=TRANSLATE&query=app'
 * @link https://docs-cn.hapigo.com/adv/urlscheme
 */
export function translate(payload: Translate) {
  return hapigoOpenUrl('TRANSLATE', payload)
}
