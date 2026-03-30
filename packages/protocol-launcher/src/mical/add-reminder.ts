import { qs } from '@protocol-launcher/shared'

/**
 * Add reminder command payload definition.
 */
type AddReminder = {
  /**
   * Title of the reminder.
   *
   * @example 'Buy groceries'
   */
  title: string
  /**
   * Notes (optional).
   */
  notes?: string
}

/**
 * Create reminder in miCal.
 *
 * @param payload Add reminder command payload.
 * @returns miCal addReminder URL.
 * @example
 * addReminder({ title: 'Buy groceries' })
 * // => 'miCal7://addReminder?title=Buy%20groceries'
 * @example
 * addReminder({ title: 'Buy groceries', notes: 'Milk, eggs, bread' })
 * // => 'miCal7://addReminder?title=Buy%20groceries&notes=Milk%2C%20eggs%2C%20bread'
 * @link http://micalapp.com/en/faqs#category_10
 */
export function addReminder(payload: AddReminder) {
  const { title, notes } = payload
  const params = qs({
    title,
    ...(notes ? { notes } : {}),
  })

  return `miCal7://addReminder${params}`
}
