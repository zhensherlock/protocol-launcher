import { qs } from '@protocol-launcher/shared'

/**
 * Open note definition.
 */
type OpenNote = {
  /**
   * Note title.
   */
  title?: string

  /**
   * Note tag.
   */
  tag?: string
  /** Text to append to an existing note, or use when creating a missing title. */
  txt?: string
}

/**
 * Open note in FSNotes.
 *
 * @param payload Open note definition.
 * @returns FSNotes open note URL.
 * @example
 * openNote({
 *   title: 'hello',
 * })
 * // => 'fsnotes://open/?title=hello'
 * @link https://github.com/glushchenko/fsnotes/blob/v7.3.4/FSNotes/AppDelegate%2BURLRoutes.swift
 */
export function openNote(payload: OpenNote = {}) {
  const { title, tag, txt } = payload
  return `fsnotes://open/${qs({ title, tag, txt })}`
}
