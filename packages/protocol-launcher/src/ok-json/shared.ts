import { qs } from '@protocol-launcher/shared'

/**
 * OK JSON new JSON payload definition.
 */
export type OkJsonNewPayload = {
  /**
   * JSON string to view in OK JSON. The helper percent-encodes this value into the official `content` query parameter.
   */
  content: string
}

/**
 * OK JSON run script payload definition.
 */
export type OkJsonRunScriptPayload = {
  /**
   * Custom script file name without the `.js` extension.
   *
   * @example 'copy-minified-json'
   */
  scriptFileNameWithoutJsExtension: string
}

export function okJsonActionUrl(action: 'paste' | 'history' | 'scripts-panel') {
  return `okjson://${action}`
}

export function okJsonNewUrl(payload: OkJsonNewPayload) {
  return `okjson://new${qs({ content: payload.content })}`
}

export function okJsonScriptUrl(payload: OkJsonRunScriptPayload) {
  return `okjson://script/${payload.scriptFileNameWithoutJsExtension}`
}
