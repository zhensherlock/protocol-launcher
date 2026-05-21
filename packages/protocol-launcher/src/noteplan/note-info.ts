import { notePlanUrl } from './shared'

/**
 * NoteInfo action payload definition.
 */
type NoteInfo = {
  /**
   * Callback URL that receives path and name result parameters from NotePlan.
   */
  xSuccess: string
}

/**
 * Request information for the currently opened NotePlan note.
 *
 * @param payload NoteInfo action payload.
 * @returns NotePlan noteInfo URL.
 * @example
 * noteInfo({ xSuccess: 'sourceapp://x-callback-url' })
 * // => 'noteplan://x-callback-url/noteInfo/?x-success=sourceapp%3A%2F%2Fx-callback-url'
 * @link https://help.noteplan.co/article/49-x-callback-url-scheme#noteInfo
 */
export function noteInfo(payload: NoteInfo) {
  const { xSuccess } = payload

  return notePlanUrl('noteInfo', { 'x-success': xSuccess }, true)
}
