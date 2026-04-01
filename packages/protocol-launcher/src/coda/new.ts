import { qs } from '@protocol-launcher/shared'

/**
 * New file command payload definition.
 */
type NewFile = {
  /**
   * The filename (if not included, creates a unique filename).
   */
  name?: string
  /**
   * The directory path (if not included, defaults to Documents).
   */
  path?: string
  /**
   * The text to include in the new file.
   */
  text?: string
}

/**
 * Creates a new file in Coda. If one exists, a file with a unique name will be created.
 *
 * @param payload New file command payload.
 * @returns Coda new file URL.
 * @example
 * newFile({ name: 'foo.txt', text: 'bar' })
 * // => 'coda://x-callback-url/new?name=foo.txt&text=bar'
 * @example
 * newFile({})
 * // => 'coda://x-callback-url/new'
 * @link https://help.panic.com/code-editor/url-schema/
 */
export function newFile(payload: NewFile = {}) {
  const { name, path, text } = payload
  const params = qs({
    ...(name ? { name } : {}),
    ...(path ? { path } : {}),
    ...(text ? { text } : {}),
  })

  return `coda://x-callback-url/new${params}`
}
