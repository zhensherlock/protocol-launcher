import { writtenDownXCallbackUrl } from './shared'

/**
 * Edit entry payload definition.
 */
type EditEntry = {
  /**
   * Unique identifier of the entry to edit.
   */
  id: string

  /**
   * Text to be added to the entry.
   */
  text?: string

  /**
   * Whether to append, replace, or prepend the text to the entry.
   */
  mode?: 'append' | 'replace' | 'prepend'

  /**
   * Comma separated list of tags to apply to the entry.
   */
  tags?: string

  /**
   * Whether to append, replace, or delete the provided tags.
   */
  tagMode?: 'append' | 'replace' | 'delete'

  /**
   * Comma separated latitude and longitude values, or `delete` to remove the location.
   */
  latlng?: string

  /**
   * Date and time for the entry in ISO 8601 format.
   *
   * @example '2017-12-19T16:39:57-08:00'
   */
  date?: string
}

/**
 * Edit text, tags, date, or location of an existing Written Down entry.
 *
 * @param payload Edit entry payload.
 * @returns Written Down edit-entry x-callback-url.
 * @example
 * editEntry({
 *   id: '4739C5F8-AF19-49A3-B6BD-2561962C75CC',
 *   text: 'Another thought',
 *   tags: 'thoughts,feelings',
 *   latlng: '37.331686,-122.030656',
 *   date: '2017-12-19T16:39:57-08:00',
 * })
 * // => 'writtendown://x-callback-url/edit-entry?id=4739C5F8-AF19-49A3-B6BD-2561962C75CC&text=Another%20thought&tags=thoughts,feelings&latlng=37.331686,-122.030656&date=2017-12-19T16:39:57-08:00'
 * @link https://tinkerbuilt.com/faq/x-callback-url/
 */
export function editEntry(payload: EditEntry) {
  const { id, text, mode, tags, tagMode, latlng, date } = payload

  return writtenDownXCallbackUrl('edit-entry', {
    id,
    text,
    mode,
    tags,
    tagMode,
    latlng,
    date,
  })
}
