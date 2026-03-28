/**
 * Controller config payload definition.
 */
type ControllerConfig = {
  /**
   * Application ID to configure controller for.
   *
   * @example 730
   */
  id: string | number
}

/**
 * Opens the controller configurator (Steam Input) for the specified game.
 *
 * @param payload Controller config payload.
 * @returns Steam controller config URL.
 * @example
 * controllerConfig({ id: 730 })
 * // => 'steam://controllerconfig/730'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function controllerConfig(payload: ControllerConfig) {
  const { id } = payload
  return `steam://controllerconfig/${id}`
}
