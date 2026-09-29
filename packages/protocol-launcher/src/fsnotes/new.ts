import { qs } from '@protocol-launcher/shared'

type NewNote = {
  title?: string
  /** Plain text, preferred over html when both are supplied. */
  txt?: string
  html?: string
  folder?: string
  /** Open the note in a new window. */
  open?: boolean
}

/**
 * Create a note through FSNotes' native new route.
 *
 * @param payload Note content, folder and window option.
 * @returns FSNotes native new note URL.
 * @example
 * newNote({ title: 'Meeting', txt: '# Agenda', folder: 'Work', open: true })
 * // => 'fsnotes://new/?title=Meeting&txt=%23%20Agenda&folder=Work&open=true'
 * @link https://github.com/glushchenko/fsnotes/blob/v7.3.4/FSNotes/AppDelegate%2BURLRoutes.swift
 */
export function newNote(payload: NewNote = {}) {
  const { title, txt, html, folder, open } = payload
  return `fsnotes://new/${qs({ title, txt, html: txt !== undefined ? undefined : html, folder, open: open || undefined })}`
}
