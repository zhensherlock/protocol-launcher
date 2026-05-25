import { bttUrl, type SharedSecret } from './shared'

/**
 * Run shortcut asynchronously payload definition.
 */
type RunShortcutAsyncWithoutResponse = SharedSecret & {
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
 * Run an Apple Shortcuts shortcut asynchronously without waiting for a response.
 *
 * @param payload Shortcut payload.
 * @returns BetterTouchTool run_shortcut_async_without_response URL.
 * @example
 * runShortcutAsyncWithoutResponse({ shortcutName: 'MyShortcut', input: 'someInput' })
 * // => 'btt://run_shortcut_async_without_response/?shortcut_name=MyShortcut&input=someInput'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#run_shortcut_async_without_response
 */
export function runShortcutAsyncWithoutResponse(payload: RunShortcutAsyncWithoutResponse) {
  const { shortcutName, input, sharedSecret } = payload

  return bttUrl('run_shortcut_async_without_response', { shortcut_name: shortcutName, input }, sharedSecret)
}
