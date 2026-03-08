/**
 * Create note definition.
 */
type CreateNote = {
  /**
   * Note title.
   */
  title?: string

  /**
   * Note content.
   */
  content?: string

  /**
   * Note tags.
   */
  tags?: string
}

/**
 * Create note in FSNotes.
 *
 * @param payload Create note definition.
 * @returns FSNotes create note URL.
 * @example
 * createNote({
 *   title: 'hello',
 *   content: 'hello world',
 * })
 * // => 'nv://make/?title=hello&content=hello%20world'
 * @link https://github.com/glushchenko/fsnotes/blob/master/FSNotes/AppDelegate%2BURLRoutes.swift
 */
export function createNote(payload: CreateNote) {
  const { title, content, tags } = payload
  const query = []
  if (title) {
    query.push(`title=${title}`)
  }
  if (content) {
    query.push(`html=${encodeURIComponent(content)}`)
  }
  if (tags) {
    query.push(`tags=${tags}`)
  }
  return `nv://make/${query.length ? `?${query.join('&')}` : ''}`
}
