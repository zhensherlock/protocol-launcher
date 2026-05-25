import { bttUrl, type JsonObject, jsonParam, type SharedSecret } from './shared'

/**
 * Update trigger payload definition.
 */
type UpdateTrigger = SharedSecret & {
  /**
   * The UUID of the trigger to update.
   */
  uuid: string

  /**
   * A JSON object defining the properties to update.
   */
  json: JsonObject
}

/**
 * Update the configuration of a specified trigger.
 *
 * @param payload Trigger update payload.
 * @returns BetterTouchTool update_trigger URL.
 * @example
 * updateTrigger({ uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC', json: { BTTTouchBarButtonName: 'New Name2' } })
 * // => 'btt://update_trigger/?uuid=0E2F7963-E64C-403A-8591-C3725D4D9ADC&json=%7B%22BTTTouchBarButtonName%22%3A%22New%20Name2%22%7D'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#update_trigger
 */
export function updateTrigger(payload: UpdateTrigger) {
  const { uuid, json, sharedSecret } = payload

  return bttUrl('update_trigger', { uuid, json: jsonParam(json) }, sharedSecret)
}
