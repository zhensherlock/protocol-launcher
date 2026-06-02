import type { ChoosyUrlPayload } from './shared'
import { choosyUrl } from './shared'

/**
 * Custom API method payload definition.
 */
export type CustomApiMethod = ChoosyUrlPayload & {
  /**
   * The custom API method name configured in a Choosy rule.
   *
   * @example 'edit'
   * @example 'my.rule'
   */
  method: string
}

/**
 * Call a custom Choosy API method configured by the user's rules.
 *
 * @param payload Custom API method payload.
 * @returns Choosy custom API method URL.
 * @example
 * customApiMethod({ method: 'edit', url: 'https://www.example.com' })
 * // => 'x-choosy://edit/https://www.example.com'
 * @link https://choosy.app/help/settings/rules/customapi
 */
export function customApiMethod(payload: CustomApiMethod) {
  return choosyUrl(payload.method, payload.url)
}
