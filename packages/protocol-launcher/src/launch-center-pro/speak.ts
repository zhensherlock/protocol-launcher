import { type LaunchCenterProXCallback, launchCenterProUrl } from './shared'

/**
 * Speak payload definition.
 */
type Speak = LaunchCenterProXCallback & {
  /**
   * Text for Launch Center Pro to speak.
   */
  text?: string
}

/**
 * Start a Launch Center Pro speak action.
 *
 * @param payload Speak payload.
 * @returns Launch Center Pro speak URL.
 * @example
 * speak({ text: 'Hello master!' })
 * // => 'launch://speak?text=Hello%20master!'
 * @example
 * speak({ text: 'Hello master!', xSuccess: '[action:15]' })
 * // => 'launch://x-callback-url/speak?text=Hello%20master!&x-success=%5Baction%3A15%5D'
 * @link https://help.contrast.co/hc/en-us/articles/203351237-2-3-Release-Notes
 */
export function speak(payload: Speak = {}) {
  const { text } = payload

  return launchCenterProUrl('speak', payload, {
    ...(text !== undefined ? { text } : {}),
  })
}
