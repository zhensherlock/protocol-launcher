import { qs } from '@protocol-launcher/shared'

export type UrlEventParams = Record<string, string>

export function hammerspoonUrl(eventName: string, params: UrlEventParams = {}) {
  return `hammerspoon://${eventName}${qs(params)}`
}
