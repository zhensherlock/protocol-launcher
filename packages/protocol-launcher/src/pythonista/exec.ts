import { qs } from '@protocol-launcher/shared'
import type { PythonistaScheme } from './shared'

/**
 * Execute code payload definition.
 */
type Exec = {
  /**
   * The Python code to execute.
   *
   * Pythonista shows the code to the user for confirmation before running it.
   */
  code: string
  /**
   * The Pythonista URL scheme to use.
   *
   * Defaults to `pythonista`.
   */
  scheme?: PythonistaScheme
}

/**
 * Execute embedded Python code in Pythonista.
 *
 * @param payload Execute code payload.
 * @returns Pythonista execute code URL.
 * @example
 * exec({ code: 'print("Hello")' })
 * // => 'pythonista://?exec=print(%22Hello%22)'
 * @link https://omz-software.com/pythonista/docs/ios/urlscheme.html
 */
export function exec(payload: Exec) {
  const { code, scheme = 'pythonista' } = payload
  const params = qs({
    exec: code,
  })

  return `${scheme}://${params}`
}
