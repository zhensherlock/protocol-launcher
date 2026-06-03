import type { FulcrumNewRecord } from './shared'
import { fulcrumMobileUrl, newRecordParams } from './shared'

/**
 * Create a new record in the Fulcrum mobile app.
 *
 * @param payload Fulcrum new record payload.
 * @returns Fulcrum mobile new-record URL.
 * @example
 * newRecord({
 *   formId: 'c55adab9-916d-46e9-98aa-7a2388a77b24',
 *   attributes: { number_of_floors: 3, sq_footage: 2300 },
 * })
 * // => 'fulcrumapp://new-record?form_id=c55adab9-916d-46e9-98aa-7a2388a77b24&number_of_floors=3&sq_footage=2300'
 * @link https://docs.fulcrumapp.com/docs/url-actions
 */
export function newRecord(payload: FulcrumNewRecord) {
  return fulcrumMobileUrl('new-record', newRecordParams(payload))
}
