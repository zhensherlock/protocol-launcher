import { qs } from '@protocol-launcher/shared'

/**
 * Drink type identifiers supported by WaterMinder.
 */
export type DrinkType =
  | 'water'
  | 'carbonated_water'
  | 'coconut_water'
  | 'tea'
  | 'coffee'
  | 'juice'
  | 'sports_drink'
  | 'energy_drink'
  | 'protein_shake'
  | 'milk'
  | 'skim_milk'
  | 'soup'
  | 'hot_chocolate'
  | 'smoothie'
  | 'soda'
  | 'beer'
  | 'wine'
  | 'liquor'

/**
 * Add other drink payload definition.
 */
type AddOther = {
  /**
   * Amount of drink in ml.
   */
  amount: number
  /**
   * Drink type identifier.
   */
  type: DrinkType
  /**
   * Time to log drink with format: dd/MM/yyyy'T'HH:mm.
   * Default is system current time.
   *
   * @example '22/01/2019T13:17'
   */
  time?: string
}

/**
 * Log other drink intake in WaterMinder.
 *
 * @param payload Add other drink payload.
 * @returns WaterMinder add-other URL.
 * @example
 * addOther({ amount: 250, type: 'carbonated_water' })
 * // => 'waterminder://x-callback-url/add-other?amount=250&type=carbonated_water'
 * @example
 * addOther({ amount: 200, type: 'coffee', time: '09/04/2021T13:17' })
 * // => 'waterminder://x-callback-url/add-other?amount=200&type=coffee&time=09%2F04%2F2021T13%3A17'
 * @link https://funnmedia.zendesk.com/hc/en-us/articles/360007745191-WaterMinder-X-Callback-URL-Support
 */
export function addOther(payload: AddOther) {
  const { amount, type, time } = payload
  const params = qs({
    amount,
    type,
    ...(time ? { time } : {}),
  })

  return `waterminder://x-callback-url/add-other${params}`
}
