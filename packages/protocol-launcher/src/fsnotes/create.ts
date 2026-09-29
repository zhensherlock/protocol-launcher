import { qs } from '@protocol-launcher/shared'

/**
 * Create note definition.
 */
type CreateNote = {
  /**
   * Note title.
   */
  title?: string

  /**
   * Note content.
   */
  content?: string

  /**
   * Note tags.
   */
  tags?: string
  /** Plain-text content; takes precedence over the legacy content/html parameter. */
  txt?: string
  /** Open the note in a new window. */
  open?: boolean
}

/**
 * Create note in FSNotes.
 *
 * @param payload Create note definition.
 * @returns FSNotes create note URL.
 * @example
 * createNote({
 *   title: 'hello',
 *   content: 'hello world',
 * })
 * // => 'nv://make/?title=hello&html=hello%20world'
 * @link https://github.com/glushchenko/fsnotes/blob/v7.3.4/FSNotes/AppDelegate%2BURLRoutes.swift
 */
export function createNote(payload: CreateNote = {}) {
  const { title, content, tags, txt, open } = payload
  return `nv://make/${qs({ title, html: txt !== undefined ? undefined : content, tags, txt, open: open || undefined })}`
}
