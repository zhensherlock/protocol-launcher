import { qs } from '@protocol-launcher/shared'

/**
 * Show command payload definition.
 */
type Show = {
  /**
   * The view to display.
   *
   * @example 'weekagenda'
   */
  view: 'dashboard' | 'day' | 'week' | 'weekagenda' | 'month' | 'year' | 'list'
}

/**
 * Open miCal with predefined view.
 *
 * @param payload Show command payload.
 * @returns miCal show URL.
 * @example
 * show({ view: 'weekagenda' })
 * // => 'miCal7://show?view=weekagenda'
 * @example
 * show({ view: 'month' })
 * // => 'miCal7://show?view=month'
 * @link http://micalapp.com/en/faqs#category_10
 */
export function show(payload: Show) {
  const { view } = payload
  const params = qs({ view })

  return `miCal7://show${params}`
}
