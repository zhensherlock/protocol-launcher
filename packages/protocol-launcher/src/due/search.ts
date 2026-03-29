import { qs } from '@protocol-launcher/shared'

/**
 * Search payload definition.
 */
type Search = {
  /**
   * The string to search for.
   */
  query?: string
  /**
   * The section to search in. Can be 'Reminders', 'Timers' or 'Logbook'.
   * Defaults to 'Reminders' if not provided.
   */
  section?: 'Reminders' | 'Timers' | 'Logbook'
}

/**
 * Search for reminders or timers in Due.
 *
 * @param payload Search payload.
 * @returns Due search URL.
 * @example
 * search({
 *   query: '#work',
 *   section: 'Reminders',
 * })
 * // => 'due:///search?section=Reminders&query=%23work'
 * @example
 * search({
 *   query: '#HIIT',
 *   section: 'Timers',
 * })
 * // => 'due:///search?section=Timers&query=%23HIIT'
 * @example
 * search({})
 * // => 'due:///search'
 * @link https://www.dueapp.com/developer.html
 */
export function search(payload: Search = {}) {
  const { query, section } = payload
  const params = qs({
    ...(section ? { section } : {}),
    ...(query ? { query } : {}),
  })

  return `due:///search${params}`
}
