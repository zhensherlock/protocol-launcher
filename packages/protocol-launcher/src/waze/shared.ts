import { qs } from '@protocol-launcher/shared'
import type { WazeDeepLinkOptions, WazeProtocol } from './types'

export function wazeUrl(params: Record<string, unknown> = {}, protocol: WazeProtocol = 'https') {
  const base = protocol === 'waze' ? 'waze://' : 'https://waze.com/ul'

  return `${base}${qs(params)}`
}

export function sharedParams(payload: WazeDeepLinkOptions) {
  return {
    ...(payload.utmSource !== undefined ? { utm_source: payload.utmSource } : {}),
  }
}
