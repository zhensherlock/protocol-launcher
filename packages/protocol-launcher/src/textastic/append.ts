import { qs } from '@protocol-launcher/shared'

/**
 * Append payload definition.
 */
type Append = {
  /**
   * Storage location.
   *
   * @default 'local'
   */
  location?: 'iCloud' | 'local' | 'external'
  /**
   * Directory path.
   *
   * @default root folder
   */
  path?: string
  /**
   * File name to open. If the file doesn't exist, it will be created.
   */
  name: string
  /**
   * External folder identifier. Required when location is 'external'.
   *
   * @example '62E8D362-7DFA-413C-874E-20C1D98B17C0'
   */
  externalUUID?: string
  /**
   * Text to append to the file.
   */
  text?: string
  /**
   * Snippet to append. If both snippet and text are present, only snippet will be used.
   *
   * @link http://manual.macromates.com/en/snippets
   */
  snippet?: string
}

/**
 * Open an existing file or create a new file and append text.
 *
 * @param payload Append payload.
 * @returns Textastic append URL.
 * @example
 * append({
 *   location: 'iCloud',
 *   name: 'clipboard.txt',
 * })
 * // => 'textastic://x-callback-url/append?location=iCloud&name=clipboard.txt'
 * @example
 * append({
 *   name: 'log.txt',
 *   text: 'new line',
 * })
 * // => 'textastic://x-callback-url/append?name=log.txt&text=new%20line'
 * @link https://www.textasticapp.com/v10/manual/integration_other_apps/x-callback-url.html#append
 */
export function append(payload: Append) {
  const { location, path, name, externalUUID, text, snippet } = payload
  const params = qs({
    ...(location ? { location } : {}),
    ...(path ? { path } : {}),
    name,
    ...(externalUUID ? { externalUUID } : {}),
    ...(text ? { text } : {}),
    ...(snippet ? { snippet } : {}),
  })

  return `textastic://x-callback-url/append${params}`
}
