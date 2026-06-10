import {
  type TrueContextActionOptions,
  type TrueContextAnswers,
  type TrueContextOpenType,
  type TrueContextTaggedParameters,
  trueContextUrl,
} from './shared'

export type OpenPayload = TrueContextActionOptions &
  TrueContextTaggedParameters & {
    /**
     * Form or resource name. TrueContext matches partial strings.
     */
    name?: string
    /**
     * Location to open from. Defaults to `forms`.
     */
    type?: TrueContextOpenType
    /**
     * Empty form identifier.
     */
    formID?: string | number
    /**
     * Specific form version identifier.
     */
    formIterationID?: string | number
    /**
     * Form submission identifier for Inbox or Group Inbox records.
     */
    dataRecordID?: string | number
    /**
     * Client-side draft identifier returned by an earlier x-success callback.
     */
    clientDataRecordID?: string
    /**
     * Resource Library item identifier.
     */
    resourceID?: string | number
    /**
     * Multi-Language Form language code, serialized as `_lang`.
     */
    lang?: string
    /**
     * Question unique IDs and answer values to dispatch into the opened form.
     */
    answers?: TrueContextAnswers
  }

/**
 * Open a TrueContext form, record, or resource through the documented `open` action.
 *
 * @param payload TrueContext open payload.
 * @returns TrueContext open URL.
 * @example
 * open({
 *   name: 'Universal Work Order',
 *   answers: {
 *     'Job - Type': 'Warranty',
 *     'Job - Work Order #': 1234567,
 *   },
 * })
 * // => 'truecontext://x-callback-url/open?name=Universal%20Work%20Order&Job%20-%20Type=Warranty&Job%20-%20Work%20Order%20%23=1234567'
 * @link https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppCookbook/AppToApp_RecipeToOpenAndDispatch.htm
 * @link https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppCallbackActionsAdditionalParameters.htm
 */
export function open(payload: OpenPayload = {}) {
  return trueContextUrl('open', payload)
}
