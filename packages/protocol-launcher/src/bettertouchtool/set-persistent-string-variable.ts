import { bttUrl, type SharedSecret } from './shared'

/**
 * Set persistent string variable payload definition.
 */
type SetPersistentStringVariable = SharedSecret & {
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
 * Set a string variable that persists over BetterTouchTool relaunches.
 *
 * @param payload Variable payload.
 * @returns BetterTouchTool set_persistent_string_variable URL.
 * @example
 * setPersistentStringVariable({ variableName: 'test', to: '12345' })
 * // => 'btt://set_persistent_string_variable/?variableName=test&to=12345'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#set_persistent_string_variable
 */
export function setPersistentStringVariable(payload: SetPersistentStringVariable) {
  const { variableName, to, sharedSecret } = payload

  return bttUrl('set_persistent_string_variable', { variableName, to }, sharedSecret)
}
