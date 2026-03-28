/**
 * Connect to server payload definition.
 */
type Connect = {
  /**
   * Server IP address.
   *
   * @example '192.0.2.1'
   */
  ip: string
  /**
   * Server port (optional).
   *
   * @example 27015
   */
  port?: number
  /**
   * Server password (optional).
   *
   * @example 'secret'
   */
  password?: string
}

/**
 * Connects the user to the server specified by the IP.
 *
 * @param payload Connect payload.
 * @returns Steam connect URL.
 * @example
 * connect({ ip: '192.0.2.1', port: 27015 })
 * // => 'steam://connect/192.0.2.1:27015'
 * @example
 * connect({ ip: '192.0.2.1' })
 * // => 'steam://connect/192.0.2.1'
 * @example
 * connect({ ip: '192.0.2.1', port: 27015, password: 'secret' })
 * // => 'steam://connect/192.0.2.1:27015/secret'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function connect(payload: Connect) {
  const { ip, port, password } = payload
  let url = `steam://connect/${ip}`
  if (port) {
    url += `:${port}`
  }
  if (password) {
    url += `/${password}`
  }
  return url
}
