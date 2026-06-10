import { type RemoteDesktopManagerSelectPayload, remoteDesktopManagerUrl } from './shared'

/**
 * Remote Desktop Manager select action payload definition.
 */
export type SelectPayload = RemoteDesktopManagerSelectPayload

/**
 * Build a Remote Desktop Manager `select` URL.
 *
 * @param payload Remote Desktop Manager select payload.
 * @returns Remote Desktop Manager select URL.
 * @example
 * select({ session: 'f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1', tabpage: 'Overview' })
 * // => 'rdm://select?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1&Tabpage=Overview'
 * @link https://docs.devolutions.net/rdm/kb/knowledge-base/protocol-handler/
 */
export function select(payload: SelectPayload) {
  return remoteDesktopManagerUrl('select', payload)
}
