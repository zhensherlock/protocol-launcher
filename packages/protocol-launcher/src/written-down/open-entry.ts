import { writtenDownXCallbackUrl } from './shared'

/**
 * Open entry payload definition.
 */
type OpenEntry = {
  /**
   * Unique identifier for the entry to be opened.
   */
  id: string
}

/**
 * Open and display an entry in Written Down.
 *
 * @param payload Open entry payload.
 * @returns Written Down open-entry x-callback-url.
 * @example
 * openEntry({ id: '4739C5F8-AF19-49A3-B6BD-2561962C75CC' })
 * // => 'writtendown://x-callback-url/open-entry?id=4739C5F8-AF19-49A3-B6BD-2561962C75CC'
 * @link https://tinkerbuilt.com/faq/x-callback-url/
 */
export function openEntry(payload: OpenEntry) {
  const { id } = payload

  return writtenDownXCallbackUrl('open-entry', {
    id,
  })
}
