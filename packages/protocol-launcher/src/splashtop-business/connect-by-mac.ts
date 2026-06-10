import type { SplashtopBusinessAccountPayload } from './shared'
import { splashtopBusinessUrl } from './shared'

export interface ConnectByMacPayload extends SplashtopBusinessAccountPayload {
  /**
   * MAC address of the remote/host computer.
   */
  mac: string
}

/**
 * Launch Splashtop Business and connect to a remote computer by MAC address.
 *
 * @param payload Splashtop Business account and remote computer MAC address.
 * @returns Splashtop Business remote connection URI.
 * @example
 * connectByMac({
 *   account: 'email@example.com',
 *   mac: 'C04A001C72EC',
 * })
 * // => 'st-business://com.splashtop.business?account=email@example.com&mac=C04A001C72EC'
 * @link https://support-splashtopbusiness.splashtop.com/hc/en-us/articles/115001482866-How-to-create-a-desktop-shortcut-to-always-connect-to-a-specific-computer
 */
export function connectByMac(payload: ConnectByMacPayload) {
  return splashtopBusinessUrl(payload.account, 'mac', payload.mac)
}
