import type { FulcrumNewRecordAction } from './shared'
import { fulcrumWebActionUrl, newRecordActionParams } from './shared'

/**
 * Create Fulcrum's documented web action redirect URL for a new mobile record.
 *
 * @param payload Fulcrum new-record web action payload.
 * @returns Fulcrum web action new-record URL.
 * @example
 * newRecordAction({ formId: '123-xyz' })
 * // => 'https://web.fulcrumapp.com/action/#new-record?form_id=123-xyz'
 * @link https://docs.fulcrumapp.com/docs/url-actions
 */
export function newRecordAction(payload: FulcrumNewRecordAction) {
  return fulcrumWebActionUrl('new-record', newRecordActionParams(payload))
}
