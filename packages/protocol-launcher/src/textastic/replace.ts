import { qs } from '@protocol-launcher/shared'

/**
 * Replace payload definition.
 */
type Replace = {
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
   * Text to insert into the file after its contents are deleted.
   */
  text?: string
  /**
   * Snippet to insert. If both snippet and text are present, only snippet will be used.
   *
   * @link http://manual.macromates.com/en/snippets
   */
  snippet?: string
}

/**
 * Open an existing file or create a new file and replace its contents with the specified text.
 *
 * @param payload Replace payload.
 * @returns Textastic replace URL.
 * @example
 * replace({
 *   location: 'iCloud',
 *   name: 'scratchpad.txt',
 *   text: 'foo',
 * })
 * // => 'textastic://x-callback-url/replace?location=iCloud&name=scratchpad.txt&text=foo'
 * @example
 * replace({
 *   name: 'config.json',
 *   text: '{}',
 * })
 * // => 'textastic://x-callback-url/replace?name=config.json&text=%7B%7D'
 * @link https://www.textasticapp.com/v10/manual/integration_other_apps/x-callback-url.html#replace
 */
export function replace(payload: Replace) {
  const { location, path, name, externalUUID, text, snippet } = payload
  const params = qs({
    ...(location ? { location } : {}),
    ...(path ? { path } : {}),
    name,
    ...(externalUUID ? { externalUUID } : {}),
    ...(text ? { text } : {}),
    ...(snippet ? { snippet } : {}),
  })

  return `textastic://x-callback-url/replace${params}`
}
