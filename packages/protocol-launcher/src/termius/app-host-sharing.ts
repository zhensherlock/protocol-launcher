import { qs } from '@protocol-launcher/shared'

/**
 * App host sharing command payload definition.
 */
type AppHostSharing = {
  /**
   * The server label/name.
   *
   * @example 'Production Database'
   */
  label?: string
  /**
   * The server IP address or hostname.
   *
   * @example '192.168.1.100'
   */
  ip?: string
  /**
   * The server port.
   *
   * @example 22
   */
  port?: string | number
  /**
   * The username for connection.
   *
   * @example 'admin'
   */
  username?: string
  /**
   * The operating system type.
   *
   * @example 'linux'
   */
  os?: string
}

/**
 * Open host sharing screen in Termius to create a new server.
 *
 * @param payload App host sharing command payload.
 * @returns Termius app host sharing URL.
 * @example
 * appHostSharing({
 *   label: 'Production Database',
 *   ip: '192.168.1.100',
 *   port: 22,
 *   username: 'admin',
 * })
 * // => 'termius://app/host-sharing?label=Production%20Database&ip=192.168.1.100&port=22&username=admin'
 * @example
 * appHostSharing({})
 * // => 'termius://app/host-sharing'
 */
export function appHostSharing(payload: AppHostSharing = {}) {
  const { label, ip, port, username, os } = payload
  const params = qs({
    ...(label ? { label } : {}),
    ...(ip ? { ip } : {}),
    ...(port !== undefined ? { port } : {}),
    ...(username ? { username } : {}),
    ...(os ? { os } : {}),
  })

  return `termius://app/host-sharing${params}`
}
