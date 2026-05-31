import type { OkJsonRunScriptPayload } from './shared'
import { okJsonScriptUrl } from './shared'

/**
 * Run a custom OK JSON script by file name without the `.js` extension.
 *
 * @param payload OK JSON run script payload.
 * @returns OK JSON script URL.
 * @example
 * runScript({
 *   scriptFileNameWithoutJsExtension: 'copy-minified-json',
 * })
 * // => 'okjson://script/copy-minified-json'
 * @link https://docs.okjson.app/url-schemes
 */
export function runScript(payload: OkJsonRunScriptPayload) {
  return okJsonScriptUrl(payload)
}
