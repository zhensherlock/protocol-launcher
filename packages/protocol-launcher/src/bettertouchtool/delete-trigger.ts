import { bttUrl, type SharedSecret } from './shared'

/**
 * Delete trigger payload definition.
 */
type DeleteTrigger = SharedSecret & {
  /**
   * The UUID of the trigger to delete.
   */
  uuid: string
}

/**
 * Delete a trigger from BetterTouchTool.
 *
 * @param payload Trigger UUID payload.
 * @returns BetterTouchTool delete_trigger URL.
 * @example
 * deleteTrigger({ uuid: '0E2F7963-E64C-403A-8591-C3725D4D9ADC' })
 * // => 'btt://delete_trigger/?uuid=0E2F7963-E64C-403A-8591-C3725D4D9ADC'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#delete_trigger
 */
export function deleteTrigger(payload: DeleteTrigger) {
  const { uuid, sharedSecret } = payload

  return bttUrl('delete_trigger', { uuid }, sharedSecret)
}
