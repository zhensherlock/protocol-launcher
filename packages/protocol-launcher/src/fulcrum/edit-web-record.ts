import type { FulcrumWebRecord } from './shared'
import { fulcrumPathSegment, fulcrumWebUrl } from './shared'

/**
 * Edit an existing record in the Fulcrum web app.
 *
 * @param payload Fulcrum web record payload.
 * @returns Fulcrum web edit-record URL.
 * @example
 * editWebRecord({ recordId: '11fb2a54-5158-4848-8695-c405c54525e4' })
 * // => 'https://web.fulcrumapp.com/records/11fb2a54-5158-4848-8695-c405c54525e4?mode=edit'
 * @link https://docs.fulcrumapp.com/docs/url-actions
 */
export function editWebRecord(payload: FulcrumWebRecord) {
  const { recordId } = payload

  return fulcrumWebUrl(`records/${fulcrumPathSegment(recordId)}`, { mode: 'edit' })
}
