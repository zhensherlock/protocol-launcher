import { type DashPluginSearchPayload, dashPluginSearchUrl } from './shared'

export type PluginSearchPayload = DashPluginSearchPayload

/**
 * Build the documented `dash-plugin://keys={keywords}&query={query}` plugin URL.
 *
 * @param payload Dash plugin search payload.
 * @returns Dash plugin search URL.
 * @example
 * pluginSearch({ keys: 'python,django', query: 'string' })
 * // => 'dash-plugin://keys=python,django&query=string'
 * @example
 * pluginSearch({ keys: 'python,django' })
 * // => 'dash-plugin://keys=python,django'
 * @link https://kapeli.com/dash_plugins
 */
export function pluginSearch(payload: PluginSearchPayload) {
  return dashPluginSearchUrl(payload)
}
