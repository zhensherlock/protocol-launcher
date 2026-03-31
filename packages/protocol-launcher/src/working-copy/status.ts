import { qs } from '@protocol-launcher/shared'

/**
 * Status command payload definition.
 */
type Status = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Repository name or remote URL (required).
   */
  repo: string

  /**
   * File or directory path to check status.
   * Empty or missing means entire repository.
   */
  path?: string

  /**
   * Include unchanged files in results.
   *
   * @default false
   */
  unchanged?: boolean

  /**
   * Maximum depth for directory traversal.
   * depth=1 includes immediate sub-directories only.
   */
  depth?: number
}

/**
 * List file status in Working Copy.
 *
 * @param payload Status command payload.
 * @returns Working Copy x-callback-url/status URL.
 * @example
 * status({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   unchanged: true,
 * })
 * // => 'working-copy://x-callback-url/status?key=123ABC&repo=my%20repo&unchanged=1'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function status(payload: Status) {
  const { key, repo, path, unchanged, depth } = payload
  const params = qs({
    key,
    repo,
    ...(path !== undefined ? { path } : {}),
    ...(unchanged ? { unchanged: '1' } : {}),
    ...(depth ? { depth: String(depth) } : {}),
  })

  return `working-copy://x-callback-url/status${params}`
}
