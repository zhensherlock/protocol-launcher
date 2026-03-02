/**
 * Arguments for registering Nova.
 */
type Register = {
  /**
   * The serial number to use for registration.
   */
  serial: string
}

/**
 * Register an unregistered copy of Nova with the specified serial number.
 *
 * @param payload Arguments for registering Nova.
 * @returns Nova register URL.
 * @example
 * register({
 *   serial: '1234567890',
 * })
 * // => 'nova://register?serial=1234567890'
 * @link https://help.nova.app/projects/url-schema/#register
 */
export function register(payload: Register) {
  const { serial } = payload
  return `nova://register?serial=${serial}`
}
