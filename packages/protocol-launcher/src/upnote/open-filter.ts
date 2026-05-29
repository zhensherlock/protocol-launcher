import { upNoteUrl } from './shared'

/**
 * OpenFilter endpoint payload definition.
 */
type OpenFilter = {
  /**
   * UpNote filter id.
   */
  filterId: string
}

/**
 * View notes in an UpNote filter.
 *
 * @param payload OpenFilter endpoint payload.
 * @returns UpNote openFilter x-callback-url.
 * @example
 * openFilter({ filterId: 'REPLACE_WITH_FILTER_ID' })
 * // => 'upnote://x-callback-url/openFilter?filterId=REPLACE_WITH_FILTER_ID'
 * @link https://help.getupnote.com/resources/x-callback-url-endpoints
 */
export function openFilter(payload: OpenFilter) {
  const { filterId } = payload

  return upNoteUrl('openFilter', {
    filterId,
  })
}
