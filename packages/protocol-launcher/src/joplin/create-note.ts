import { qs } from '@protocol-launcher/shared'
import type { JoplinCallbacks } from './get-current-note'

type CreateNote = JoplinCallbacks & {
  /** Title of the new note. */
  title: string
  /** Body of the new note. */
  body: string
}

/**
 * Create a note in Joplin's current notebook and return its link to another desktop app.
 *
 * Joplin accepts known app schemes or the x-callback-url host; HTTP callbacks are rejected.
 * @param payload Note content and callback URLs.
 * @returns Joplin create-note URL.
 * @example
 * createNote({ title: 'Ideas', body: 'A new idea', xSuccess: 'hook://x-callback-url/setCurrentNode' })
 * // => 'joplin://x-callback-url/createNote?title=Ideas&body=A%20new%20idea&x-success=hook%3A%2F%2Fx-callback-url%2FsetCurrentNode'
 * @link https://joplinapp.org/help/apps/external_links/
 */
export function createNote(payload: CreateNote) {
  const { title, body, xSuccess, xError } = payload
  return `joplin://x-callback-url/createNote${qs({ title, body, 'x-success': xSuccess, 'x-error': xError })}`
}
