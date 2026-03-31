import { qs } from '@protocol-launcher/shared'

/**
 * Add caffeine payload definition.
 */
type AddCaffeine = {
  /**
   * Amount of caffeine in mg.
   */
  amount: number
  /**
   * Time to log caffeine with format: dd/MM/yyyy'T'HH:mm.
   * Default is system current time.
   *
   * @example '09/04/2021T13:17'
   */
  time?: string
}

/**
 * Log caffeine intake in WaterMinder.
 *
 * @param payload Add caffeine payload.
 * @returns WaterMinder add-caffeine URL.
 * @example
 * addCaffeine({ amount: 115 })
 * // => 'waterminder://x-callback-url/add-caffeine?amount=115'
 * @example
 * addCaffeine({ amount: 115, time: '09/04/2021T13:17' })
 * // => 'waterminder://x-callback-url/add-caffeine?amount=115&time=09%2F04%2F2021T13%3A17'
 * @link https://funnmedia.zendesk.com/hc/en-us/articles/360007745191-WaterMinder-X-Callback-URL-Support
 */
export function addCaffeine(payload: AddCaffeine) {
  const { amount, time } = payload
  const params = qs({
    amount,
    ...(time ? { time } : {}),
  })

  return `waterminder://x-callback-url/add-caffeine${params}`
}
