import { type TrueContextActionOptions, trueContextUrl } from './shared'

/**
 * TrueContext launch action payload definition.
 */
export type LaunchPayload = TrueContextActionOptions

/**
 * Launch the TrueContext Mobile App through the documented App-to-App `launch` action.
 *
 * @param payload TrueContext launch payload.
 * @returns TrueContext launch URL.
 * @example
 * launch()
 * // => 'truecontext://x-callback-url/launch'
 * @link https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppCallbackActions.htm
 */
export function launch(payload: LaunchPayload = {}) {
  return trueContextUrl('launch', payload)
}
