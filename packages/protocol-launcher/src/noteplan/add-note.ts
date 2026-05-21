import type { AtLeastOne, NotePlanXSuccess, NotePlanYesNo } from './shared'
import { notePlanUrl, xSuccessParam } from './shared'

/**
 * AddNote action payload definition.
 */
type AddNote = NotePlanXSuccess &
  AtLeastOne<{
    /**
     * New note title.
     */
    noteTitle?: string

    /**
     * New note text.
     */
    text?: string
  }> & {
    /**
     * Open the new note if it is not already selected.
     */
    openNote?: NotePlanYesNo

    /**
     * Folder where the note should be added.
     */
    folder?: string

    /**
     * Mac only. Open the note in a subwindow.
     */
    subWindow?: NotePlanYesNo

    /**
     * Mac only. Open the note in a split view.
     */
    splitView?: NotePlanYesNo

    /**
     * Mac only. Use an existing subwindow instead of opening a new one.
     */
    useExistingSubWindow?: NotePlanYesNo

    /**
     * Character index to jump to or select after opening the note.
     */
    highlightStart?: number

    /**
     * Number of characters to select after opening the note.
     */
    highlightLength?: number
  }

/**
 * Add a new regular note in NotePlan.
 *
 * @param payload AddNote action payload.
 * @returns NotePlan addNote URL.
 * @example
 * addNote({ noteTitle: 'New Note', openNote: 'yes' })
 * // => 'noteplan://x-callback-url/addNote?noteTitle=New%20Note&openNote=yes'
 * @link https://help.noteplan.co/article/49-x-callback-url-scheme#addNote
 */
export function addNote(payload: AddNote) {
  const {
    noteTitle,
    text,
    openNote,
    folder,
    subWindow,
    splitView,
    useExistingSubWindow,
    highlightStart,
    highlightLength,
    xSuccess,
  } = payload

  return notePlanUrl('addNote', {
    ...(noteTitle ? { noteTitle } : {}),
    ...(text ? { text } : {}),
    ...(openNote ? { openNote } : {}),
    ...(folder ? { folder } : {}),
    ...(subWindow ? { subWindow } : {}),
    ...(splitView ? { splitView } : {}),
    ...(useExistingSubWindow ? { useExistingSubWindow } : {}),
    ...(highlightStart !== undefined ? { highlightStart } : {}),
    ...(highlightLength !== undefined ? { highlightLength } : {}),
    ...xSuccessParam(xSuccess),
  })
}
