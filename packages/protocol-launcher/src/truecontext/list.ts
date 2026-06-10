import {
  type TrueContextActionOptions,
  type TrueContextListType,
  type TrueContextTaggedParameters,
  trueContextUrl,
} from './shared'

export type ListPayload = TrueContextActionOptions &
  TrueContextTaggedParameters & {
    /**
     * TrueContext area to display. Defaults to `forms`.
     */
    type?: TrueContextListType
  }

/**
 * Display a specific TrueContext Mobile App area or a list matched by tags.
 *
 * @param payload TrueContext list payload.
 * @returns TrueContext list URL.
 * @example
 * list({ type: 'inbox' })
 * // => 'truecontext://x-callback-url/list?type=inbox'
 * @link https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppCallbackActionsAdditionalParameters.htm
 */
export function list(payload: ListPayload = {}) {
  return trueContextUrl('list', payload)
}
