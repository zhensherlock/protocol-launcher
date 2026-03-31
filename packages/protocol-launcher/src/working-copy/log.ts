import { qs } from '@protocol-launcher/shared'

/**
 * Log command payload definition.
 */
type Log = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Repository name or remote URL (required).
   */
  repo: string

  /**
   * Maximum number of commits to return.
   *
   * @default 10
   */
  limit?: number

  /**
   * File or directory path to filter commits.
   */
  path?: string

  /**
   * Branch name to filter commits.
   */
  branch?: string
}

/**
 * Get commit log from Working Copy.
 *
 * @param payload Log command payload.
 * @returns Working Copy x-callback-url/log URL.
 * @example
 * log({
 *   key: '123ABC',
 *   repo: 'my repo',
 * })
 * // => 'working-copy://x-callback-url/log?key=123ABC&repo=my%20repo'
 * @example
 * log({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   limit: 20,
 *   path: 'src',
 *   branch: 'develop',
 * })
 * // => 'working-copy://x-callback-url/log?key=123ABC&repo=my%20repo&limit=20&path=src&branch=develop'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function log(payload: Log) {
  const { key, repo, limit, path, branch } = payload
  const params = qs({
    key,
    repo,
    ...(limit ? { limit: String(limit) } : {}),
    ...(path !== undefined ? { path } : {}),
    ...(branch ? { branch } : {}),
  })

  return `working-copy://x-callback-url/log${params}`
}
