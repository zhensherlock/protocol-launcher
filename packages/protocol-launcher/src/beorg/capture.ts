import { qs } from '@protocol-launcher/shared'

/**
 * Capture (add new item) command payload definition.
 */
type Capture = {
  /**
   * The item headline.
   *
   * @example 'Shopping List'
   */
  title?: string
  /**
   * Notes to add to the item.
   *
   * @example 'Buy eggs'
   */
  notes?: string
  /**
   * Schedule the item using a date in the format yyyy-MM-dd.
   *
   * @example '2018-09-18'
   */
  scheduled?: string
  /**
   * Set the item deadline using a date in the format yyyy-MM-dd.
   *
   * @example '2018-09-18'
   */
  deadline?: string
  /**
   * The name of the file, without an extension, to add the item to.
   *
   * @example 'journal'
   */
  file?: string
  /**
   * Name of a template to apply.
   *
   * @example 'Daily Review'
   */
  template?: string
  /**
   * Whether or not the user can edit the item before it is created.
   *
   * @example true
   */
  edit?: boolean
}

/**
 * Add a new item to Beorg (capture).
 *
 * @param payload Capture command payload.
 * @returns Beorg capture URL.
 * @example
 * capture({ title: 'New task', notes: 'Buy eggs', scheduled: '2017-10-03', file: 'shopping' })
 * // => 'beorg://x-callback-url/capture?title=New%20task&notes=Buy%20eggs&scheduled=2017-10-03&file=shopping'
 * @example
 * capture({})
 * // => 'beorg://x-callback-url/capture'
 * @link https://www.beorgapp.com/manual/#url-scheme
 */
export function capture(payload: Capture = {}) {
  const { title, notes, scheduled, deadline, file, template, edit } = payload
  const params = qs({
    ...(title ? { title } : {}),
    ...(notes ? { notes } : {}),
    ...(scheduled ? { scheduled } : {}),
    ...(deadline ? { deadline } : {}),
    ...(file ? { file } : {}),
    ...(template ? { template } : {}),
    ...(edit !== undefined ? { edit: String(edit) } : {}),
  })

  return `beorg://x-callback-url/capture${params}`
}
