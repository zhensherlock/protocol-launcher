import { bttUrl, type SharedSecret } from './shared'

/**
 * Set persistent number variable payload definition.
 */
type SetPersistentNumberVariable = SharedSecret & {
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
 * Set a number variable that persists over BetterTouchTool relaunches.
 *
 * @param payload Variable payload.
 * @returns BetterTouchTool set_persistent_number_variable URL.
 * @example
 * setPersistentNumberVariable({ variableName: 'test', to: 12345 })
 * // => 'btt://set_persistent_number_variable/?variableName=test&to=12345'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#set_persistent_number_variable
 */
export function setPersistentNumberVariable(payload: SetPersistentNumberVariable) {
  const { variableName, to, sharedSecret } = payload

  return bttUrl('set_persistent_number_variable', { variableName, to }, sharedSecret)
}
