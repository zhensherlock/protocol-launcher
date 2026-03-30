/**
 * Compose command payload definition.
 */
type Compose = {
  /**
   * The text to be edited in the compose view. Must be properly URL escaped.
   */
  text: string
}

/**
 * Put text directly into the iPGMail compose view so it can be edited and encrypted as an email in the app.
 *
 * @param payload Compose command payload.
 * @returns iPGMail compose URL.
 * @example
 * compose({
 *   text: 'This is a test...',
 * })
 * // => 'x-ipgmail://x-callback-url/compose?text=This%20is%20a%20test...'
 * @link https://ipgmail.com/developers/
 */
export function compose(payload: Compose) {
  const { text } = payload
  return `x-ipgmail://x-callback-url/compose?text=${encodeURIComponent(text)}`
}
