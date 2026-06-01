import { qs } from '@protocol-launcher/shared'

/**
 * Schedule action notification payload definition.
 */
type Schedule = {
  /**
   * Action ID.
   */
  action?: string | number

  /**
   * Any valid URL enclosed in brackets with `url:` leading the URL.
   *
   * @example '[url:https://apple.com]'
   */
  url?: string

  /**
   * Absolute ISO8601 date. Launch Center Pro may also detect common date formats.
   */
  at?: string

  /**
   * Relative date in seconds, minutes, or hours from now.
   *
   * @example '60s'
   * @example '60m'
   * @example '1h30m30s'
   */
  in?: string

  /**
   * Repeat mode.
   */
  repeat?: 'hourly' | 'weekly' | 'monthly' | 'specificdays' | 'specific-days' | 'days'

  /**
   * Days used with repeat=specificdays.
   *
   * @example 'm,tu,w,th,f'
   */
  days?: string
}

/**
 * Schedule a Launch Center Pro action notification.
 *
 * @param payload Schedule action notification payload.
 * @returns Launch Center Pro schedule URL.
 * @example
 * schedule({ action: 179, in: '1h', repeat: 'specificdays', days: 'm,tu,w,th,f' })
 * // => 'launch://schedule?action=179&in=1h&repeat=specificdays&days=m%2Ctu%2Cw%2Cth%2Cf'
 * @example
 * schedule({ url: '[url:https://apple.com]', in: '10min' })
 * // => 'launch://schedule?url=%5Burl%3Ahttps%3A%2F%2Fapple.com%5D&in=10min'
 * @link https://help.contrast.co/hc/en-us/articles/360024275852-Scheduling-Action-Notifications
 */
export function schedule(payload: Schedule) {
  const { action, url, at, repeat, days } = payload

  return `launch://schedule${qs({
    ...(action !== undefined ? { action } : {}),
    ...(url !== undefined ? { url } : {}),
    ...(at !== undefined ? { at } : {}),
    ...(payload.in !== undefined ? { in: payload.in } : {}),
    ...(repeat !== undefined ? { repeat } : {}),
    ...(days !== undefined ? { days } : {}),
  })}`
}
