import { qs } from '@protocol-launcher/shared'

/**
 * Add command payload definition.
 */
type Add = {
  /**
   * Event as natural language input.
   *
   * @example 'Lunch tomorrow at 12'
   */
  input: string
  /**
   * Notes (optional).
   */
  notes?: string
}

/**
 * Create event in miCal.
 *
 * @param payload Add command payload.
 * @returns miCal add URL.
 * @example
 * add({ input: 'Lunch tomorrow at 12' })
 * // => 'miCal7://add?input=Lunch%20tomorrow%20at%2012'
 * @example
 * add({ input: 'Lunch tomorrow at 12', notes: 'Meeting with team' })
 * // => 'miCal7://add?input=Lunch%20tomorrow%20at%2012&notes=Meeting%20with%20team'
 * @link http://micalapp.com/en/faqs#category_10
 */
export function add(payload: Add) {
  const { input, notes } = payload
  const params = qs({
    input,
    ...(notes ? { notes } : {}),
  })

  return `miCal7://add${params}`
}
