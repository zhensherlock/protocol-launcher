import { qs } from '@protocol-launcher/shared'

/**
 * Replace file content command payload definition.
 */
type Replace = {
  /**
   * The filename (if not included, creates a unique filename).
   */
  name?: string
  /**
   * The directory path (if not included, defaults to Documents).
   */
  path?: string
  /**
   * The text to replace the file content with.
   */
  text?: string
}

/**
 * Replaces the contents of a file in Coda, creating it if necessary.
 *
 * @param payload Replace file content command payload.
 * @returns Coda replace URL.
 * @example
 * replace({ name: 'foo.txt', text: 'bar' })
 * // => 'coda://x-callback-url/replace?name=foo.txt&text=bar'
 * @example
 * replace({})
 * // => 'coda://x-callback-url/replace'
 * @link https://help.panic.com/code-editor/url-schema/
 */
export function replace(payload: Replace = {}) {
  const { name, path, text } = payload
  const params = qs({
    ...(name ? { name } : {}),
    ...(path ? { path } : {}),
    ...(text ? { text } : {}),
  })

  return `coda://x-callback-url/replace${params}`
}
