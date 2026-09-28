type OpenTimeline = {
  /** Windows requires the timeline route; other platforms use the existing entries route. */
  platform?: 'ios' | 'macos' | 'android' | 'windows'
}

/**
 * Open Day One timeline.
 *
 * @param payload Target platform.
 * @returns Day One timeline URL.
 * @example
 * openTimeline()
 * // => 'dayone://entries'
 * @example
 * openTimeline({ platform: 'windows' })
 * // => 'dayone://timeline'
 * @link https://dayoneapp.com/guides/tips-and-tutorials/day-one-url-scheme/
 */
export function openTimeline(payload: OpenTimeline = {}) {
  return payload.platform === 'windows' ? 'dayone://timeline' : 'dayone://entries'
}
