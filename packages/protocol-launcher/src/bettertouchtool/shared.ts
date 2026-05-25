import { qs } from '@protocol-launcher/shared'

export type JsonObject = Record<string, unknown>

export type SharedSecret = {
  /**
   * Optional BetterTouchTool shared secret.
   */
  sharedSecret?: string
}

export type TriggerVariables = Record<string, string>

export function bttUrl(action: string, params: Record<string, unknown>, sharedSecret?: string) {
  return `btt://${action}/${qs({
    ...params,
    ...(sharedSecret ? { shared_secret: sharedSecret } : {}),
  })}`
}

export function jsonParam(json: JsonObject) {
  return JSON.stringify(json)
}
