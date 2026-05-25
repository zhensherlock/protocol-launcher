import { bttUrl, type SharedSecret } from './shared'

/**
 * Set number variable payload definition.
 */
type SetNumberVariable = SharedSecret & {
  /**
   * The name of the variable.
   */
  variableName: string

  /**
   * The number value to set.
   */
  to: number
}

/**
 * Set a number variable for the runtime of BetterTouchTool.
 *
 * @param payload Variable payload.
 * @returns BetterTouchTool set_number_variable URL.
 * @example
 * setNumberVariable({ variableName: 'test', to: 12345 })
 * // => 'btt://set_number_variable/?variableName=test&to=12345'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#set_number_variable
 */
export function setNumberVariable(payload: SetNumberVariable) {
  const { variableName, to, sharedSecret } = payload

  return bttUrl('set_number_variable', { variableName, to }, sharedSecret)
}
