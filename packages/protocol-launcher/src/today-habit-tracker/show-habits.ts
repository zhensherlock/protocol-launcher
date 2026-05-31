import { type TodayXCallback, todayUrl, xCallbackParams } from './shared'

/**
 * Show habits filter values documented by Today.
 */
type ShowHabitsFilter = 'today' | 'all'

/**
 * Show habits action payload definition.
 */
type ShowHabits = TodayXCallback & {
  /**
   * Display habits due for today or all habits. Default in Today: today.
   */
  filter?: ShowHabitsFilter
}

/**
 * Open Today's habit overview screen with the requested filter.
 *
 * @param payload Show habits action payload.
 * @returns Today show-habits x-callback-url.
 * @example
 * showHabits({ filter: 'all' })
 * // => 'today://x-callback-url/show-habits?filter=all'
 * @example
 * showHabits()
 * // => 'today://x-callback-url/show-habits'
 * @link https://intercom.help/today_habit_tracker/en/articles/3745810-action-urls-documentation
 */
export function showHabits(payload: ShowHabits = {}) {
  const { filter } = payload

  return todayUrl('show-habits', {
    ...(filter ? { filter } : {}),
    ...xCallbackParams(payload),
  })
}
