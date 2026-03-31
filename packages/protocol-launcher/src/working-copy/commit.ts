import { qs } from '@protocol-launcher/shared'

/**
 * Commit command payload definition.
 */
type Commit = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Repository name or remote URL (required).
   */
  repo: string

  /**
   * File or directory path to commit.
   * Empty or missing means entire repository.
   */
  path?: string

  /**
   * Commit message.
   * If not supplied, a dialog is shown to commit.
   */
  message?: string

  /**
   * Maximum number of changed files allowed.
   * If more files are changed, commit fails.
   *
   * @default 1
   */
  limit?: number
}

/**
 * Commit changes in Working Copy.
 *
 * @param payload Commit command payload.
 * @returns Working Copy x-callback-url/commit URL.
 * @example
 * commit({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   path: '',
 *   limit: 999,
 *   message: 'fix',
 * })
 * // => 'working-copy://x-callback-url/commit?key=123ABC&repo=my%20repo&path=&limit=999&message=fix'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function commit(payload: Commit) {
  const { key, repo, path, message, limit } = payload
  const params = qs({
    key,
    repo,
    ...(path !== undefined ? { path } : {}),
    ...(message ? { message } : {}),
    ...(limit ? { limit: String(limit) } : {}),
  })

  return `working-copy://x-callback-url/commit${params}`
}
