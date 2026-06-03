import type { FulcrumEditRecordAction } from './shared'
import { editRecordActionParams, fulcrumWebActionUrl } from './shared'

/**
 * Create Fulcrum's documented web action redirect URL for editing a mobile record.
 *
 * @param payload Fulcrum edit-record web action payload.
 * @returns Fulcrum web action edit-record URL.
 * @example
 * editRecordAction({ recordId: 'xyz-123' })
 * // => 'https://web.fulcrumapp.com/action/#edit-record?record_id=xyz-123'
 * @link https://docs.fulcrumapp.com/docs/url-actions
 */
export function editRecordAction(payload: FulcrumEditRecordAction) {
  return fulcrumWebActionUrl('edit-record', editRecordActionParams(payload))
}
