import type { OkJsonNewPayload } from './shared'
import { okJsonNewUrl } from './shared'

/**
 * View a JSON string in OK JSON.
 *
 * @param payload OK JSON new JSON payload.
 * @returns OK JSON new URL.
 * @example
 * newJson({
 *   content: '{"hello":"world"}',
 * })
 * // => 'okjson://new?content=%7B%22hello%22%3A%22world%22%7D'
 * @link https://docs.okjson.app/url-schemes
 */
export function newJson(payload: OkJsonNewPayload) {
  return okJsonNewUrl(payload)
}
