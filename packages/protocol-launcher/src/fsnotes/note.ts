/**
 * Open note definition.
 */
type OpenNote = {
  /**
   * Note title.
   */
  title?: string

  /**
   * Note tag.
   */
  tag?: string
}

/**
 * Open note in FSNotes.
 *
 * @param payload Open note definition.
 * @returns FSNotes open note URL.
 * @example
 * openNote({
 *   title: 'hello',
 * })
 * // => 'fsnotes://open?title=hello'
 * @link https://github.com/glushchenko/fsnotes/blob/master/FSNotes/AppDelegate%2BURLRoutes.swift
 */
export function openNote(payload: OpenNote) {
  const { title, tag } = payload
  const query = []
  if (title) {
    query.push(`title=${title}`)
  }
  if (tag) {
    query.push(`tag=${tag}`)
  }
  return `fsnotes://open/${query.length ? `?${query.join('&')}` : ''}`
}
