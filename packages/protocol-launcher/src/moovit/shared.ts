import { qs } from '@protocol-launcher/shared'
import type { MoovitFallbackLinkPayload } from './types'

type MoovitAction = 'nearby' | 'directions'
type MoovitFallbackApp = 'id498477945' | 'com.tranzmate'

export function moovitUrl(action: MoovitAction, params: Record<string, unknown>) {
  return `moovit://${action}${qs(params)}`
}

export function moovitFallbackLink(app: MoovitFallbackApp, payload: MoovitFallbackLinkPayload) {
  return `https://app.appsflyer.com/${app}${qs({
    pid: 'DL',
    c: payload.c,
    af_dp: payload.af_dp,
  })}`
}
