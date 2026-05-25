import { bttUrl, type SharedSecret } from './shared'

/**
 * Cancel delayed named trigger execution payload definition.
 */
type CancelDelayedNamedTriggerExecution = SharedSecret & {
  /**
   * The name of the trigger whose delayed execution should be cancelled.
   */
  triggerName: string
}

/**
 * Cancel a pending delayed execution of a named trigger.
 *
 * @param payload Named trigger payload.
 * @returns BetterTouchTool cancel_delayed_named_trigger_execution URL.
 * @example
 * cancelDelayedNamedTriggerExecution({ triggerName: 'TriggerName' })
 * // => 'btt://cancel_delayed_named_trigger_execution/?trigger_name=TriggerName'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#cancel_delayed_named_trigger_execution
 */
export function cancelDelayedNamedTriggerExecution(payload: CancelDelayedNamedTriggerExecution) {
  const { triggerName, sharedSecret } = payload

  return bttUrl('cancel_delayed_named_trigger_execution', { trigger_name: triggerName }, sharedSecret)
}
