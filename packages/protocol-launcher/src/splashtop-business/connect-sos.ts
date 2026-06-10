import type { SplashtopBusinessAccountPayload } from './shared'
import { splashtopBusinessUrl } from './shared'

export interface ConnectSosPayload extends SplashtopBusinessAccountPayload {
  /**
   * SOS session code.
   */
  sos: string
}

/**
 * Launch Splashtop Business with an SOS session code.
 *
 * @param payload Splashtop Business account and SOS session code.
 * @returns Splashtop Business SOS connection URI.
 * @example
 * connectSos({
 *   account: 'url.launch@splashtop',
 *   sos: '123456789',
 * })
 * // => 'st-business://com.splashtop.business?account=url.launch@splashtop&sos=123456789'
 * @link https://support-splashtopbusiness.splashtop.com/hc/en-us/articles/36936249788955-Comparison-of-Legacy-and-New-UI-in-Splashtop-SOS
 */
export function connectSos(payload: ConnectSosPayload) {
  return splashtopBusinessUrl(payload.account, 'sos', payload.sos)
}
