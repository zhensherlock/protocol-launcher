import { qs } from '@protocol-launcher/shared'

/**
 * Open note command payload definition.
 */
type OpenNote = {
  /**
   * Note unique identifier.
   */
  id?: string

  /**
   * Note title.
   */
  title?: string

  /**
   * An header inside the note.
   */
  header?: string

  /**
   * If yes exclude trashed notes.
   */
  excludeTrashed?: boolean

  /**
   * If yes open the note in an external window (MacOS only).
   */
  newWindow?: boolean

  /**
   * If yes makes the external window float on top (MacOS only).
   */
  float?: boolean

  /**
   * If no the call don't force the opening of bear main window (MacOS only).
   */
  showWindow?: boolean

  /**
   * If no do not display the new note in Bear's main or external window.
   */
  openNote?: boolean

  /**
   * If yes return the note currently selected in Bear (token required).
   */
  selected?: boolean

  /**
   * If yes pin the note to the top of the list.
   */
  pin?: boolean

  /**
   * If yes place the cursor inside the note editor.
   */
  edit?: boolean

  /**
   * Opens the in-note find&replace panel with the specified text.
   */
  search?: string
}

/**
 * Open a note in Bear.
 *
 * @param payload Open note command payload.
 * @returns Bear open-note URL.
 * @example
 * openNote({ id: '7E4B681B' })
 * // => 'bear://x-callback-url/open-note?id=7E4B681B'
 * @example
 * openNote({ id: '7E4B681B', header: 'Secondary Title' })
 * // => 'bear://x-callback-url/open-note?id=7E4B681B&header=Secondary%20Title'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#open-note
 */
export function openNote(payload: OpenNote = { showWindow: true, openNote: true }) {
  const {
    id,
    title,
    header,
    excludeTrashed,
    newWindow,
    float,
    showWindow = true,
    openNote: openNoteParam = true,
    selected,
    pin,
    edit,
    search,
  } = payload

  const params = qs({
    ...(id ? { id } : {}),
    ...(title && !id ? { title } : {}),
    ...(header ? { header } : {}),
    ...(excludeTrashed ? { exclude_trashed: 'yes' } : {}),
    ...(newWindow ? { new_window: 'yes' } : {}),
    ...(float ? { float: 'yes' } : {}),
    ...(!showWindow ? { show_window: 'no' } : {}),
    ...(!openNoteParam ? { open_note: 'no' } : {}),
    ...(selected ? { selected: 'yes' } : {}),
    ...(pin ? { pin: 'yes' } : {}),
    ...(edit ? { edit: 'yes' } : {}),
    ...(search ? { search } : {}),
  })

  return `bear://x-callback-url/open-note?${params}`
}
