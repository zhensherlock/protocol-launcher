import type { UpNoteBoolean } from './shared'
import { upNoteUrl } from './shared'

/**
 * Note new endpoint payload definition.
 */
type NewNote = {
  /**
   * New note title.
   */
  title: string

  /**
   * New note text.
   */
  text: string

  /**
   * Notebook for the new note.
   */
  notebook: string

  /**
   * Whether to open the new note in a new window.
   */
  newWindow: UpNoteBoolean

  /**
   * Whether the text is Markdown.
   */
  markdown: UpNoteBoolean
}

/**
 * Create a note in UpNote.
 *
 * @param payload Note new endpoint payload.
 * @returns UpNote note/new x-callback-url.
 * @example
 * newNote({ title: 'Daily Plan', text: '# Today', notebook: 'Work', newWindow: true, markdown: true })
 * // => 'upnote://x-callback-url/note/new?title=Daily%20Plan&text=%23%20Today&notebook=Work&new_window=true&markdown=true'
 * @link https://help.getupnote.com/resources/x-callback-url-endpoints
 */
export function newNote(payload: NewNote) {
  const { title, text, notebook, newWindow, markdown } = payload

  return upNoteUrl('note/new', {
    title,
    text,
    notebook,
    new_window: newWindow,
    markdown,
  })
}
