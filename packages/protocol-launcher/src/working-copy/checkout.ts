import { qs } from '@protocol-launcher/shared'

/**
 * Checkout command payload definition.
 */
type Checkout = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Repository name or remote URL (required).
   */
  repo: string

  /**
   * Branch name to checkout.
   * Use '$current' to checkout the branch currently being shown.
   */
  branch: string

  /**
   * Checkout mode.
   *
   * - 'create': Create new branch during checkout
   * - 'ensure': Only create branch when missing
   */
  mode?: 'create' | 'ensure'
}

/**
 * Checkout (switch) branch in Working Copy.
 *
 * @param payload Checkout command payload.
 * @returns Working Copy x-callback-url/checkout URL.
 * @example
 * checkout({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   branch: 'develop',
 * })
 * // => 'working-copy://x-callback-url/checkout?key=123ABC&repo=my%20repo&branch=develop'
 * @example
 * checkout({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   branch: 'feature/new',
 *   mode: 'create',
 * })
 * // => 'working-copy://x-callback-url/checkout?key=123ABC&repo=my%20repo&branch=feature%2Fnew&mode=create'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function checkout(payload: Checkout) {
  const { key, repo, branch, mode } = payload
  const params = qs({
    key,
    repo,
    branch,
    ...(mode ? { mode } : {}),
  })

  return `working-copy://x-callback-url/checkout${params}`
}
