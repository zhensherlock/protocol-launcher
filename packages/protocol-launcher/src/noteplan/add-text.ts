import type { NotePlanXSuccess, NotePlanYesNo } from './shared'
import { notePlanUrl, xSuccessParam } from './shared'

/**
 * AddText action payload definition.
 */
type AddText = NotePlanXSuccess & {
  /**
   * Calendar note date in YYYYMMDD format, today, yesterday, or tomorrow.
   */
  noteDate?: string

  /**
   * Regular note title.
   */
  noteTitle?: string

  /**
   * Normal note filename, or date-like string for calendar notes.
   */
  fileName?: string

  /**
   * Text to add to the note.
   */
  text: string

  /**
   * How the text should be added.
   */
  mode?: 'prepend' | 'append'

  /**
   * Open the note if it is not already selected.
   */
  openNote?: NotePlanYesNo

  /**
   * Mac only. Open the note in a subwindow when openNote is yes.
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
}

/**
 * Add text to a NotePlan note identified by date, title, or filename.
 *
 * @param payload AddText action payload.
 * @returns NotePlan addText URL.
 * @example
 * addText({ noteDate: 'today', text: '* Hello World', mode: 'append', openNote: 'yes' })
 * // => 'noteplan://x-callback-url/addText?noteDate=today&text=*%20Hello%20World&mode=append&openNote=yes'
 * @link https://help.noteplan.co/article/49-x-callback-url-scheme#addText
 */
export function addText(payload: AddText) {
  const { noteDate, noteTitle, fileName, text, mode, openNote, subWindow, splitView, useExistingSubWindow, xSuccess } =
    payload

  return notePlanUrl('addText', {
    ...(noteDate ? { noteDate } : {}),
    ...(noteTitle ? { noteTitle } : {}),
    ...(fileName ? { fileName } : {}),
    text,
    ...(mode ? { mode } : {}),
    ...(openNote ? { openNote } : {}),
    ...(subWindow ? { subWindow } : {}),
    ...(splitView ? { splitView } : {}),
    ...(useExistingSubWindow ? { useExistingSubWindow } : {}),
    ...xSuccessParam(xSuccess),
  })
}
