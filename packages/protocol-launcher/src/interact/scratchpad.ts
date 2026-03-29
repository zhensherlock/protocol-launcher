import { qs } from '@protocol-launcher/shared'

/**
 * Scratchpad command payload definition.
 */
type Scratchpad = {
  /**
   * URL encoded text to be used in the scratchpad.
   *
   * @example 'John Doe\njohn@example.com'
   */
  text?: string
}

/**
 * Open Interact Scratchpad with optional text to parse contact information.
 *
 * @param payload Scratchpad command payload.
 * @returns Interact scratchpad URL.
 * @example
 * scratchpad({ text: 'John Doe\njohn@example.com' })
 * // => 'interact://x-callback-url/scratchpad?text=John%20Doe%0Ajohn%40example.com'
 * @example
 * scratchpad({})
 * // => 'interact://x-callback-url/scratchpad'
 * @link https://docs.getdrafts.com/docs/misc/interact-scratchpad#url-schemes
 */
export function scratchpad(payload: Scratchpad = {}) {
  const { text } = payload
  const params = qs({
    ...(text ? { text } : {}),
  })

  return `interact://x-callback-url/scratchpad${params}`
}
