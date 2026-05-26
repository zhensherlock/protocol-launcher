import { type MarkedCallback, markedUrl } from './shared'

type AddStyleFromCss = MarkedCallback & {
  /**
   * URL-encoded CSS text to write to a custom style.
   */
  css: string
  /**
   * Style name used for both the CSS filename and menu item.
   */
  name: string
  file?: never
}

type AddStyleFromFile = MarkedCallback & {
  /**
   * Full POSIX path to a CSS file to add to Marked.
   */
  file: string
  /**
   * Menu item name. If omitted, Marked uses the filename.
   */
  name?: string
  css?: never
}

/**
 * Add style payload definition.
 */
export type AddStyle = AddStyleFromCss | AddStyleFromFile

/**
 * Add a custom CSS style to Marked.
 *
 * @param payload Add style payload.
 * @returns Marked addstyle URL.
 * @example
 * addStyle({ name: 'My new style', css: 'body { color: red; }' })
 * // => 'x-marked://addstyle?name=My%20new%20style&css=body%20%7B%20color:%20red%3B%20%7D'
 * @example
 * addStyle({ file: '/Users/myuser/Custom Styles/Unicorn.css' })
 * // => 'x-marked://addstyle?file=/Users/myuser/Custom%20Styles/Unicorn.css'
 * @link https://marked2app.com/help/URL_Handler.html#addstyle
 */
export function addStyle(payload: AddStyle) {
  if ('css' in payload) {
    return markedUrl(
      'addstyle',
      {
        name: payload.name,
        css: payload.css,
      },
      payload,
    )
  }

  return markedUrl(
    'addstyle',
    {
      file: payload.file,
      name: payload.name,
    },
    payload,
  )
}
