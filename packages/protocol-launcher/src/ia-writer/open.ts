import type { IAWriterXCallback } from './shared'
import { iaWriterUrl } from './shared'

/**
 * Open command payload definition.
 */
type Open = IAWriterXCallback & {
  /**
   * Library path to the file.
   *
   * @example '/File.txt'
   * @example 'Ideas: File.txt'
   */
  path: string
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
}

/**
 * Opens Editor with an existing document if found, or a new empty document.
 *
 * @param payload Open command payload.
 * @returns iA Writer open URL.
 * @example
 * open({ path: '/File.txt' })
 * // => 'ia-writer://open?path=%2FFile.txt'
 * @example
 * open({ path: '/File.txt', edit: true, newWindow: true })
 * // => 'ia-writer://open?path=%2FFile.txt&edit=true&new-window=true'
 * @link https://ia.net/writer/support/help/url-commands#open
 */
export function open(payload: Open) {
  const { path, edit, newWindow, xSuccess } = payload

  return iaWriterUrl(
    'open',
    {
      path,
      ...(edit !== undefined ? { edit } : {}),
      ...(newWindow !== undefined ? { 'new-window': newWindow } : {}),
    },
    xSuccess,
  )
}
