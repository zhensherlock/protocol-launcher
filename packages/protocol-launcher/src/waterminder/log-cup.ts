import { qs } from '@protocol-launcher/shared'

/**
 * Log cup payload definition.
 */
type LogCup = {
  /**
   * Amount of drink in ml.
   */
  amount: number
  /**
   * Pre-defined cup name in WaterMinder.
   */
  cupName: string
  /**
   * Time to log with format: dd/MM/yyyy'T'HH:mm.
   * Default is system current time.
   *
   * @example '22/01/2019T13:17'
   */
  time?: string
}

/**
 * Log entry using pre-defined cup name in WaterMinder.
 *
 * @param payload Log cup payload.
 * @returns WaterMinder log-cup URL.
 * @example
 * logCup({ amount: 250, cupName: 'my mug' })
 * // => 'waterminder://x-callback-url/log-cup?amount=250&cupName=my%20mug'
 * @example
 * logCup({ amount: 300, cupName: 'Morning Glass', time: '22/01/2019T08:00' })
 * // => 'waterminder://x-callback-url/log-cup?amount=300&cupName=Morning%20Glass&time=22%2F01%2F2019T08%3A00'
 * @link https://funnmedia.zendesk.com/hc/en-us/articles/360007745191-WaterMinder-X-Callback-URL-Support
 */
export function logCup(payload: LogCup) {
  const { amount, cupName, time } = payload
  const params = qs({
    amount,
    cupName,
    ...(time ? { time } : {}),
  })

  return `waterminder://x-callback-url/log-cup${params}`
}
