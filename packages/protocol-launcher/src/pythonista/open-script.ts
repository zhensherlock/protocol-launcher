import { qs } from '@protocol-launcher/shared'
import type { PythonistaRoot, PythonistaScheme } from './shared'

/**
 * Open script payload definition.
 */
type OpenScript = {
  /**
   * The script path to open for editing.
   *
   * By default, the path is relative to Pythonista's local documents folder.
   */
  path: string
  /**
   * Make the script path relative to Pythonista's iCloud folder.
   */
  root?: PythonistaRoot
  /**
   * The Pythonista URL scheme to use.
   *
   * Defaults to `pythonista`.
   */
  scheme?: PythonistaScheme
}

/**
 * Open a Pythonista script for editing.
 *
 * @param payload Open script payload.
 * @returns Pythonista open script URL.
 * @example
 * openScript({ path: 'MyScript.py' })
 * // => 'pythonista://MyScript.py'
 * @example
 * openScript({ path: 'MyScript.py', root: 'icloud' })
 * // => 'pythonista://MyScript.py?root=icloud'
 * @link https://omz-software.com/pythonista/docs/ios/urlscheme.html
 */
export function openScript(payload: OpenScript) {
  const { path, root, scheme = 'pythonista' } = payload
  const params = qs({
    ...(root ? { root } : {}),
  })

  return `${scheme}://${path}${params}`
}
