import { upNoteUrl } from './shared'

/**
 * Notebook new endpoint payload definition.
 */
type NewNotebook = {
  /**
   * New notebook title.
   */
  title: string
}

/**
 * Create a notebook in UpNote.
 *
 * @param payload Notebook new endpoint payload.
 * @returns UpNote notebook/new x-callback-url.
 * @example
 * newNotebook({ title: 'Projects' })
 * // => 'upnote://x-callback-url/notebook/new?title=Projects'
 * @link https://help.getupnote.com/resources/x-callback-url-endpoints
 */
export function newNotebook(payload: NewNotebook) {
  const { title } = payload

  return upNoteUrl('notebook/new', {
    title,
  })
}
