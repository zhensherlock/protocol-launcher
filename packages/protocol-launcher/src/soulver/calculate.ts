import { qs } from '@protocol-launcher/shared'

/**
 * Calculate command payload definition.
 */
type Calculate = {
  /**
   * The expression to evaluate.
   *
   * @example 'lunch was $55 + 25% tip'
   */
  expression: string
  /**
   * Whether to copy the result to clipboard.
   *
   * @default true
   */
  toClipboard?: boolean
}

/**
 * Evaluate an expression and put the result onto the clipboard in Soulver.
 *
 * @param payload Calculate command payload.
 * @returns Soulver calculate URL.
 * @example
 * calculate({ expression: 'lunch was $55 + 25% tip' })
 * // => 'x-soulver://x-callback-url/calculate?expression=lunch%20was%20%2455%20%2B%2025%25%20tip'
 * @example
 * calculate({ expression: 'lunch was $55 + 25% tip', toClipboard: true })
 * // => 'x-soulver://x-callback-url/calculate?expression=lunch%20was%20%2455%20%2B%2025%25%20tip&to_clipboard=true'
 * @link https://documentation.soulver.app/documentation/integrations/url-schemes
 */
export function calculate(payload: Calculate) {
  const { expression, toClipboard = true } = payload
  const params = qs({
    expression,
    ...(toClipboard ? { to_clipboard: 'true' } : {}),
  })

  return `x-soulver://x-callback-url/calculate${params}`
}
