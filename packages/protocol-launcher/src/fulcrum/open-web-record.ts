import type { FulcrumWebRecord } from './shared'
import { fulcrumPathSegment, fulcrumWebUrl } from './shared'

/**
 * Open an existing record in the Fulcrum web app.
 *
 * @param payload Fulcrum web record payload.
 * @returns Fulcrum web record URL.
 * @example
 * openWebRecord({ recordId: '11fb2a54-5158-4848-8695-c405c54525e4' })
 * // => 'https://web.fulcrumapp.com/records/11fb2a54-5158-4848-8695-c405c54525e4'
 * @link https://docs.fulcrumapp.com/docs/url-actions
 */
export function openWebRecord(payload: FulcrumWebRecord) {
  const { recordId } = payload

  return fulcrumWebUrl(`records/${fulcrumPathSegment(recordId)}`)
}
