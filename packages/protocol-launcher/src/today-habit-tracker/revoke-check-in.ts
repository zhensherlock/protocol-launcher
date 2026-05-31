import { type TodayXCallback, todayUrl, xCallbackParams } from './shared'

/**
 * Revoke check-in action payload definition.
 */
type RevokeCheckIn = TodayXCallback & {
  /**
   * The unique identifier for each habit.
   */
  id: string
}

/**
 * Revoke a check-in on a specific habit.
 *
 * @param payload Revoke check-in action payload.
 * @returns Today revoke-checkin x-callback-url.
 * @example
 * revokeCheckIn({ id: 'p14' })
 * // => 'today://x-callback-url/revoke-checkin?id=p14'
 * @link https://intercom.help/today_habit_tracker/en/articles/3745810-action-urls-documentation
 */
export function revokeCheckIn(payload: RevokeCheckIn) {
  const { id } = payload

  return todayUrl('revoke-checkin', {
    id,
    ...xCallbackParams(payload),
  })
}
