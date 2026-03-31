import { qs } from '@protocol-launcher/shared'

/**
 * Add water payload definition.
 */
type AddWater = {
  /**
   * Amount of water in ml.
   */
  amount: number
  /**
   * Time to log water with format: dd/MM/yyyy'T'HH:mm.
   * Default is system current time.
   *
   * @example '22/01/2019T13:17'
   */
  time?: string
}

/**
 * Log water intake in WaterMinder.
 *
 * @param payload Add water payload.
 * @returns WaterMinder add-water URL.
 * @example
 * addWater({ amount: 100 })
 * // => 'waterminder://x-callback-url/add-water?amount=100'
 * @example
 * addWater({ amount: 250, time: '22/01/2019T13:17' })
 * // => 'waterminder://x-callback-url/add-water?amount=250&time=22%2F01%2F2019T13%3A17'
 * @link https://funnmedia.zendesk.com/hc/en-us/articles/360007745191-WaterMinder-X-Callback-URL-Support
 */
export function addWater(payload: AddWater) {
  const { amount, time } = payload
  const params = qs({
    amount,
    ...(time ? { time } : {}),
  })

  return `waterminder://x-callback-url/add-water${params}`
}
