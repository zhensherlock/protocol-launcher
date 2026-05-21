import type { IAWriterXCallback } from './shared'
import { iaWriterUrl } from './shared'

/**
 * New command payload definition.
 */
type NewFile = IAWriterXCallback & {
  /**
   * Library path for the file to be created.
   *
   * @example '/File.txt'
   * @example 'Ideas: File.txt'
   */
  path?: string
  /**
   * File contents.
   */
  text?: string
  /**
   * Supported only on iOS and iPadOS. If true, keyboard will be shown.
   *
   * @default false
   */
  edit?: boolean
  /**
   * Supported only on macOS. If true, opens the document in a new window.
   *
   * @default false
   */
  newWindow?: boolean
  /**
   * Author name or identifier.
   *
   * @example 'AI'
   */
  author?: string
}

/**
 * Opens Editor with a new document.
 *
 * @param payload New command payload.
 * @returns iA Writer new URL.
 * @example
 * newFile({ path: '/File.txt', text: 'Hello world' })
 * // => 'ia-writer://new?path=%2FFile.txt&text=Hello%20world'
 * @example
 * newFile({ author: 'AI' })
 * // => 'ia-writer://new?author=AI'
 * @link https://ia.net/writer/support/help/url-commands#new
 */
export function newFile(payload: NewFile = {}) {
  const { path, text, edit, newWindow, author, xSuccess } = payload

  return iaWriterUrl(
    'new',
    {
      ...(path !== undefined ? { path } : {}),
      ...(text !== undefined ? { text } : {}),
      ...(edit !== undefined ? { edit } : {}),
      ...(newWindow !== undefined ? { 'new-window': newWindow } : {}),
      ...(author !== undefined ? { author } : {}),
    },
    xSuccess,
  )
}
