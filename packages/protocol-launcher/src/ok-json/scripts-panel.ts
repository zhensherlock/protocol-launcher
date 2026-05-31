import { okJsonActionUrl } from './shared'

/**
 * Show the OK JSON scripts panel window.
 *
 * @returns OK JSON scripts panel URL.
 * @example
 * scriptsPanel()
 * // => 'okjson://scripts-panel'
 * @link https://docs.okjson.app/url-schemes
 */
export function scriptsPanel() {
  return okJsonActionUrl('scripts-panel')
}
