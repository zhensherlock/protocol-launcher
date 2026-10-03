import { timepageUrl } from './shared'

/**
 * Launch the Actions app from Timepage.
 *
 * @returns Timepage open-actions URL.
 * @example
 * openActions()
 * // => 'timepage://open_actions'
 * @link https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/
 */
export function openActions() {
  return timepageUrl('open_actions')
}
