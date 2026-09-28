import { calendar366Url } from './shared'

type SwitchCalendarSet = {
  /** Calendar set name. */
  set: string
}

/**
 * Switch the selected calendar set in Calendar 366.
 *
 * @param payload Calendar set name.
 * @returns Calendar set switch URL.
 * @example
 * switchCalendarSet({ set: 'work' })
 * // => 'cal366://switch?set=work'
 * @link https://calendar366.com/help/index.html
 */
export function switchCalendarSet(payload: SwitchCalendarSet) {
  return calendar366Url('switch', { set: payload.set })
}
