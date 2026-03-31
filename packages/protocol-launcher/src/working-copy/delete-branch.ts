import { qs } from '@protocol-launcher/shared'

/**
 * Delete branch command payload definition.
 */
type DeleteBranch = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Repository name or remote URL (required).
   */
  repo: string

  /**
   * Branch name to delete (required).
   */
  branch: string

  /**
   * Delete mode when commits would be lost.
   *
   * - 'prompt': Ask user (default)
   * - 'force': Force delete
   * - 'refuse': Refuse to delete
   */
  mode?: 'force' | 'refuse' | 'prompt'
}

/**
 * Delete a branch in Working Copy.
 *
 * @param payload Delete branch command payload.
 * @returns Working Copy x-callback-url/delete URL.
 * @example
 * deleteBranch({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   branch: 'develop',
 * })
 * // => 'working-copy://x-callback-url/delete?key=123ABC&repo=my%20repo&branch=develop'
 * @example
 * deleteBranch({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   branch: 'old-feature',
 *   mode: 'refuse',
 * })
 * // => 'working-copy://x-callback-url/delete?key=123ABC&repo=my%20repo&branch=old-feature&mode=refuse'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function deleteBranch(payload: DeleteBranch) {
  const { key, repo, branch, mode } = payload
  const params = qs({
    key,
    repo,
    branch,
    ...(mode ? { mode } : {}),
  })

  return `working-copy://x-callback-url/delete${params}`
}
