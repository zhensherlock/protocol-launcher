import {
  fileParam,
  type MarkedCallback,
  type MarkedPathValue,
  type MarkedRaise,
  markedPathUrl,
  markedUrl,
} from './shared'

type RefreshByQuery = MarkedCallback &
  MarkedRaise & {
    /**
     * Paths, filenames, partial filenames, or `all`.
     *
     * Calling without a file refreshes all open previews.
     */
    file?: string
    path?: never
    syntax?: 'query'
  }

type RefreshByPath = MarkedCallback &
  MarkedRaise & {
    /**
     * Path parameters referencing filenames.
     */
    path: MarkedPathValue
    syntax: 'path'
    file?: never
  }

/**
 * Refresh payload definition.
 */
export type Refresh = RefreshByQuery | RefreshByPath

/**
 * Refresh one Marked document preview or all open previews.
 *
 * @param payload Refresh payload.
 * @returns Marked refresh URL.
 * @example
 * refresh()
 * // => 'x-marked://refresh'
 * @example
 * refresh({ file: '/Users/username/Desktop/report.md' })
 * // => 'x-marked://refresh?file=/Users/username/Desktop/report.md'
 * @example
 * refresh({ path: 'filename1/filename2', syntax: 'path' })
 * // => 'x-marked://refresh/filename1/filename2'
 * @link https://marked2app.com/help/URL_Handler.html#refresh
 */
export function refresh(payload: Refresh = {}) {
  if (payload.syntax === 'path') {
    return markedPathUrl('refresh', payload.path, {}, payload)
  }

  return markedUrl('refresh', { file: fileParam(payload.file) }, payload)
}
