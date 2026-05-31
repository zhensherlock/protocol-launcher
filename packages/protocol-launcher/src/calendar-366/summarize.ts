import { calendar366Url } from './shared'

/**
 * Open Calendar 366's summarize command.
 *
 * @returns Calendar 366 summarize URL.
 * @example
 * summarize()
 * // => 'cal366://summarize'
 * @link https://calendar366.com/help/index.html
 */
export function summarize() {
  return calendar366Url('summarize')
}
