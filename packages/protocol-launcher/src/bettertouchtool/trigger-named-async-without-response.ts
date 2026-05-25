import { bttUrl, type SharedSecret, type TriggerVariables } from './shared'

/**
 * Trigger named asynchronously payload definition.
 */
type TriggerNamedAsyncWithoutResponse = SharedSecret & {
  /**
   * The name of the named trigger to execute.
   */
  triggerName: string

  /**
   * Additional parameters that BetterTouchTool sets as variables before executing the trigger.
   */
  variables?: TriggerVariables
}

/**
 * Trigger the specified named trigger asynchronously without waiting for a response.
 *
 * @param payload Named trigger payload.
 * @returns BetterTouchTool trigger_named_async_without_response URL.
 * @example
 * triggerNamedAsyncWithoutResponse({ triggerName: 'TriggerName' })
 * // => 'btt://trigger_named_async_without_response/?trigger_name=TriggerName'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#trigger_named_async_without_response
 */
export function triggerNamedAsyncWithoutResponse(payload: TriggerNamedAsyncWithoutResponse) {
  const { triggerName, variables, sharedSecret } = payload

  return bttUrl(
    'trigger_named_async_without_response',
    {
      trigger_name: triggerName,
      ...variables,
    },
    sharedSecret,
  )
}
