import type { NotePlanXSuccess } from './shared'
import { notePlanUrl, xSuccessParam } from './shared'

/**
 * Search action payload definition.
 */
type Search =
  | (NotePlanXSuccess & {
      /**
       * Search text. Pass an empty string to clear the search field.
       */
      text: string
      filter?: never
    })
  | (NotePlanXSuccess & {
      text?: never
      /**
       * Existing filter name to open instead of searching by text.
       */
      filter: string
    })

/**
 * Search in NotePlan or open an existing filter.
 *
 * @param payload Search action payload.
 * @returns NotePlan search URL.
 * @example
 * search({ text: 'noteplan' })
 * // => 'noteplan://x-callback-url/search?text=noteplan'
 * @example
 * search({ filter: 'Upcoming' })
 * // => 'noteplan://x-callback-url/search?filter=Upcoming'
 * @link https://help.noteplan.co/article/49-x-callback-url-scheme#search
 */
export function search(payload: Search) {
  const { text, filter, xSuccess } = payload

  return notePlanUrl('search', {
    ...(text !== undefined ? { text } : {}),
    ...(filter !== undefined ? { filter } : {}),
    ...xSuccessParam(xSuccess),
  })
}
