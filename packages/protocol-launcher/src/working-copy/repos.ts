import { qs } from '@protocol-launcher/shared'

/**
 * Repos command payload definition.
 */
type Repos = {
  /**
   * Secret key for authentication (required).
   */
  key: string
}

/**
 * List all repositories in Working Copy.
 *
 * @param payload Repos command payload.
 * @returns Working Copy x-callback-url/repos URL.
 * @example
 * repos({
 *   key: '123ABC',
 * })
 * // => 'working-copy://x-callback-url/repos?key=123ABC'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function repos(payload: Repos) {
  const { key } = payload
  const params = qs({ key })

  return `working-copy://x-callback-url/repos${params}`
}
