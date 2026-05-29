import type { WeatherPayload } from './shared'
import { timepageUrl } from './shared'

/**
 * Open Timepage and show weather for a specified day or week.
 *
 * @param payload Weather payload.
 * @returns Timepage open weather URL.
 * @example
 * openWeather({ day: 'today' })
 * // => 'timepage://open_weather?day=today'
 * @example
 * openWeather({ week: 'next' })
 * // => 'timepage://open_weather?week=next'
 *
 * @link https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/
 */
export function openWeather(payload: WeatherPayload) {
  return timepageUrl('open_weather', {
    ...('day' in payload ? { day: payload.day } : {}),
    ...('week' in payload ? { week: payload.week } : {}),
  })
}
