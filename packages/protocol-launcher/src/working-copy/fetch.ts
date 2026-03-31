import { qs } from '@protocol-launcher/shared'

/**
 * Fetch command payload definition.
 */
type Fetch = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Repository name or remote URL (required).
   * Use '*' (URL encoded as '%2A') to fetch all repositories.
   */
  repo: string

  /**
   * Remote name to fetch from.
   *
   * @default 'origin'
   */
  remote?: string
}

/**
 * Fetch from remote repository.
 *
 * @param payload Fetch command payload.
 * @returns Working Copy x-callback-url/fetch URL.
 * @example
 * fetch({
 *   key: '123ABC',
 *   repo: 'my repo',
 * })
 * // => 'working-copy://x-callback-url/fetch?key=123ABC&repo=my%20repo'
 * @example
 * fetch({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   remote: 'upstream',
 * })
 * // => 'working-copy://x-callback-url/fetch?key=123ABC&repo=my%20repo&remote=upstream'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function fetch(payload: Fetch) {
  const { key, repo, remote } = payload
  const params = qs({
    key,
    repo,
    ...(remote ? { remote } : {}),
  })

  return `working-copy://x-callback-url/fetch${params}`
}
