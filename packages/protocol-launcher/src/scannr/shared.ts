import { qs } from '@protocol-launcher/shared'

/**
 * Scannr ID scan launch payload.
 */
export type ScanIdPayload = {
  /**
   * iOS callback URL scheme registered by the calling app.
   *
   * @example 'foo'
   */
  callbackScheme?: string
}

export function scannrUrl(params: Record<string, unknown> = {}) {
  return `scannr://${qs(params)}`
}
