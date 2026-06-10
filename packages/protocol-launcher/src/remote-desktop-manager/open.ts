import { type RemoteDesktopManagerOpenPayload, remoteDesktopManagerUrl } from './shared'

/**
 * Remote Desktop Manager open action payload definition.
 */
export type OpenPayload = RemoteDesktopManagerOpenPayload

/**
 * Build a Remote Desktop Manager `open` URL.
 *
 * @param payload Remote Desktop Manager open payload.
 * @returns Remote Desktop Manager open URL.
 * @example
 * open({ filter: 'RDP', tabpage: 'Dashboard' })
 * // => 'rdm://open?Filter=RDP&Tabpage=Dashboard'
 * @link https://docs.devolutions.net/rdm/kb/knowledge-base/protocol-handler/
 */
export function open(payload: OpenPayload) {
  return remoteDesktopManagerUrl('open', payload)
}
