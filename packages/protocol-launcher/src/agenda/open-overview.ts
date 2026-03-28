import { qs } from '@protocol-launcher/shared'

/**
 * Open overview command payload definition.
 */
type OpenOverview = {
  /**
   * The title of the overview.
   *
   * @example 'This Week'
   */
  title?: string
  /**
   * The identifier of the overview.
   */
  identifier?: string
  /**
   * Open in a separate window (New in Agenda 18.0).
   */
  separateWindow?: boolean
}

/**
 * Open a saved overview identified by title or identifier.
 *
 * @param payload Open overview command payload.
 * @returns Agenda open overview URL.
 * @example
 * openOverview({ title: 'This Week' })
 * // => 'agenda://x-callback-url/open-overview?title=This%20Week'
 * @example
 * openOverview({ identifier: 'overview-123' })
 * // => 'agenda://x-callback-url/open-overview?identifier=overview-123'
 * @example
 * openOverview({ title: 'This Week', separateWindow: true })
 * // => 'agenda://x-callback-url/open-overview?title=This%20Week&separate-window=true'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function openOverview(payload: OpenOverview = {}) {
  const { title, identifier, separateWindow } = payload
  const params = qs({
    ...(title ? { title } : {}),
    ...(identifier ? { identifier } : {}),
    ...(separateWindow !== undefined ? { 'separate-window': separateWindow } : {}),
  })

  return `agenda://x-callback-url/open-overview${params}`
}
