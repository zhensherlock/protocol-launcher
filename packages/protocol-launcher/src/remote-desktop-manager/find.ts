import { type RemoteDesktopManagerPayload, remoteDesktopManagerUrl } from './shared'

/**
 * Remote Desktop Manager find action payload definition.
 */
export type FindPayload = RemoteDesktopManagerPayload

/**
 * Build a Remote Desktop Manager `find` URL.
 *
 * @param payload Remote Desktop Manager find payload.
 * @returns Remote Desktop Manager find URL.
 * @example
 * find({ host: 'server.example.com' })
 * // => 'rdm://find?Host=server.example.com'
 * @link https://docs.devolutions.net/rdm/kb/knowledge-base/protocol-handler/
 */
export function find(payload: FindPayload) {
  return remoteDesktopManagerUrl('find', payload)
}
