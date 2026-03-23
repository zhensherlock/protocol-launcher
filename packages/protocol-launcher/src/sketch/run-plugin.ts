import { qs } from '@protocol-launcher/shared'

/**
 * Run plugin payload definition.
 */
type RunPlugin = {
  /**
   * Plugin identifier.
   *
   * @example 'com.example.sketch.messenger'
   */
  pluginId: string
  /**
   * Command identifier.
   *
   * @example 'message.show'
   */
  commandId: string
  /**
   * Query parameters to pass to the plugin.
   */
  query?: Record<string, string>
}

/**
 * Run a Sketch plugin command.
 *
 * @param payload Run plugin definition.
 * @returns Sketch run plugin URL.
 * @example
 * runPlugin({
 *   pluginId: 'com.example.sketch.messenger',
 *   commandId: 'message.show',
 * })
 * // => 'sketch://plugin/com.example.sketch.messenger/message.show'
 * @example
 * runPlugin({
 *   pluginId: 'com.example.sketch.messenger',
 *   commandId: 'message.show',
 *   query: { msg: 'Hello World' },
 * })
 * // => 'sketch://plugin/com.example.sketch.messenger/message.show?msg=Hello%20World'
 * @link https://developer.sketch.com/app
 */
export function runPlugin(payload: RunPlugin) {
  const { pluginId, commandId, query } = payload
  const params = qs(query || {})

  return `sketch://plugin/${pluginId}/${commandId}${params}`
}
