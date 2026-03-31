import { qs } from '@protocol-launcher/shared'

/**
 * Push command payload definition.
 */
type Push = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Repository name or remote URL (required).
   * Use '*' (URL encoded as '%2A') to push all repositories.
   */
  repo: string

  /**
   * Remote name to push to.
   *
   * @default 'origin'
   */
  remote?: string
}

/**
 * Push commits to remote repository.
 *
 * @param payload Push command payload.
 * @returns Working Copy x-callback-url/push URL.
 * @example
 * push({
 *   key: '123ABC',
 *   repo: 'my repo',
 * })
 * // => 'working-copy://x-callback-url/push?key=123ABC&repo=my%20repo'
 * @example
 * push({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   remote: 'heroku',
 * })
 * // => 'working-copy://x-callback-url/push?key=123ABC&repo=my%20repo&remote=heroku'
 * @example
 * push({
 *   key: '123ABC',
 *   repo: '*',
 * })
 * // => 'working-copy://x-callback-url/push?key=123ABC&repo=%2A'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function push(payload: Push) {
  const { key, repo, remote } = payload
  const params = qs({
    key,
    repo,
    ...(remote ? { remote } : {}),
  })

  return `working-copy://x-callback-url/push${params}`
}
