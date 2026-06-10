import { type RemoteDesktopManagerPayload, remoteDesktopManagerUrl } from './shared'

/**
 * Remote Desktop Manager view action payload definition.
 */
export type ViewPayload = RemoteDesktopManagerPayload

/**
 * Build a Remote Desktop Manager `view` URL for viewing the password of the specified entry.
 *
 * @param payload Remote Desktop Manager view payload.
 * @returns Remote Desktop Manager view URL.
 * @example
 * view({ session: 'f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1' })
 * // => 'rdm://view?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1'
 * @link https://docs.devolutions.net/rdm/kb/knowledge-base/protocol-handler/
 */
export function view(payload: ViewPayload) {
  return remoteDesktopManagerUrl('view', payload)
}
