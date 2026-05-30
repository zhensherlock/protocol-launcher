import type { WarpSchemePayload } from './shared'
import { warpUrl } from './shared'

/**
 * Open Tab Config payload definition.
 */
type TabConfig = WarpSchemePayload & {
  /**
   * Tab Config name. Warp matches this against the file stem of the saved `.toml`.
   *
   * @example 'my_tab'
   * @example 'my_tab.toml'
   */
  name: string

  /**
   * Open the Tab Config in a new window by appending the official `new_window=true` query parameter.
   */
  newWindow?: boolean
}

/**
 * Open a saved Warp Tab Config.
 *
 * @param payload Open Tab Config payload.
 * @returns Warp Tab Config URL.
 * @example
 * tabConfig({
 *   name: 'my_tab',
 * })
 * // => 'warp://tab_config/my_tab'
 * @example
 * tabConfig({
 *   name: 'my_tab',
 *   newWindow: true,
 * })
 * // => 'warp://tab_config/my_tab?new_window=true'
 * @link https://docs.warp.dev/terminal/more-features/uri-scheme
 */
export function tabConfig(payload: TabConfig) {
  const { name, newWindow, scheme = 'warp' } = payload

  return warpUrl(`tab_config/${name}`, newWindow ? { new_window: true } : {}, scheme)
}
