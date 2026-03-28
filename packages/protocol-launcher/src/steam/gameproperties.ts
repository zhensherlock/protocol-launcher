/**
 * Game properties payload definition.
 */
type GameProperties = {
  /**
   * Application ID to show properties for.
   *
   * @example 730
   */
  id: string | number
}

/**
 * Opens the properties for the specified game.
 *
 * @param payload Game properties payload.
 * @returns Steam game properties URL.
 * @example
 * gameProperties({ id: 730 })
 * // => 'steam://gameproperties/730'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function gameProperties(payload: GameProperties) {
  const { id } = payload
  return `steam://gameproperties/${id}`
}
