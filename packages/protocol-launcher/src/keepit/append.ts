import { type KeepItXCallbackPayload, keepItXCallbackUrl, xCallbackParams } from './shared'

type AppendCommonPayload = KeepItXCallbackPayload & {
  /**
   * The identifier for the item.
   */
  item: string

  /**
   * The name for the attachment.
   */
  name?: string

  /**
   * The format of the file.
   */
  format?: string
}

type AppendTextPayload = AppendCommonPayload & {
  /**
   * The text to append.
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
}

type AppendAttachmentPayload = AppendCommonPayload & {
  /**
   * The name for the attachment.
   */
  name: string

  /**
   * Base64 encoded file attachment.
   */
  data: string

  text?: never
  style?: never
  link?: never
}

/**
 * Append action payload definition.
 */
export type AppendPayload = AppendTextPayload | AppendAttachmentPayload

/**
 * Append text or a file attachment to an item in Keep It.
 *
 * @param payload Keep It append action payload.
 * @returns Keep It append x-callback-url.
 * @example
 * append({ text: 'The quick brown fox', item: 'C96F26E6-A566-457E-A448-5B0F527714DE' })
 * // => 'keepit://x-callback-url/append?text=The%20quick%20brown%20fox&item=C96F26E6-A566-457E-A448-5B0F527714DE'
 * @link https://reinventedsoftware.com/keepit/urlsupport.html#xcbappend
 */
export function append(payload: AppendPayload) {
  const { text, style, link, name, format, item, data } = payload

  return keepItXCallbackUrl('append', {
    ...(text !== undefined ? { text } : {}),
    ...(style !== undefined ? { style } : {}),
    ...(link !== undefined ? { link } : {}),
    ...(name !== undefined ? { name } : {}),
    ...(format !== undefined ? { format } : {}),
    item,
    ...(data !== undefined ? { data } : {}),
    ...xCallbackParams(payload),
  })
}
