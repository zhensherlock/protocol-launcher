import { upNoteUrl } from './shared'

/**
 * OpenNotebook endpoint payload definition.
 */
type OpenNotebook = {
  /**
   * UpNote notebook id.
   */
  notebookId: string
}

/**
 * View notes in an UpNote notebook.
 *
 * @param payload OpenNotebook endpoint payload.
 * @returns UpNote openNotebook x-callback-url.
 * @example
 * openNotebook({ notebookId: 'REPLACE_WITH_NOTEBOOK_ID' })
 * // => 'upnote://x-callback-url/openNotebook?notebookId=REPLACE_WITH_NOTEBOOK_ID'
 * @link https://help.getupnote.com/resources/x-callback-url-endpoints
 */
export function openNotebook(payload: OpenNotebook) {
  const { notebookId } = payload

  return upNoteUrl('openNotebook', {
    notebookId,
  })
}
