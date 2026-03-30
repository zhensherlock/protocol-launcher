import { qs } from '@protocol-launcher/shared'

/**
 * Paste clipboard command payload definition.
 */
type PasteClipboard = {
  /**
   * A title to use to override the name of the item being pasted.
   */
  title?: string

  /**
   * A comma-separated list of labels that will be added to the item that is being pasted.
   */
  labels?: string

  /**
   * Text to add as a note for the item being pasted.
   */
  note?: string
}

/**
 * Paste items from the clipboard in Gladys.
 *
 * @param payload Paste clipboard command payload.
 * @returns Gladys paste clipboard URL.
 * @example
 * pasteClipboard({})
 * // => 'gladys://x-callback-url/paste-clipboard'
 * @example
 * pasteClipboard({ title: 'Override The Title' })
 * // => 'gladys://x-callback-url/paste-clipboard?title=Override%20The%20Title'
 * @example
 * pasteClipboard({ title: 'Override The Title', labels: 'Pasted Items,New Items', note: 'Some Notes' })
 * // => 'gladys://x-callback-url/paste-clipboard?title=Override%20The%20Title&labels=Pasted%20Items%2CNew%20Items&note=Some%20Notes'
 * @link http://www.bru.build/gladys-callback-scheme
 */
export function pasteClipboard(payload: PasteClipboard = {}) {
  const { title, labels, note } = payload
  const params = qs({
    ...(title ? { title } : {}),
    ...(labels ? { labels } : {}),
    ...(note ? { note } : {}),
  })

  return `gladys://x-callback-url/paste-clipboard${params}`
}
