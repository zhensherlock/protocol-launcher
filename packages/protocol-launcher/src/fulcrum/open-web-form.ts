import type { FulcrumOpenWebForm } from './shared'
import { fulcrumPathSegment, fulcrumWebUrl } from './shared'

/**
 * Open a form to view or edit records in the Fulcrum web app.
 *
 * @param payload Fulcrum web form payload.
 * @returns Fulcrum web form URL.
 * @example
 * openWebForm({ formId: 'c55adab9-916d-46e9-98aa-7a2388a77b24', mode: 'split' })
 * // => 'https://web.fulcrumapp.com/dash/c55adab9-916d-46e9-98aa-7a2388a77b24?mode=split'
 * @link https://docs.fulcrumapp.com/docs/url-actions
 */
export function openWebForm(payload: FulcrumOpenWebForm) {
  const { formId, mode } = payload

  return fulcrumWebUrl(`dash/${fulcrumPathSegment(formId)}`, { mode })
}
