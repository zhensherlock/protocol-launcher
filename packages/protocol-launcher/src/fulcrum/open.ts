import type { FulcrumOpen } from './shared'
import { fulcrumMobileUrl } from './shared'

/**
 * Launch the Fulcrum mobile app.
 *
 * @param payload Fulcrum open payload.
 * @returns Fulcrum mobile open URL.
 * @example
 * open()
 * // => 'fulcrumapp://open'
 * @example
 * open({ formId: 'c55adab9-916d-46e9-98aa-7a2388a77b24' })
 * // => 'fulcrumapp://open?form_id=c55adab9-916d-46e9-98aa-7a2388a77b24'
 * @link https://docs.fulcrumapp.com/docs/url-actions
 */
export function open(payload: FulcrumOpen = {}) {
  const { formId } = payload

  return fulcrumMobileUrl('open', { form_id: formId })
}
