import { bttUrl, type JsonObject, jsonParam, type SharedSecret } from './shared'

/**
 * Trigger action payload definition.
 */
type TriggerAction = SharedSecret & {
  /**
   * A JSON object describing the action to trigger.
   */
  json: JsonObject
}

/**
 * Trigger one of BetterTouchTool's predefined actions.
 *
 * @param payload Action JSON payload.
 * @returns BetterTouchTool trigger_action URL.
 * @example
 * triggerAction({ json: { BTTPredefinedActionType: 153, BTTPredefinedActionName: 'Move Mouse To Position' } })
 * // => 'btt://trigger_action/?json=%7B%22BTTPredefinedActionType%22%3A153%2C%22BTTPredefinedActionName%22%3A%22Move%20Mouse%20To%20Position%22%7D'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#trigger_action
 */
export function triggerAction(payload: TriggerAction) {
  const { json, sharedSecret } = payload

  return bttUrl('trigger_action', { json: jsonParam(json) }, sharedSecret)
}
