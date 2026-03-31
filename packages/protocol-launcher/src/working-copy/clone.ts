import { qs } from '@protocol-launcher/shared'

/**
 * Clone command payload definition.
 */
type Clone = {
  /**
   * Remote repository URL to clone.
   *
   * @example 'https://github.com/git/git.git'
   */
  remote: string
}

/**
 * Ask Working Copy to open the clone dialog with a specific URL.
 *
 * @param payload Clone command payload.
 * @returns Working Copy clone URL.
 * @example
 * clone({
 *   remote: 'https://github.com/git/git.git',
 * })
 * // => 'working-copy://clone?remote=https%3A%2F%2Fgithub.com%2Fgit%2Fgit.git'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function clone(payload: Clone) {
  const { remote } = payload
  const params = qs({ remote })

  return `working-copy://clone${params}`
}
