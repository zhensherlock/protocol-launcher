import { upNoteUrl } from './shared'

/**
 * Tag view endpoint payload definition.
 */
type ViewTag = {
  /**
   * Tag title.
   */
  tag: string
}

/**
 * View notes in an UpNote tag.
 *
 * @param payload Tag view endpoint payload.
 * @returns UpNote tag/view x-callback-url.
 * @example
 * viewTag({ tag: 'project' })
 * // => 'upnote://x-callback-url/tag/view?tag=project'
 * @link https://help.getupnote.com/resources/x-callback-url-endpoints
 */
export function viewTag(payload: ViewTag) {
  const { tag } = payload

  return upNoteUrl('tag/view', {
    tag,
  })
}
