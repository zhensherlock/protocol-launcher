import { qs } from '@protocol-launcher/shared'

/**
 * Zip command payload definition.
 */
type Zip = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Success callback URL (required).
   * Result will be appended as base64 encoded zip.
   */
  xSuccess: string

  /**
   * Repository name or remote URL.
   * If not specified, user will be asked to pick a repository.
   */
  repo?: string

  /**
   * Directory or file path to archive.
   * If not specified, entire repository is archived.
   */
  path?: string

  /**
   * Include .git directory in archive.
   *
   * @default false
   */
  git?: boolean
}

/**
 * Archive multiple files as a base64-coded zip.
 *
 * @param payload Zip command payload.
 * @returns Working Copy x-callback-url/zip URL.
 * @example
 * zip({
 *   key: '123ABC',
 *   xSuccess: 'my-app://x-callback-url/read?path=/',
 *   repo: 'my repo',
 * })
 * // => 'working-copy://x-callback-url/zip?key=123ABC&x-success=my-app%3A%2F%2Fx-callback-url%2Fread%3Fpath%3D%2F&repo=my%20repo'
 * @example
 * zip({
 *   key: '123ABC',
 *   xSuccess: 'my-app://x-callback-url/read',
 *   repo: 'my repo',
 *   path: 'src',
 *   git: true,
 * })
 * // => 'working-copy://x-callback-url/zip?key=123ABC&x-success=my-app%3A%2F%2Fx-callback-url%2Fread&repo=my%20repo&path=src&git=1'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function zip(payload: Zip) {
  const { key, xSuccess, repo, path, git } = payload
  const params = qs({
    key,
    'x-success': xSuccess,
    ...(repo ? { repo } : {}),
    ...(path ? { path } : {}),
    ...(git ? { git: '1' } : {}),
  })

  return `working-copy://x-callback-url/zip${params}`
}
