import type { IAWriterXCallback } from './shared'
import { iaWriterUrl } from './shared'

/**
 * Write command payload definition.
 */
type Write = IAWriterXCallback & {
  /**
   * URL Commands auth token from iA Writer settings.
   */
  authToken: string
  /**
   * Library path to the file to create or modify.
   */
  path: string
  /**
   * File text.
   */
  text?: string
  /**
   * Write mode.
   *
   * @default 'create'
   */
  mode?: 'create' | 'replace' | 'add' | 'patch'
  /**
   * Location for added text.
   */
  addLocation?: 'beginning' | 'end'
  /**
   * Padding for added text.
   */
  addPadding?: 'sentence' | 'line' | 'paragraph'
  /**
   * Author name or identifier.
   *
   * @example 'AI'
   */
  author?: string
}

/**
 * Creates or modifies an existing file and returns file contents.
 *
 * iA Writer returns `path` and `text` parameters on `x-success`.
 *
 * @param payload Write command payload.
 * @returns iA Writer write URL.
 * @example
 * write({ authToken: 'REPLACE_WITH_YOUR_TOKEN', path: '/File.txt', text: 'Hello world' })
 * // => 'ia-writer://write?auth-token=REPLACE_WITH_YOUR_TOKEN&path=%2FFile.txt&text=Hello%20world'
 * @example
 * write({ authToken: 'REPLACE_WITH_YOUR_TOKEN', path: '/File.txt', text: 'Hello world', mode: 'add', addLocation: 'end', addPadding: 'paragraph' })
 * // => 'ia-writer://write?auth-token=REPLACE_WITH_YOUR_TOKEN&path=%2FFile.txt&text=Hello%20world&mode=add&add-location=end&add-padding=paragraph'
 * @link https://ia.net/writer/support/help/url-commands#write
 */
export function write(payload: Write) {
  const { authToken, path, text, mode, addLocation, addPadding, author, xSuccess } = payload

  return iaWriterUrl(
    'write',
    {
      'auth-token': authToken,
      path,
      ...(text !== undefined ? { text } : {}),
      ...(mode !== undefined ? { mode } : {}),
      ...(addLocation !== undefined ? { 'add-location': addLocation } : {}),
      ...(addPadding !== undefined ? { 'add-padding': addPadding } : {}),
      ...(author !== undefined ? { author } : {}),
    },
    xSuccess,
  )
}
