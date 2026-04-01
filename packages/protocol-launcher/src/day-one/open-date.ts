import { qs } from '@protocol-launcher/shared'

/**
 * Open date payload definition.
 */
type OpenDate = {
  /**
   * The date to open (YYYY-MM-DD format).
   *
   * @example '2020-04-02'
   */
  date?: string
  /**
   * The day to open for On This Day view (MM-DD format).
   *
   * @example '04-12'
   */
  day?: string
}

/**
 * Open Day One to a specific date or On This Day view.
 *
 * @param payload Open date payload.
 * @returns Day One open date URL.
 * @example
 * openDate({ date: '2020-04-02' })
 * // => 'dayone://open?date=2020-04-02'
 * @example
 * openDate({ day: '04-12' })
 * // => 'dayone://open?day=04-12'
 * @link https://dayoneapp.com/guides/tips-and-tutorials/day-one-url-scheme/
 */
export function openDate(payload: OpenDate = {}) {
  const { date, day } = payload
  const params = qs({
    ...(date ? { date } : {}),
    ...(day ? { day } : {}),
  })

  return `dayone://open${params}`
}
