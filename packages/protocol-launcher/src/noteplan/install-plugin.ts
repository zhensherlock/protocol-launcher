import type { NotePlanXSuccess } from './shared'
import { notePlanUrl, xSuccessParam } from './shared'

/**
 * InstallPlugin action payload definition.
 */
type InstallPlugin = NotePlanXSuccess & {
  /**
   * Plugin ID.
   */
  pluginID: string
}

/**
 * Install a NotePlan plugin by plugin ID.
 *
 * @param payload InstallPlugin action payload.
 * @returns NotePlan installPlugin URL.
 * @example
 * installPlugin({ pluginID: 'dwertheimer.Favorites' })
 * // => 'noteplan://x-callback-url/installPlugin?pluginID=dwertheimer.Favorites'
 * @link https://help.noteplan.co/article/49-x-callback-url-scheme#installPlugin
 */
export function installPlugin(payload: InstallPlugin) {
  const { pluginID, xSuccess } = payload

  return notePlanUrl('installPlugin', {
    pluginID,
    ...xSuccessParam(xSuccess),
  })
}
