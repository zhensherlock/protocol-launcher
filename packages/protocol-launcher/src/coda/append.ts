import { qs } from '@protocol-launcher/shared'

/**
 * Append text command payload definition.
 */
type Append = {
  /**
   * The filename (if not included, creates a unique filename).
   */
  name?: string
  /**
   * The directory path (if not included, defaults to Documents).
   */
  path?: string
  /**
   * The text to append.
   */
  text?: string
}

/**
 * Append text to a file in Coda, creating it if necessary.
 *
 * @param payload Append text command payload.
 * @returns Coda append URL.
 * @example
 * append({ name: 'foo.txt', text: 'bar' })
 * // => 'coda://x-callback-url/append?name=foo.txt&text=bar'
 * @example
 * append({})
 * // => 'coda://x-callback-url/append'
 * @link https://help.panic.com/code-editor/url-schema/
 */
export function append(payload: Append = {}) {
  const { name, path, text } = payload
  const params = qs({
    ...(name ? { name } : {}),
    ...(path ? { path } : {}),
    ...(text ? { text } : {}),
  })

  return `coda://x-callback-url/append${params}`
}
