import { bttUrl, type JsonObject, jsonParam, type SharedSecret } from './shared'

/**
 * Add new trigger payload definition.
 */
type AddNewTrigger = SharedSecret & {
  /**
   * A JSON object describing the new trigger.
   */
  json: JsonObject

  /**
   * The UUID of the parent element to add the trigger to.
   */
  parentUuid?: string
}

/**
 * Add a new trigger to BetterTouchTool.
 *
 * @param payload New trigger payload.
 * @returns BetterTouchTool add_new_trigger URL.
 * @example
 * addNewTrigger({ json: { BTTTriggerClass: 'BTTTriggerTypeKeyboardShortcut' } })
 * // => 'btt://add_new_trigger/?json=%7B%22BTTTriggerClass%22%3A%22BTTTriggerTypeKeyboardShortcut%22%7D'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#add_new_trigger
 */
export function addNewTrigger(payload: AddNewTrigger) {
  const { json, parentUuid, sharedSecret } = payload

  return bttUrl(
    'add_new_trigger',
    {
      json: jsonParam(json),
      parent_uuid: parentUuid,
    },
    sharedSecret,
  )
}
