import { qs } from '@protocol-launcher/shared'

/**
 * Merge command payload definition.
 */
type Merge = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Repository name or remote URL (required).
   */
  repo: string

  /**
   * Branch name to merge into current branch.
   * If missing or empty, merges remote counterpart of current branch.
   */
  branch?: string

  /**
   * Remote name or URL for the branch.
   * Remote will be fetched before merge.
   */
  remote?: string

  /**
   * Create remote if missing.
   *
   * @default false
   */
  create?: boolean

  /**
   * Resolve merge conflicts interactively.
   * If false, merge conflicts count as error.
   *
   * @default true
   */
  resolve?: boolean
}

/**
 * Merge branches in Working Copy.
 *
 * @param payload Merge command payload.
 * @returns Working Copy x-callback-url/merge URL.
 * @example
 * merge({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   branch: 'develop',
 * })
 * // => 'working-copy://x-callback-url/merge?key=123ABC&repo=my%20repo&branch=develop'
 * @example
 * merge({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   remote: 'upstream',
 *   create: true,
 * })
 * // => 'working-copy://x-callback-url/merge?key=123ABC&repo=my%20repo&remote=upstream&create=1'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function merge(payload: Merge) {
  const { key, repo, branch, remote, create, resolve } = payload
  const params = qs({
    key,
    repo,
    ...(branch !== undefined ? { branch } : {}),
    ...(remote ? { remote } : {}),
    ...(create ? { create: '1' } : {}),
    ...(resolve === false ? { resolve: '0' } : {}),
  })

  return `working-copy://x-callback-url/merge${params}`
}
