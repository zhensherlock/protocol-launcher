import { fulcrumWebUrl } from './shared'

/**
 * Open the Fulcrum web app page for creating a new record.
 *
 * @returns Fulcrum web new-record URL.
 * @example
 * createWebRecord()
 * // => 'https://web.fulcrumapp.com/records/new'
 * @link https://docs.fulcrumapp.com/docs/url-actions
 */
export function createWebRecord() {
  return fulcrumWebUrl('records/new')
}
