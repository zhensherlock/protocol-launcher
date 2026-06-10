import { type TrueContextActionOptions, trueContextUrl } from './shared'

/**
 * TrueContext refresh action payload definition.
 */
export type RefreshPayload = TrueContextActionOptions

/**
 * Launch the TrueContext Mobile App and download new form versions, data sources, and dispatches.
 *
 * @param payload TrueContext refresh payload.
 * @returns TrueContext refresh URL.
 * @example
 * refresh()
 * // => 'truecontext://x-callback-url/refresh'
 * @link https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppCallbackActions.htm
 */
export function refresh(payload: RefreshPayload = {}) {
  return trueContextUrl('refresh', payload)
}
