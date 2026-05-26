import { type MarkedCallback, markedPathUrl, markedUrl } from './shared'

type HelpByQuery = MarkedCallback & {
  /**
   * Exact title of an existing help page, with optional anchor hash.
   */
  page?: string
  path?: never
  syntax?: 'query'
}

type HelpByPath = MarkedCallback & {
  /**
   * Help page path. Marked allows a colon in place of a hash anchor.
   */
  path: string
  syntax: 'path'
  page?: never
}

/**
 * Help payload definition.
 */
export type Help = HelpByQuery | HelpByPath

/**
 * Open the Marked internal help system.
 *
 * @param payload Help payload.
 * @returns Marked help URL.
 * @example
 * help({ page: 'Document_Statistics' })
 * // => 'x-marked://help?page=Document_Statistics'
 * @example
 * help({ path: 'Keyword_Highlighting:editingkeywords', syntax: 'path' })
 * // => 'x-marked://help/Keyword_Highlighting:editingkeywords'
 * @link https://marked2app.com/help/URL_Handler.html#help
 */
export function help(payload: Help = {}) {
  if (payload.syntax === 'path') {
    return markedPathUrl('help', payload.path, {}, payload)
  }

  return markedUrl('help', { page: payload.page }, payload)
}
