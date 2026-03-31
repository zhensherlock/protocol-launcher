import { qs } from '@protocol-launcher/shared'

/**
 * Read command payload definition.
 */
type Read = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Success callback URL (required).
   * Result will be appended as &text=... or &base64=...
   */
  xSuccess: string

  /**
   * Repository name or remote URL.
   */
  repo?: string

  /**
   * File path relative to repository root.
   */
  path?: string

  /**
   * Return type.
   *
   * - 'url': Return a universal URL for other x-callback-url commands
   */
  type?: 'url'

  /**
   * Return content as base64 (for binary files).
   */
  base64?: boolean

  /**
   * Uniform Type Identifier for file filtering.
   *
   * @default 'public.plain-text' or 'public.item' (if base64)
   */
  uti?: string

  /**
   * Put file content on clipboard.
   */
  clipboard?: boolean
}

/**
 * Read contents of text files from Working Copy.
 *
 * @param payload Read command payload.
 * @returns Working Copy x-callback-url/read URL.
 * @example
 * read({
 *   key: '123ABC',
 *   xSuccess: 'app://x-callback-url/read?text=',
 *   repo: 'my repo',
 *   path: 'README.md',
 * })
 * // => 'working-copy://x-callback-url/read?key=123ABC&x-success=app%3A%2F%2Fx-callback-url%2Fread%3Ftext%3D&repo=my%20repo&path=README.md'
 * @example
 * read({
 *   key: '123ABC',
 *   xSuccess: 'app://x-callback-url/read?base64=',
 *   repo: 'my repo',
 *   path: 'image.png',
 *   base64: true,
 * })
 * // => 'working-copy://x-callback-url/read?key=123ABC&x-success=app%3A%2F%2Fx-callback-url%2Fread%3Fbase64%3D&repo=my%20repo&path=image.png&base64=1'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function read(payload: Read) {
  const { key, xSuccess, repo, path, type, base64, uti, clipboard } = payload
  const params = qs({
    key,
    'x-success': xSuccess,
    ...(repo ? { repo } : {}),
    ...(path ? { path } : {}),
    ...(type ? { type } : {}),
    ...(base64 ? { base64: '1' } : {}),
    ...(uti ? { uti } : {}),
    ...(clipboard ? { clipboard: '1' } : {}),
  })

  return `working-copy://x-callback-url/read${params}`
}
