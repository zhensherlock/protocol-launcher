import { qs } from '@protocol-launcher/shared'

/**
 * Pull command payload definition.
 */
type Pull = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Repository name or remote URL (required).
   * Use '*' (URL encoded as '%2A') to pull all repositories.
   */
  repo: string

  /**
   * Remote name to pull from.
   *
   * @default 'origin'
   */
  remote?: string
}

/**
 * Pull (fetch and merge) from remote repository.
 *
 * @param payload Pull command payload.
 * @returns Working Copy x-callback-url/pull URL.
 * @example
 * pull({
 *   key: '123ABC',
 *   repo: 'my repo',
 * })
 * // => 'working-copy://x-callback-url/pull?key=123ABC&repo=my%20repo'
 * @example
 * pull({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   remote: 'upstream',
 * })
 * // => 'working-copy://x-callback-url/pull?key=123ABC&repo=my%20repo&remote=upstream'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function pull(payload: Pull) {
  const { key, repo, remote } = payload
  const params = qs({
    key,
    repo,
    ...(remote ? { remote } : {}),
  })

  return `working-copy://x-callback-url/pull${params}`
}
