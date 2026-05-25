import { bttUrl, type SharedSecret, type TriggerVariables } from './shared'

/**
 * Trigger named payload definition.
 */
type TriggerNamed = SharedSecret & {
  /**
   * The name of the named trigger to execute.
   */
  triggerName: string

  /**
   * Set to 1 to cancel any pending delayed execution of this trigger.
   */
  cancelDelayed?: 1

  /**
   * Additional parameters that BetterTouchTool sets as variables before executing the trigger.
   */
  variables?: TriggerVariables
}

/**
 * Trigger the specified named trigger.
 *
 * @param payload Named trigger payload.
 * @returns BetterTouchTool trigger_named URL.
 * @example
 * triggerNamed({ triggerName: 'TriggerName' })
 * // => 'btt://trigger_named/?trigger_name=TriggerName'
 * @example
 * triggerNamed({ triggerName: 'TriggerName', variables: { myVariable: 'someValue' } })
 * // => 'btt://trigger_named/?trigger_name=TriggerName&myVariable=someValue'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#trigger_named
 */
export function triggerNamed(payload: TriggerNamed) {
  const { triggerName, cancelDelayed, variables, sharedSecret } = payload

  return bttUrl(
    'trigger_named',
    {
      trigger_name: triggerName,
      ...(cancelDelayed ? { cancel_delayed: cancelDelayed } : {}),
      ...variables,
    },
    sharedSecret,
  )
}
