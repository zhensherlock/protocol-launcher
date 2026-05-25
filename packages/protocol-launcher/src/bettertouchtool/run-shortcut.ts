import { bttUrl, type SharedSecret } from './shared'

/**
 * Run shortcut payload definition.
 */
type RunShortcut = SharedSecret & {
  /**
   * The name of the Apple Shortcuts shortcut to run.
   */
  shortcutName: string

  /**
   * Input to pass to the shortcut.
   */
  input?: string
}

/**
 * Run an Apple Shortcuts shortcut by name and wait for its result.
 *
 * @param payload Shortcut payload.
 * @returns BetterTouchTool run_shortcut URL.
 * @example
 * runShortcut({ shortcutName: 'MyShortcut', input: 'someInput' })
 * // => 'btt://run_shortcut/?shortcut_name=MyShortcut&input=someInput'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#run_shortcut
 */
export function runShortcut(payload: RunShortcut) {
  const { shortcutName, input, sharedSecret } = payload

  return bttUrl('run_shortcut', { shortcut_name: shortcutName, input }, sharedSecret)
}
