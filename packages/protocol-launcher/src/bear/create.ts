import { qs } from '@protocol-launcher/shared'

/**
 * Create note command payload definition.
 */
type Create = {
  /**
   * Note title.
   */
  title?: string

  /**
   * Note body.
   */
  text?: string

  /**
   * If yes use the text currently available in the clipboard.
   */
  clipboard?: boolean

  /**
   * A comma separated list of tags.
   */
  tags?: string

  /**
   * Base64 representation of a file.
   */
  file?: string

  /**
   * File name with extension. Both file and filename are required to successfully add a file.
   */
  filename?: string

  /**
   * If no do not display the new note in Bear's main or external window.
   */
  openNote?: boolean

  /**
   * If yes open the note in an external window (MacOS only).
   */
  newWindow?: boolean

  /**
   * If yes make the external window float on top (MacOS only).
   */
  float?: boolean

  /**
   * If no the call don't force the opening of bear main window (MacOS only).
   */
  showWindow?: boolean

  /**
   * If yes pin the note to the top of the list.
   */
  pin?: boolean

  /**
   * If yes place the cursor inside the note editor.
   */
  edit?: boolean

  /**
   * If yes prepend the current date and time to the text.
   */
  timestamp?: boolean

  /**
   * If html the provided text parameter is converted from html to markdown.
   */
  type?: 'html'

  /**
   * If type is html this parameter is used to resolve relative image links.
   */
  url?: string
}

/**
 * Create a new note in Bear.
 *
 * @param payload Create note command payload.
 * @returns Bear create URL.
 * @example
 * create({ title: 'My Note Title', text: 'First line' })
 * // => 'bear://x-callback-url/create?title=My%20Note%20Title&text=First%20line'
 * @example
 * create({ title: 'Shopping', text: 'Milk', tags: 'home,groceries' })
 * // => 'bear://x-callback-url/create?title=Shopping&text=Milk&tags=home%2Cgroceries'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#create
 */
export function create(payload: Create = {}) {
  const {
    title,
    text,
    clipboard,
    tags,
    file,
    filename,
    openNote,
    newWindow,
    float,
    showWindow,
    pin,
    edit,
    timestamp,
    type,
    url,
  } = payload

  const params = qs({
    ...(title ? { title } : {}),
    ...(text ? { text } : {}),
    ...(clipboard ? { clipboard: 'yes' } : {}),
    ...(tags ? { tags } : {}),
    ...(file ? { file } : {}),
    ...(filename ? { filename } : {}),
    ...(openNote === false ? { open_note: 'no' } : {}),
    ...(newWindow ? { new_window: 'yes' } : {}),
    ...(float ? { float: 'yes' } : {}),
    ...(showWindow === false ? { show_window: 'no' } : {}),
    ...(pin ? { pin: 'yes' } : {}),
    ...(edit ? { edit: 'yes' } : {}),
    ...(timestamp ? { timestamp: 'yes' } : {}),
    ...(type ? { type } : {}),
    ...(url ? { url } : {}),
  })

  return `bear://x-callback-url/create${params ? `?${params}` : ''}`
}
