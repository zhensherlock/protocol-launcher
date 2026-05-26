import {
  fileParam,
  type MarkedCallback,
  type MarkedPathValue,
  type MarkedRaise,
  markedPathUrl,
  markedUrl,
} from './shared'

type RunJavaScriptByQuery = MarkedCallback &
  MarkedRaise & {
    /**
     * JavaScript command to run in a document window.
     */
    js: string
    /**
     * Comma-separated paths or filenames. If omitted, Marked uses the frontmost window.
     */
    file?: string
    path?: never
    syntax?: 'query'
  }

type RunJavaScriptByPath = MarkedCallback &
  MarkedRaise & {
    /**
     * JavaScript command to run in a document window.
     */
    js: string
    /**
     * Path parameters referencing filenames, or `all`.
     */
    path: MarkedPathValue
    syntax: 'path'
    file?: never
  }

/**
 * Run JavaScript payload definition.
 */
export type RunJavaScript = RunJavaScriptByQuery | RunJavaScriptByPath

/**
 * Run a JavaScript command in a Marked document window.
 *
 * @param payload Run JavaScript payload.
 * @returns Marked do URL.
 * @example
 * runJavaScript({ path: 'filename1/filename2', syntax: 'path', js: 'Marked.file.refresh()' })
 * // => 'x-marked://do/filename1/filename2?js=Marked.file.refresh()'
 * @example
 * runJavaScript({ file: 'filename1,filename2', js: 'Marked.file.refresh()' })
 * // => 'x-marked://do?file=filename1,filename2&js=Marked.file.refresh()'
 * @link https://marked2app.com/help/URL_Handler.html#do
 */
export function runJavaScript(payload: RunJavaScript) {
  const params = { file: fileParam(payload.file), js: payload.js }

  if (payload.syntax === 'path') {
    return markedPathUrl('do', payload.path, { js: payload.js }, payload)
  }

  return markedUrl('do', params, payload)
}
