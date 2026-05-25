import { bttUrl, type SharedSecret } from './shared'

/**
 * Execute assigned actions payload definition.
 */
type ExecuteAssignedActionsForTrigger = SharedSecret & {
  /**
   * The UUID of the trigger whose actions should be executed.
   */
  uuid: string
}

/**
 * Execute all assigned actions for a trigger identified by UUID.
 *
 * @param payload Trigger UUID payload.
 * @returns BetterTouchTool execute_assigned_actions_for_trigger URL.
 * @example
 * executeAssignedActionsForTrigger({ uuid: 'C40D3AE2-2F4E-49B1-A00C-F7E4C3632F07' })
 * // => 'btt://execute_assigned_actions_for_trigger/?uuid=C40D3AE2-2F4E-49B1-A00C-F7E4C3632F07'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#execute_assigned_actions_for_trigger
 */
export function executeAssignedActionsForTrigger(payload: ExecuteAssignedActionsForTrigger) {
  const { uuid, sharedSecret } = payload

  return bttUrl('execute_assigned_actions_for_trigger', { uuid }, sharedSecret)
}
