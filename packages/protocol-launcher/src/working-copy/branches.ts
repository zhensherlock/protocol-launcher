import { qs } from '@protocol-launcher/shared'

/**
 * Branches command payload definition.
 */
type Branches = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Repository name or remote URL (required).
   */
  repo: string
}

/**
 * List all local and remote branches in a repository.
 *
 * @param payload Branches command payload.
 * @returns Working Copy x-callback-url/branches URL.
 * @example
 * branches({
 *   key: '123ABC',
 *   repo: 'my repo',
 * })
 * // => 'working-copy://x-callback-url/branches?key=123ABC&repo=my%20repo'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function branches(payload: Branches) {
  const { key, repo } = payload
  const params = qs({ key, repo })

  return `working-copy://x-callback-url/branches${params}`
}
