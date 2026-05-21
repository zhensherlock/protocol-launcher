import type { AtLeastOne, NotePlanXSuccess } from './shared'
import { notePlanUrl, xSuccessParam } from './shared'

/**
 * DeleteNote action payload definition.
 */
type DeleteNote = NotePlanXSuccess &
  AtLeastOne<{
    /**
     * Regular note title.
     */
    noteTitle?: string

    /**
     * Calendar note date in YYYYMMDD format, today, yesterday, or tomorrow.
     */
    noteDate?: string

    /**
     * Note filename.
     */
    fileName?: string
  }>

/**
 * Delete a NotePlan note identified by title, date, or filename.
 *
 * @param payload DeleteNote action payload.
 * @returns NotePlan deleteNote URL.
 * @example
 * deleteNote({ noteTitle: 'New Note' })
 * // => 'noteplan://x-callback-url/deleteNote?noteTitle=New%20Note'
 * @link https://help.noteplan.co/article/49-x-callback-url-scheme#deleteNote
 */
export function deleteNote(payload: DeleteNote) {
  const { noteTitle, noteDate, fileName, xSuccess } = payload

  return notePlanUrl('deleteNote', {
    ...(noteTitle ? { noteTitle } : {}),
    ...(noteDate ? { noteDate } : {}),
    ...(fileName ? { fileName } : {}),
    ...xSuccessParam(xSuccess),
  })
}
