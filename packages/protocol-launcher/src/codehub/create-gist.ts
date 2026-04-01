import { qs } from '@protocol-launcher/shared'

/**
 * Create Gist payload definition.
 */
type CreateGist = {
  /**
   * A string description of the Gist.
   *
   * @default ''
   */
  description?: string

  /**
   * A boolean value indicating whether the gist is public or not.
   *
   * @default false
   */
  public?: boolean

  /**
   * Files content. The key is the file identifier, the value is the file content.
   *
   * @example
   * {
   *   file1: 'This is file one',
   *   file2: 'CodeHub Rocks',
   * }
   */
  files?: Record<string, string>
}

/**
 * Create a new Gist on Github.com via CodeHub.
 *
 * @param payload Create Gist definition.
 * @returns CodeHub create Gist URL.
 * @example
 * createGist({
 *   description: 'Hello',
 *   public: true,
 *   files: {
 *     file1: 'This is file one',
 *     file2: 'CodeHub Rocks',
 *   },
 * })
 * // => 'codehub://x-callback-url/gist/create?description=Hello&public=true&file1=This%20is%20file%20one&file2=CodeHub%20Rocks'
 * @example
 * createGist({})
 * // => 'codehub://x-callback-url/gist/create'
 * @link https://github.com/CodeHubApp/CodeHub/wiki/CodeHub-x-callback-url-API
 */
export function createGist(payload: CreateGist = {}) {
  const { description = '', public: isPublic = false, files } = payload
  const params = qs({
    ...(description ? { description } : {}),
    ...(isPublic ? { public: 'true' } : {}),
    ...(files ? files : {}),
  })

  return `codehub://x-callback-url/gist/create${params}`
}
