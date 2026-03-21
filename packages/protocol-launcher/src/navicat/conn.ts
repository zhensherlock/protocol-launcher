import { qs } from '@protocol-launcher/shared'

/**
 * Protocol types for Navicat connections.
 */
export type ConnProtocol =
  | 'biworkspace'
  | 'mariadb'
  | 'modelworkspace'
  | 'mongodb'
  | 'mssql'
  | 'mysql'
  | 'ora'
  | 'pgsql'
  | 'redis'
  | 'sqlite'
  | string

/**
 * Connection payload definition.
 */
type Conn = {
  /**
   * Connection protocol type.
   * Supports predefined types or custom string values.
   *
   * @example 'mysql'
   * @example 'customProtocol'
   */
  protocol: ConnProtocol
  /**
   * Host address.
   *
   * @example 'localhost'
   */
  host: string
  /**
   * Port number.
   *
   * @example 3306
   */
  port: number
  /**
   * Username.
   *
   * @example 'root'
   */
  username: string
  /**
   * Connection name.
   *
   * @example 'My Database'
   */
  name: string
}

/**
 * Open a new connection in Navicat.
 *
 * @param payload Connection payload.
 * @returns Navicat connection URL.
 * @example
 * conn({
 *   protocol: 'mysql',
 *   host: 'localhost',
 *   port: 3306,
 *   username: 'root',
 *   name: 'My Database',
 * })
 * // => 'navicat://conn.mysql?Conn.Host=localhost&Conn.Port=3306&Conn.Username=root&Conn.Name=My%20Database'
 */
export function conn(payload: Conn) {
  const { protocol, host, port, username, name } = payload
  const params = qs({
    'Conn.Host': host,
    'Conn.Port': port,
    'Conn.Username': username,
    'Conn.Name': name,
  })

  return `navicat://conn.${protocol}${params}`
}
