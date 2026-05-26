import {
  fileParam,
  type MarkedCallback,
  type MarkedPathValue,
  type MarkedRaise,
  markedPathUrl,
  markedUrl,
} from './shared'

type OpenByQuery = MarkedCallback &
  MarkedRaise & {
    /**
     * Full POSIX path to a document, or comma-separated list of paths.
     *
     * Running without a file opens Marked.
     */
    file?: string
    path?: never
    syntax?: 'query'
  }

type OpenByPath = MarkedCallback &
  MarkedRaise & {
    /**
     * Path components Marked combines into a document URL.
     */
    path: MarkedPathValue
    syntax: 'path'
    file?: never
  }

type OpenByDirectPath = MarkedCallback &
  MarkedRaise & {
    /**
     * Direct document path after the `x-marked://` scheme.
     */
    path: string
    syntax: 'direct'
    file?: never
  }

/**
 * Open payload definition.
 */
export type Open = OpenByQuery | OpenByPath | OpenByDirectPath

/**
 * Open a document in Marked.
 *
 * @param payload Open payload.
 * @returns Marked open URL.
 * @example
 * open({ file: '/Users/username/Desktop/report.md' })
 * // => 'x-marked://open?file=/Users/username/Desktop/report.md'
 * @example
 * open({ path: '~/nvALT2.2', syntax: 'path' })
 * // => 'x-marked://open/~/nvALT2.2'
 * @example
 * open({ path: '/Users/username/Desktop/report.md', syntax: 'direct' })
 * // => 'x-marked:///Users/username/Desktop/report.md'
 * @link https://marked2app.com/help/URL_Handler.html#open
 */
export function open(payload: Open = {}) {
  if (payload.syntax === 'path') {
    return markedPathUrl('open', payload.path, {}, payload)
  }

  if (payload.syntax === 'direct') {
    return markedPathUrl('', payload.path, {}, payload)
  }

  return markedUrl('open', { file: fileParam(payload.file) }, payload)
}
