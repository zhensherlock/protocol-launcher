import {
  fileParam,
  type MarkedCallback,
  type MarkedPathValue,
  type MarkedRaise,
  markedPathUrl,
  markedUrl,
} from './shared'

type StyleByQuery = MarkedCallback &
  MarkedRaise & {
    /**
     * Name or path of a style present in Marked's style menu.
     */
    css: string
    /**
     * Comma-separated paths or filenames. If omitted, Marked uses the frontmost window.
     */
    file?: string
    path?: never
    syntax?: 'query'
  }

type StyleByPath = MarkedCallback &
  MarkedRaise & {
    /**
     * Name or path of a style present in Marked's style menu.
     */
    css: string
    /**
     * Path parameters referencing filenames, or `all`.
     */
    path: MarkedPathValue
    syntax: 'path'
    file?: never
  }

/**
 * Style payload definition.
 */
export type Style = StyleByQuery | StyleByPath

/**
 * Set the preview style for one or more Marked documents.
 *
 * @param payload Style payload.
 * @returns Marked style URL.
 * @example
 * style({ css: 'Github' })
 * // => 'x-marked://style?css=Github'
 * @example
 * style({ file: 'filename1,filename2', css: 'Github' })
 * // => 'x-marked://style?file=filename1,filename2&css=Github'
 * @example
 * style({ path: 'all', syntax: 'path', css: 'Github' })
 * // => 'x-marked://style/all?css=Github'
 * @link https://marked2app.com/help/URL_Handler.html#style
 */
export function style(payload: Style) {
  if (payload.syntax === 'path') {
    return markedPathUrl('style', payload.path, { css: payload.css }, payload)
  }

  return markedUrl(
    'style',
    {
      file: fileParam(payload.file),
      css: payload.css,
    },
    payload,
  )
}
