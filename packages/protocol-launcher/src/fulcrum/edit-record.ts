import type { FulcrumEditRecord } from './shared'
import { editRecordParams, fulcrumMobileUrl } from './shared'

/**
 * Edit an existing record in the Fulcrum mobile app.
 *
 * @param payload Fulcrum edit record payload.
 * @returns Fulcrum mobile edit-record URL.
 * @example
 * editRecord({
 *   recordId: '11fb2a54-5158-4848-8695-c405c54525e4',
 *   status: 'incomplete',
 *   attributes: { sq_footage: 2300, name: 'SNI' },
 * })
 * // => 'fulcrumapp://edit-record?record_id=11fb2a54-5158-4848-8695-c405c54525e4&status=incomplete&sq_footage=2300&name=SNI'
 * @link https://docs.fulcrumapp.com/docs/url-actions
 */
export function editRecord(payload: FulcrumEditRecord) {
  return fulcrumMobileUrl('edit-record', editRecordParams(payload))
}
