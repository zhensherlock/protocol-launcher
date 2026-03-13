import { qs } from '@protocol-launcher/shared'

/**
 * Add text command payload definition.
 */
type AddText = {
  /**
   * Note unique identifier.
   */
  id?: string

  /**
   * Title of the note.
   */
  title?: string

  /**
   * If yes use the note currently selected in Bear (token required).
   */
  selected?: boolean

  /**
   * Text to add.
   */
  text?: string

  /**
   * If yes use the text currently available in the clipboard.
   */
  clipboard?: boolean

  /**
   * If specified add the text to the corresponding header inside the note.
   */
  header?: string

  /**
   * The allowed values are prepend, append, replace_all and replace.
   */
  mode?: 'prepend' | 'append' | 'replace_all' | 'replace'

  /**
   * If yes and mode is append force the text to appear on a new line inside the note.
   */
  newLine?: boolean

  /**
   * A comma separated list of tags.
   */
  tags?: string

  /**
   * If yes exclude trashed notes.
   */
  excludeTrashed?: boolean

  /**
   * If no do not display the new note in Bear's main or external window.
   */
  openNote?: boolean

  /**
   * If yes open the note in an external window (MacOS only).
   */
  newWindow?: boolean

  /**
   * If no the call don't force the opening of bear main window (MacOS only).
   */
  showWindow?: boolean

  /**
   * If yes place the cursor inside the note editor.
   */
  edit?: boolean

  /**
   * If yes prepend the current date and time to the text.
   */
  timestamp?: boolean
}

/**
 * Append or prepend text to a note in Bear.
 *
 * @param payload Add text command payload.
 * @returns Bear add-text URL.
 * @example
 * addText({ text: 'new line', id: '4EDAF0D1', mode: 'append' })
 * // => 'bear://x-callback-url/add-text?text=new%20line&id=4EDAF0D1&mode=append'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#add-text
 */
export function addText(payload: AddText = {}) {
  const {
    id,
    title,
    selected,
    text,
    clipboard,
    header,
    mode,
    newLine,
    tags,
    excludeTrashed,
    openNote,
    newWindow,
    showWindow,
    edit,
    timestamp,
  } = payload

  const params = qs({
    ...(id ? { id } : {}),
    ...(title && !id ? { title } : {}),
    ...(selected ? { selected: 'yes' } : {}),
    ...(text ? { text } : {}),
    ...(clipboard ? { clipboard: 'yes' } : {}),
    ...(header ? { header } : {}),
    ...(mode ? { mode } : {}),
    ...(newLine ? { new_line: 'yes' } : {}),
    ...(tags ? { tags } : {}),
    ...(excludeTrashed ? { exclude_trashed: 'yes' } : {}),
    ...(openNote === false ? { open_note: 'no' } : {}),
    ...(newWindow ? { new_window: 'yes' } : {}),
    ...(showWindow === false ? { show_window: 'no' } : {}),
    ...(edit ? { edit: 'yes' } : {}),
    ...(timestamp ? { timestamp: 'yes' } : {}),
  })

  return `bear://x-callback-url/add-text${params ? `?${params}` : ''}`
}
