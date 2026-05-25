import { bttUrl, type SharedSecret } from './shared'

/**
 * Refresh widget payload definition.
 */
type RefreshWidget = SharedSecret & {
  /**
   * The UUID of the widget to refresh.
   */
  uuid: string
}

/**
 * Execute all scripts assigned to a script widget and update its contents.
 *
 * @param payload Widget UUID payload.
 * @returns BetterTouchTool refresh_widget URL.
 * @example
 * refreshWidget({ uuid: 'C40D3AE2-2F4E-49B1-A00C-F7E4C3632F07' })
 * // => 'btt://refresh_widget/?uuid=C40D3AE2-2F4E-49B1-A00C-F7E4C3632F07'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#refresh_widget
 */
export function refreshWidget(payload: RefreshWidget) {
  const { uuid, sharedSecret } = payload

  return bttUrl('refresh_widget', { uuid }, sharedSecret)
}
