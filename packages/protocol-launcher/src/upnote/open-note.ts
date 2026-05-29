import type { UpNoteBoolean } from './shared'
import { upNoteUrl } from './shared'

/**
 * OpenNote endpoint payload definition.
 */
type OpenNote = {
  /**
   * UpNote note id.
   */
  noteId: string

  /**
   * Whether to open the note in a new window.
   */
  newWindow: UpNoteBoolean
}

/**
 * View a note in UpNote.
 *
 * @param payload OpenNote endpoint payload.
 * @returns UpNote openNote x-callback-url.
 * @example
 * openNote({ noteId: 'REPLACE_WITH_NOTE_ID', newWindow: false })
 * // => 'upnote://x-callback-url/openNote?noteId=REPLACE_WITH_NOTE_ID&new_window=false'
 * @link https://help.getupnote.com/resources/x-callback-url-endpoints
 */
export function openNote(payload: OpenNote) {
  const { noteId, newWindow } = payload

  return upNoteUrl('openNote', {
    noteId,
    new_window: newWindow,
  })
}
