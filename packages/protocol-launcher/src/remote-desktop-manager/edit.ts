import { type RemoteDesktopManagerPayload, remoteDesktopManagerUrl } from './shared'

/**
 * Remote Desktop Manager edit action payload definition.
 */
export type EditPayload = RemoteDesktopManagerPayload

/**
 * Build a Remote Desktop Manager `edit` URL.
 *
 * @param payload Remote Desktop Manager edit payload.
 * @returns Remote Desktop Manager edit URL.
 * @example
 * edit({ session: 'f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1' })
 * // => 'rdm://edit?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1'
 * @link https://docs.devolutions.net/rdm/kb/knowledge-base/protocol-handler/
 */
export function edit(payload: EditPayload) {
  return remoteDesktopManagerUrl('edit', payload)
}
