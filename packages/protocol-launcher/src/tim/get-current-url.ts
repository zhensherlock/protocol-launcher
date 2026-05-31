/**
 * Get current URL x-callback-url payload definition.
 */
export type GetCurrentUrl = {
  /**
   * Callback URL that receives Tim's current deep link URL.
   */
  xSuccess: string
}

/**
 * Get the current Tim deep link URL through x-callback-url.
 *
 * @param payload x-success callback payload.
 * @returns Tim getCurrentUrl x-callback-url.
 * @example
 * getCurrentUrl({ xSuccess: 'https://www.apple.com' })
 * // => 'tim://x-callback-url/getCurrentUrl?x-success=https://www.apple.com'
 * @link https://tim.neat.software/help
 */
export function getCurrentUrl(payload: GetCurrentUrl) {
  const { xSuccess } = payload

  return `tim://x-callback-url/getCurrentUrl?x-success=${xSuccess}`
}
