import { writtenDownXCallbackUrl } from './shared'

/**
 * Create entry payload definition.
 */
type Create = {
  /**
   * Body text for the new entry.
   */
  text?: string

  /**
   * Unique identifier for the journal to create an entry in.
   */
  journalID?: string

  /**
   * Comma separated list of tags to add to the entry.
   */
  tags?: string

  /**
   * Comma separated latitude and longitude values for the entry location.
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
 * Create a new entry in a Written Down journal.
 *
 * @param payload Create entry payload.
 * @returns Written Down create x-callback-url.
 * @example
 * create({
 *   text: "It's beautiful today",
 *   tags: 'thoughts,weather',
 *   latlng: '37.331686,-122.030656',
 * })
 * // => 'writtendown://x-callback-url/create?text=It%27s%20beautiful%20today&tags=thoughts,weather&latlng=37.331686,-122.030656'
 * @example
 * create()
 * // => 'writtendown://x-callback-url/create'
 * @link https://tinkerbuilt.com/faq/x-callback-url/
 */
export function create(payload: Create = {}) {
  const { text, journalID, tags, latlng, date } = payload

  return writtenDownXCallbackUrl('create', {
    text,
    journalID,
    tags,
    latlng,
    date,
  })
}
