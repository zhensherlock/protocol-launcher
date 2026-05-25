import { bttUrl, type SharedSecret } from './shared'

/**
 * Set string variable payload definition.
 */
type SetStringVariable = SharedSecret & {
  /**
   * The name of the variable.
   */
  variableName: string

  /**
   * The string value to set.
   */
  to: string
}

/**
 * Set a string variable for the runtime of BetterTouchTool.
 *
 * @param payload Variable payload.
 * @returns BetterTouchTool set_string_variable URL.
 * @example
 * setStringVariable({ variableName: 'test', to: '12345' })
 * // => 'btt://set_string_variable/?variableName=test&to=12345'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#set_string_variable
 */
export function setStringVariable(payload: SetStringVariable) {
  const { variableName, to, sharedSecret } = payload

  return bttUrl('set_string_variable', { variableName, to }, sharedSecret)
}
