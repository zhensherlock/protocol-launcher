/**
 * Open file definition.
 */
type FindNotes = {
  /**
   * Keyword to find.
   */
  keyword: string
}

/**
 * Find notes in FSNotes.
 *
 * @param payload Find notes definition.
 * @returns FSNotes find notes URL.
 * @example
 * findNotes({
 *   keyword: 'hello',
 * })
 * // => 'fsnotes://find/hello'
 * @link https://github.com/glushchenko/fsnotes/blob/master/FSNotes/AppDelegate%2BURLRoutes.swift
 */
export function findNotes(payload: FindNotes) {
  const { keyword } = payload
  return `fsnotes://find/${keyword}`
}
