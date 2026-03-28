import { qs } from '@protocol-launcher/shared'

/**
 * Open note command payload definition.
 */
type OpenNote = {
  /**
   * The title of the note.
   *
   * @example 'Meeting With Peta'
   */
  title?: string
  /**
   * The identifier of the note.
   */
  identifier?: string
  /**
   * The project title where the note resides.
   */
  projectTitle?: string
  /**
   * Open in a separate window (New in Agenda 18.0).
   */
  separateWindow?: boolean
}

/**
 * Open a note identified by title or identifier.
 *
 * @param payload Open note command payload.
 * @returns Agenda open note URL.
 * @example
 * openNote({ title: 'Meeting With Peta' })
 * // => 'agenda://x-callback-url/open-note?title=Meeting%20With%20Peta'
 * @example
 * openNote({ identifier: 'note-123' })
 * // => 'agenda://x-callback-url/open-note?identifier=note-123'
 * @example
 * openNote({ title: 'Meeting', projectTitle: 'Work' })
 * // => 'agenda://x-callback-url/open-note?title=Meeting&project-title=Work'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function openNote(payload: OpenNote = {}) {
  const { title, identifier, projectTitle, separateWindow } = payload
  const params = qs({
    ...(title ? { title } : {}),
    ...(identifier ? { identifier } : {}),
    ...(projectTitle ? { 'project-title': projectTitle } : {}),
    ...(separateWindow !== undefined ? { 'separate-window': separateWindow } : {}),
  })

  return `agenda://x-callback-url/open-note${params}`
}
