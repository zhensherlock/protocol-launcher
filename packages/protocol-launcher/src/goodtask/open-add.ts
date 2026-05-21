import { goodTaskUrl } from './shared'

/**
 * Open the add screen in GoodTask.
 *
 * @returns GoodTask openadd URL.
 * @example
 * openAdd()
 * // => 'goodtask3://openadd'
 * @link https://goodtaskapp.com/url-scheme/
 */
export function openAdd() {
  return goodTaskUrl('openadd')
}
