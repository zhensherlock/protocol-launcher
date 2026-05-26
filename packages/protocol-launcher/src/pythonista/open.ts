import type { PythonistaScheme } from './shared'

/**
 * Open app payload definition.
 */
type Open = {
  /**
   * The Pythonista URL scheme to use.
   *
   * Defaults to `pythonista`.
   */
  scheme?: PythonistaScheme
}

/**
 * Open Pythonista without doing anything else.
 *
 * @param payload Open app payload.
 * @returns Pythonista open URL.
 * @example
 * open()
 * // => 'pythonista://'
 * @example
 * open({ scheme: 'pythonista3' })
 * // => 'pythonista3://'
 * @link https://omz-software.com/pythonista/docs/ios/urlscheme.html
 */
export function open(payload: Open = {}) {
  const { scheme = 'pythonista' } = payload

  return `${scheme}://`
}
