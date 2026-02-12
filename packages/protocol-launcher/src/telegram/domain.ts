/**
 * Open domain definition.
 */
export type OpenDomain = {
  /**
   * Domain name.
   */
  domain: string
}

/**
 * Open domain in Telegram.
 *
 * @param payload Open domain definition.
 * @returns Telegram Open Domain URL.
 * @example
 * openDomain({
 *   domain: 'zhensherlock',
 * })
 * // => 'tg://resolve?domain=zhensherlock'
 */
export function openDomain(payload: OpenDomain) {
  return `tg://resolve?domain=${payload.domain}`
}
