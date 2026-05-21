import type { NotePlanXSuccess } from './shared'
import { notePlanUrl, xSuccessParam } from './shared'

type RunPluginIdentifier =
  | {
      /**
       * Plugin name.
       */
      pluginName: string
      pluginID?: never
    }
  | {
      pluginName?: never
      /**
       * Plugin ID.
       */
      pluginID: string
    }

/**
 * RunPlugin action payload definition.
 */
type RunPlugin = NotePlanXSuccess &
  RunPluginIdentifier & {
    /**
     * Plugin command name without a leading slash.
     */
    command: string

    /**
     * Optional plugin argument, where the number maps to NotePlan's arg0, arg1, arg2, ... parameters.
     */
    [argument: `arg${number}`]: string | undefined
  }

/**
 * Run a NotePlan plugin command.
 *
 * @param payload RunPlugin action payload.
 * @returns NotePlan runPlugin URL.
 * @example
 * runPlugin({ pluginName: ' Note Statistics', command: 'nc' })
 * // => 'noteplan://x-callback-url/runPlugin?pluginName=%20Note%20Statistics&command=nc'
 * @link https://help.noteplan.co/article/49-x-callback-url-scheme#runPlugin
 */
export function runPlugin(payload: RunPlugin) {
  const { pluginName, pluginID, command, xSuccess, ...maybeArguments } = payload
  const pluginArguments: Record<string, string> = {}

  for (const [key, value] of Object.entries(maybeArguments).sort(
    ([leftKey], [rightKey]) => Number(leftKey.slice(3)) - Number(rightKey.slice(3)),
  )) {
    if (/^arg\d+$/.test(key) && value !== undefined) {
      pluginArguments[key] = value
    }
  }

  return notePlanUrl('runPlugin', {
    ...(pluginName ? { pluginName } : {}),
    ...(!pluginName && pluginID ? { pluginID } : {}),
    command,
    ...pluginArguments,
    ...xSuccessParam(xSuccess),
  })
}
