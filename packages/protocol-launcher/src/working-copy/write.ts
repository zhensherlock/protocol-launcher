import { qs } from '@protocol-launcher/shared'

/**
 * Write command payload definition.
 */
type Write = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Repository name or remote URL.
   */
  repo?: string

  /**
   * File path relative to repository root.
   */
  path?: string

  /**
   * Text content to write (UTF-8).
   */
  text?: string

  /**
   * Base64 encoded content for binary files.
   */
  base64?: string

  /**
   * Write mode.
   *
   * - 'safe': Create new or overwrite non-modified files (default)
   * - 'overwrite': Force overwrite files with uncommitted changes
   * - 'append': Append to existing content
   * - 'prepend': Prepend to existing content
   */
  mode?: 'safe' | 'overwrite' | 'append' | 'prepend'

  /**
   * Suggested filename when user picks a file.
   */
  filename?: string

  /**
   * Uniform Type Identifier.
   *
   * @default 'public.plain-text' (for text) or 'public.item' (for base64)
   */
  uti?: string

  /**
   * Write from clipboard content.
   */
  clipboard?: boolean

  /**
   * Ask user to commit and push after saving.
   */
  askcommit?: boolean
}

/**
 * Write to existing or new files in Working Copy.
 *
 * @param payload Write command payload.
 * @returns Working Copy x-callback-url/write URL.
 * @example
 * write({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   path: 'README.md',
 *   text: 'hello there',
 * })
 * // => 'working-copy://x-callback-url/write?key=123ABC&repo=my%20repo&path=README.md&text=hello%20there'
 * @example
 * write({
 *   key: '123ABC',
 *   text: 'hello there',
 *   filename: 'test.txt',
 *   uti: 'public.text',
 * })
 * // => 'working-copy://x-callback-url/write?key=123ABC&text=hello%20there&filename=test.txt&uti=public.text'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function write(payload: Write) {
  const { key, repo, path, text, base64, mode, filename, uti, clipboard, askcommit } = payload
  const params = qs({
    key,
    ...(repo ? { repo } : {}),
    ...(path ? { path } : {}),
    ...(text ? { text } : {}),
    ...(base64 ? { base64 } : {}),
    ...(mode ? { mode } : {}),
    ...(filename ? { filename } : {}),
    ...(uti ? { uti } : {}),
    ...(clipboard ? { clipboard: '1' } : {}),
    ...(askcommit ? { askcommit: '1' } : {}),
  })

  return `working-copy://x-callback-url/write${params}`
}
