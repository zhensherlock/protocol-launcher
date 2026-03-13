import { qs } from '@protocol-launcher/shared'

/**
 * Add file command payload definition.
 */
type AddFile = {
  /**
   * Note unique identifier.
   */
  id?: string

  /**
   * Note title.
   */
  title?: string

  /**
   * If yes use the note currently selected in Bear (token required).
   */
  selected?: boolean

  /**
   * Base64 representation of a file (required).
   */
  file: string

  /**
   * If specified add the file to the corresponding header inside the note.
   */
  header?: string

  /**
   * File name with extension (required).
   */
  filename: string

  /**
   * The allowed values are prepend, append, replace_all and replace.
   */
  mode?: 'prepend' | 'append' | 'replace_all' | 'replace'

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
}

/**
 * Append or prepend a file to a note in Bear.
 *
 * @param payload Add file command payload.
 * @returns Bear add-file URL.
 * @example
 * addFile({ filename: 'test.gif', id: '4EDAF0D1', mode: 'append', file: 'R0lGODlhAQABAIAAAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' })
 * // => 'bear://x-callback-url/add-file?filename=test.gif&id=4EDAF0D1&mode=append&file=R0lGODlhAQABAIAAAP%2F%2F%2F%2F%2F%2F%2FwAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw%3D%3D'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#add-file
 */
export function addFile(payload: AddFile) {
  const { id, title, selected, file, header, filename, mode, openNote, newWindow, showWindow, edit } = payload

  const params = qs({
    ...(id ? { id } : {}),
    ...(title && !id ? { title } : {}),
    ...(selected ? { selected: 'yes' } : {}),
    ...(file ? { file } : {}),
    ...(header ? { header } : {}),
    ...(filename ? { filename } : {}),
    ...(mode ? { mode } : {}),
    ...(openNote === false ? { open_note: 'no' } : {}),
    ...(newWindow ? { new_window: 'yes' } : {}),
    ...(showWindow === false ? { show_window: 'no' } : {}),
    ...(edit ? { edit: 'yes' } : {}),
  })

  return `bear://x-callback-url/add-file${params ? `?${params}` : ''}`
}
