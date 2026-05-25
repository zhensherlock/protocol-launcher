/**
 * JSON import payload definition.
 */
type JsonImport = {
  /**
   * Base64-encoded JSON string describing the trigger(s) to import.
   */
  encodedJson: string

  /**
   * Use the documented uncompress path variant for compressed JSON.
   */
  uncompress?: true
}

/**
 * Import triggers directly via a base64-encoded JSON string in the URL.
 *
 * @param payload Base64 JSON payload.
 * @returns BetterTouchTool jsonimport URL.
 * @example
 * jsonImport({ encodedJson: 'BASE64_ENCODED_JSON_HERE' })
 * // => 'btt://jsonimport/BASE64_ENCODED_JSON_HERE'
 * @example
 * jsonImport({ encodedJson: 'BASE64_ENCODED_COMPRESSED_JSON_HERE', uncompress: true })
 * // => 'btt://jsonimport/uncompress/BASE64_ENCODED_COMPRESSED_JSON_HERE'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#jsonimport
 */
export function jsonImport(payload: JsonImport) {
  const { encodedJson, uncompress } = payload

  return `btt://jsonimport/${uncompress ? 'uncompress/' : ''}${encodedJson}`
}
