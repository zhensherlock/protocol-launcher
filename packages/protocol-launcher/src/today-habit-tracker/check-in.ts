import { type TodayXCallback, todayUrl, xCallbackParams } from './shared'

/**
 * Check-in action payload definition.
 */
type CheckIn = TodayXCallback & {
  /**
   * The unique identifier for each habit.
   */
  id: string
}

/**
 * Perform a check-in on a specific habit.
 *
 * @param payload Check-in action payload.
 * @returns Today check-in x-callback-url.
 * @example
 * checkIn({ id: 'p14' })
 * // => 'today://x-callback-url/check-in?id=p14'
 * @link https://intercom.help/today_habit_tracker/en/articles/3745810-action-urls-documentation
 */
export function checkIn(payload: CheckIn) {
  const { id } = payload

  return todayUrl('check-in', {
    id,
    ...xCallbackParams(payload),
  })
}
