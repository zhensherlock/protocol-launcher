import { okJsonActionUrl } from './shared'

/**
 * View a JSON string from the pasteboard in OK JSON.
 *
 * @returns OK JSON paste URL.
 * @example
 * paste()
 * // => 'okjson://paste'
 * @link https://docs.okjson.app/url-schemes
 */
export function paste() {
  return okJsonActionUrl('paste')
}
