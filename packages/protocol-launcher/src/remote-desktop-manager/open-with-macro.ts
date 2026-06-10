import { type RemoteDesktopManagerPayload, remoteDesktopManagerUrl } from './shared'

/**
 * Remote Desktop Manager OpenWithMacro action payload definition.
 */
export type OpenWithMacroPayload = RemoteDesktopManagerPayload

/**
 * Build a Remote Desktop Manager `OpenWithMacro` URL.
 *
 * @param payload Remote Desktop Manager OpenWithMacro payload.
 * @returns Remote Desktop Manager OpenWithMacro URL.
 * @example
 * openWithMacro({ session: 'f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1' })
 * // => 'rdm://OpenWithMacro?Session=f368d57a-d6ac-4b84-a79e-6e4f6cb3d2e1'
 * @link https://docs.devolutions.net/rdm/kb/knowledge-base/protocol-handler/
 */
export function openWithMacro(payload: OpenWithMacroPayload) {
  return remoteDesktopManagerUrl('OpenWithMacro', payload)
}
