import type { NotePlanXSuccess } from './shared'
import { notePlanUrl, xSuccessParam } from './shared'

/**
 * SelectTag action payload definition.
 */
type SelectTag = NotePlanXSuccess & {
  /**
   * Tag name. Include the leading # or @ to select a tag; pass an empty string to show all notes.
   */
  name: string
}

/**
 * Select a NotePlan tag or mention.
 *
 * @param payload SelectTag action payload.
 * @returns NotePlan selectTag URL.
 * @example
 * selectTag({ name: '#noteplan' })
 * // => 'noteplan://x-callback-url/selectTag?name=%23noteplan'
 * @link https://help.noteplan.co/article/49-x-callback-url-scheme#selectTag
 */
export function selectTag(payload: SelectTag) {
  const { name, xSuccess } = payload

  return notePlanUrl('selectTag', {
    name,
    ...xSuccessParam(xSuccess),
  })
}
