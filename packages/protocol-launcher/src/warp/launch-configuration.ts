import type { WarpSchemePayload } from './shared'
import { warpUrl } from './shared'

/**
 * Open Launch Configuration payload definition.
 */
type LaunchConfiguration = WarpSchemePayload & {
  /**
   * Launch Configuration path.
   *
   * @example 'launch_configuration_path'
   */
  path: string
}

/**
 * Open a Warp Launch Configuration.
 *
 * @param payload Open Launch Configuration payload.
 * @returns Warp Launch Configuration URL.
 * @example
 * launchConfiguration({
 *   path: 'launch_configuration_path',
 * })
 * // => 'warp://launch/launch_configuration_path'
 * @link https://docs.warp.dev/terminal/more-features/uri-scheme
 */
export function launchConfiguration(payload: LaunchConfiguration) {
  const { path, scheme = 'warp' } = payload

  return warpUrl(`launch/${path}`, {}, scheme)
}
