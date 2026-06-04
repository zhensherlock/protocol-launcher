import type { OnSongListActionsPayload } from './shared'
import { onSongUrl } from './shared'

/**
 * List supported OnSong actions.
 *
 * @param payload OnSong list actions payload.
 * @returns OnSong action list URL.
 * @example
 * listActions()
 * // => 'onsong://action/list'
 * @example
 * listActions({ returnURL: 'myapp://retrieve-actions/?data=' })
 * // => 'onsong://action/list?returnURL=myapp%3A%2F%2Fretrieve-actions%2F%3Fdata%3D'
 * @link https://onsongapp.com/developers/actions/
 */
export function listActions(payload: OnSongListActionsPayload = {}) {
  const { returnURL } = payload

  return onSongUrl('action/list', {
    ...(returnURL !== undefined ? { returnURL } : {}),
  })
}
