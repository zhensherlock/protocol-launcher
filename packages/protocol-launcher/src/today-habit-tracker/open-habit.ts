import { type TodayXCallback, todayUrl, xCallbackParams } from './shared'

/**
 * Open habit action payload definition.
 */
type OpenHabit = TodayXCallback & {
  /**
   * The unique identifier for each habit.
   */
  id: string
}

/**
 * Open Today, jump to a habit, and retrieve information about that habit.
 *
 * @param payload Open habit action payload.
 * @returns Today open-habit x-callback-url.
 * @example
 * openHabit({ id: 'p14' })
 * // => 'today://x-callback-url/open-habit?id=p14'
 * @link https://intercom.help/today_habit_tracker/en/articles/3745810-action-urls-documentation
 */
export function openHabit(payload: OpenHabit) {
  const { id } = payload

  return todayUrl('open-habit', {
    id,
    ...xCallbackParams(payload),
  })
}
