import { qs } from '@protocol-launcher/shared'

export type JoplinCallbacks = {
  /** App callback URL receiving the note's title and external URL. */
  xSuccess: string
  /** App callback URL receiving errorMessage if the action fails. */
  xError?: string
}

/**
 * Return the selected Joplin note to another desktop app.
 *
 * Joplin accepts known app schemes or the x-callback-url host; HTTP callbacks are rejected.
 * @param payload Callback URLs.
 * @returns Joplin get-current-note URL.
 * @example
 * getCurrentNote({ xSuccess: 'hook://x-callback-url/setCurrentNode' })
 * // => 'joplin://x-callback-url/getCurrentNote?x-success=hook%3A%2F%2Fx-callback-url%2FsetCurrentNode'
 * @link https://joplinapp.org/help/apps/external_links/
 */
export function getCurrentNote(payload: JoplinCallbacks) {
  return `joplin://x-callback-url/getCurrentNote${qs({
    'x-success': payload.xSuccess,
    'x-error': payload.xError,
  })}`
}
