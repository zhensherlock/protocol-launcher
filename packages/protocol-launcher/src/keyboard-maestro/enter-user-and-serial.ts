import { keyboardMaestroValue } from './shared'

/**
 * Enter username and serial number definition.
 */
type EnterUserAndSerial = {
  /**
   * Keyboard Maestro username.
   */
  user: string

  /**
   * Keyboard Maestro serial number.
   */
  serial: string
}

/**
 * Enter your Keyboard Maestro username and serial number.
 *
 * @param payload Username and serial number definition.
 * @returns Keyboard Maestro editor URL.
 * @example
 * enterUserAndSerial({ user: 'support@stairways.com', serial: 'ABCDEFGH0123456789' })
 * // => 'keyboardmaestro://u=support%40stairways.com/s=ABCDEFGH0123456789'
 * @link https://wiki.keyboardmaestro.com/manual/URL_Schemes
 */
export function enterUserAndSerial(payload: EnterUserAndSerial) {
  const { user, serial } = payload

  return `keyboardmaestro://u=${keyboardMaestroValue(user)}/s=${keyboardMaestroValue(serial)}`
}
