import { type KeepItBinaryFlag, type KeepItXCallbackPayload, keepItXCallbackUrl, xCallbackParams } from './shared'

type AddCommonPayload = KeepItXCallbackPayload & {
  /**
   * The source URL. Required for web links, optional for everything else.
   */
  source?: string

  /**
   * The name for the new item.
   */
  name?: string

  /**
   * The format of the file.
   */
  format?: string

  /**
   * The identifier of a label for the new item.
   */
  label?: string

  /**
   * The identifier of a target folder or bundle for the new item.
   */
  list?: string

  /**
   * Comma-separated list of tags to add to the new item.
   */
  tags?: string

  /**
   * Comments to add to the new item.
   */
  comments?: string
}

type AddTextPayload = AddCommonPayload & {
  /**
   * The text to add.
   */
  text: string

  /**
   * Case-insensitive name of the note style to apply.
   */
  style?: string

  /**
   * The link of the text for notes and rich text documents.
   */
  link?: string

  data?: never
  offline?: never
  minimal?: never
}

type AddDataPayload = AddCommonPayload &
  (
    | {
        /**
         * The format of the file.
         */
        format: string
      }
    | {
        /**
         * The name for the new item.
         */
        name: string
      }
  ) & {
    /**
     * Base64 encoded data of a file.
     */
    data: string

    text?: never
    style?: never
    link?: never
    offline?: never
    minimal?: never
  }

type AddWebLinkPayload = AddCommonPayload & {
  /**
   * The source URL for the web link.
   */
  source: string

  /**
   * `1` to save a web link for offline, `0` to save it as a live link.
   */
  offline?: KeepItBinaryFlag

  /**
   * `1` to save a web link in a minimal format, `0` to prevent that.
   */
  minimal?: KeepItBinaryFlag

  text?: never
  data?: never
  style?: never
  link?: never
}

/**
 * Add action payload definition.
 */
export type AddPayload = AddTextPayload | AddDataPayload | AddWebLinkPayload

/**
 * Add a note, text file, other file from data, or web link in Keep It.
 *
 * @param payload Keep It add action payload.
 * @returns Keep It add x-callback-url.
 * @example
 * add({ name: 'Apple Homepage', source: 'http://apple.com' })
 * // => 'keepit://x-callback-url/add?name=Apple%20Homepage&source=http%3A%2F%2Fapple.com'
 * @example
 * add({ text: 'The quick brown fox', list: 'AllItems' })
 * // => 'keepit://x-callback-url/add?text=The%20quick%20brown%20fox&list=AllItems'
 * @link https://reinventedsoftware.com/keepit/urlsupport.html#xcbadd
 */
export function add(payload: AddPayload) {
  const { text, style, link, name, source, format, data, offline, minimal, label, list, tags, comments } = payload

  return keepItXCallbackUrl('add', {
    ...(text !== undefined ? { text } : {}),
    ...(style !== undefined ? { style } : {}),
    ...(link !== undefined ? { link } : {}),
    ...(name !== undefined ? { name } : {}),
    ...(source !== undefined ? { source } : {}),
    ...(format !== undefined ? { format } : {}),
    ...(data !== undefined ? { data } : {}),
    ...(offline !== undefined ? { offline } : {}),
    ...(minimal !== undefined ? { minimal } : {}),
    ...(label !== undefined ? { label } : {}),
    ...(list !== undefined ? { list } : {}),
    ...(tags !== undefined ? { tags } : {}),
    ...(comments !== undefined ? { comments } : {}),
    ...xCallbackParams(payload),
  })
}
