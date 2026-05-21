import type { NotePlanXSuccess, NotePlanYesNo } from './shared'
import { notePlanUrl, xSuccessParam } from './shared'

/**
 * OpenNote action payload definition.
 */
type OpenNote = NotePlanXSuccess & {
  /**
   * Calendar note date in YYYYMMDD format, today, yesterday, tomorrow, or ISO week format like 2022-W32.
   */
  noteDate?: string

  /**
   * Calendar note timeframe.
   */
  timeframe?: 'week' | 'month' | 'quarter' | 'year'

  /**
   * Regular note title. May include encoded heading or synced-line suffixes as documented by NotePlan.
   */
  noteTitle?: string

  /**
   * Relative note filename, including folders.
   */
  filename?: string

  /**
   * Subheading name to scroll to and highlight.
   */
  heading?: string

  /**
   * Mac only. Open the note in a subwindow.
   */
  subWindow?: NotePlanYesNo

  /**
   * Mac only. Open the note in a split view.
   */
  splitView?: NotePlanYesNo

  /**
   * Mac only. Reuse an existing split view when splitView is yes.
   */
  reuseSplitView?: NotePlanYesNo

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
 * Open a NotePlan note identified by date, title, or filename.
 *
 * @param payload OpenNote action payload.
 * @returns NotePlan openNote URL.
 * @example
 * openNote({ noteDate: 'today' })
 * // => 'noteplan://x-callback-url/openNote?noteDate=today'
 * @example
 * openNote({ noteTitle: 'Fleeting Notes#Second Brain' })
 * // => 'noteplan://x-callback-url/openNote?noteTitle=Fleeting%20Notes%23Second%20Brain'
 * @link https://help.noteplan.co/article/49-x-callback-url-scheme#openNote
 */
export function openNote(payload: OpenNote = {}) {
  const {
    noteDate,
    timeframe,
    noteTitle,
    filename,
    heading,
    subWindow,
    splitView,
    reuseSplitView,
    useExistingSubWindow,
    highlightStart,
    highlightLength,
    xSuccess,
  } = payload

  return notePlanUrl('openNote', {
    ...(noteDate ? { noteDate } : {}),
    ...(timeframe ? { timeframe } : {}),
    ...(noteTitle ? { noteTitle } : {}),
    ...(filename ? { filename } : {}),
    ...(heading ? { heading } : {}),
    ...(subWindow ? { subWindow } : {}),
    ...(splitView ? { splitView } : {}),
    ...(reuseSplitView ? { reuseSplitView } : {}),
    ...(useExistingSubWindow ? { useExistingSubWindow } : {}),
    ...(highlightStart !== undefined ? { highlightStart } : {}),
    ...(highlightLength !== undefined ? { highlightLength } : {}),
    ...xSuccessParam(xSuccess),
  })
}
