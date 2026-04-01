import { qs } from '@protocol-launcher/shared'

/**
 * New note payload definition.
 */
type NewNote = {
  /**
   * The vault name.
   */
  vault: string
  /**
   * The new note name.
   */
  name?: string
  /**
   * The note content.
   */
  content?: string
  /**
   * Whether to append to existing note.
   * @default false
   */
  append?: boolean
  /**
   * Whether to open the note after creation.
   * @default true
   */
  open?: boolean
}

/**
 * Create a new note in Obsidian.
 *
 * @param payload New note payload.
 * @returns Obsidian new note URL.
 * @example
 * newNote({
 *   vault: 'My Vault',
 *   name: 'New Note',
 *   content: 'Hello World',
 * })
 * // => 'obsidian://new?vault=My%20Vault&name=New%20Note&content=Hello%20World'
 * @example
 * newNote({
 *   vault: 'My Vault',
 *   name: 'Daily Note',
 *   append: true,
 *   open: false,
 * })
 * // => 'obsidian://new?vault=My%20Vault&name=Daily%20Note&append=true&open=false'
 * @link https://obsidian.md/help/uri
 */
export function newNote(payload: NewNote) {
  const { vault, name, content, append, open } = payload
  const params = qs({
    vault,
    ...(name ? { name } : {}),
    ...(content ? { content } : {}),
    ...(append !== undefined ? { append } : {}),
    ...(open !== undefined ? { open } : {}),
  })

  return `obsidian://new${params}`
}
