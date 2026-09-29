import { qs } from '@protocol-launcher/shared'

/**
 * Open file definition.
 */
type FindNotes = {
  /**
   * Keyword to find.
   */
  keyword: string
  /** Note title/name to open; falls back to searching this value. */
  id?: string
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
 * @link https://github.com/glushchenko/fsnotes/blob/v7.3.4/FSNotes/AppDelegate%2BURLRoutes.swift
 */
export function findNotes(payload: FindNotes) {
  const { keyword, id } = payload
  return `fsnotes://find/${encodeURIComponent(keyword)}${qs({ id })}`
}
