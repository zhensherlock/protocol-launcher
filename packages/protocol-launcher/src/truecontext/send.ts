import {
  type TrueContextActionOptions,
  type TrueContextAnswers,
  type TrueContextSendType,
  type TrueContextTaggedParameters,
  trueContextUrl,
} from './shared'

type SendCommonPayload = TrueContextActionOptions &
  TrueContextTaggedParameters & {
    /**
     * Location of the form to send.
     */
    type: TrueContextSendType
    /**
     * Form name. TrueContext matches partial strings.
     */
    name?: string
    /**
     * Form identifier.
     */
    formID?: string | number
    /**
     * Specific form version identifier.
     */
    formIterationID?: string | number
    /**
     * Form submission identifier for Inbox records.
     */
    dataRecordID?: string | number
    /**
     * Client-side draft identifier returned by an earlier x-success callback.
     */
    clientDataRecordID?: string
    /**
     * Multi-Language Form language code, serialized as `_lang`.
     */
    lang?: string
    /**
     * Question unique IDs and answer values to populate before sending.
     */
    answers?: TrueContextAnswers
  }

type SendIdentifier =
  | { name: string }
  | { tag: string }
  | { tagList: readonly string[] }
  | { formID: string | number }
  | { formIterationID: string | number }
  | { dataRecordID: string | number }
  | { clientDataRecordID: string }

export type SendPayload = SendCommonPayload & SendIdentifier

/**
 * Open, populate, and send a form from the TrueContext Mobile App.
 *
 * @param payload TrueContext send payload.
 * @returns TrueContext send URL.
 * @example
 * send({
 *   type: 'forms',
 *   formID: 99999999,
 *   answers: { ServiceType: 'Warranty' },
 * })
 * // => 'truecontext://x-callback-url/send?type=forms&formID=99999999&ServiceType=Warranty'
 * @link https://docs.truecontext.com/1374411/Content/Features/h3AppToAppForCentral/AppToAppTechnicalDetails/AppToAppCallbackActionsAdditionalParameters.htm
 */
export function send(payload: SendPayload) {
  return trueContextUrl('send', payload)
}
