import type { UpNoteViewMode } from './shared'
import { upNoteViewUrl } from './shared'

type UpNoteViewCommon = {
  /**
   * If provided, UpNote opens this note in the editor.
   */
  noteId?: string

  /**
   * Unique id of the space, or default for the default space.
   */
  spaceId?: string

  /**
   * Search action.
   */
  action?: 'search'

  /**
   * Query used when action is search.
   */
  query?: string
}

/**
 * View endpoint payload definition.
 */
type View = UpNoteViewCommon &
  (
    | {
        /**
         * Dynamic view mode.
         */
        mode?: Exclude<UpNoteViewMode, 'notebooks' | 'tags' | 'filters'>
        notebookId?: never
        tagId?: never
        filterId?: never
      }
    | {
        /**
         * View notes in a notebook. notebookId is required by UpNote.
         */
        mode: 'notebooks'
        notebookId: string
        tagId?: never
        filterId?: never
      }
    | {
        /**
         * View notes in a tag. tagId is required by UpNote.
         */
        mode: 'tags'
        tagId: string
        notebookId?: never
        filterId?: never
      }
    | {
        /**
         * View notes in a filter. filterId is required by UpNote.
         */
        mode: 'filters'
        filterId: string
        notebookId?: never
        tagId?: never
      }
  )

/**
 * View dynamically in UpNote.
 *
 * @param payload View endpoint payload.
 * @returns UpNote view x-callback-url.
 * @example
 * view({ mode: 'all_notes' })
 * // => 'upnote://x-callback-url/view?mode=all_notes'
 * @example
 * view({ mode: 'notebooks', notebookId: 'REPLACE_WITH_NOTEBOOK_ID', spaceId: 'default' })
 * // => 'upnote://x-callback-url/view?mode=notebooks&notebookId=REPLACE_WITH_NOTEBOOK_ID&spaceId=default'
 * @link https://help.getupnote.com/resources/x-callback-url-endpoints
 */
export function view(payload: View = {}) {
  const { mode, noteId, notebookId, tagId, filterId, spaceId, action, query } = payload

  return upNoteViewUrl({
    ...(mode !== undefined ? { mode } : {}),
    ...(noteId !== undefined ? { noteId } : {}),
    ...(notebookId !== undefined ? { notebookId } : {}),
    ...(tagId !== undefined ? { tagId } : {}),
    ...(filterId !== undefined ? { filterId } : {}),
    ...(spaceId !== undefined ? { spaceId } : {}),
    ...(action !== undefined ? { action } : {}),
    ...(query !== undefined ? { query } : {}),
  })
}
