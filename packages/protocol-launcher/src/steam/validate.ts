/**
 * Validate application payload definition.
 */
type Validate = {
  /**
   * Application ID to validate.
   *
   * @example 8230
   */
  id: string | number
}

/**
 * Validates the local files of an app.
 *
 * @param payload Validate payload.
 * @returns Steam validate URL.
 * @example
 * validate({ id: 8230 })
 * // => 'steam://validate/8230'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function validate(payload: Validate) {
  const { id } = payload
  return `steam://validate/${id}`
}
