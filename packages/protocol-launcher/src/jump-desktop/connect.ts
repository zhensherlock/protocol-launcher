import { qs } from '@protocol-launcher/shared'

/**
 * Jump Desktop connect parameters.
 */
type ConnectOptions = {
  /**
   * IP address or hostname of the host to connect to (required).
   *
   * @example '192.168.1.1'
   * @example 'server.company.com'
   */
  host: string

  /**
   * Protocol to use for connection.
   *
   * - `rdp`: Remote Desktop Protocol (default)
   * - `vnc`: Virtual Network Computing
   * - `fluid`: Jump Desktop's Fluid remote desktop
   */
  protocol?: 'rdp' | 'vnc' | 'fluid'

  /**
   * Port to connect to.
   *
   * Defaults to 3389 for rdp, 5900 for vnc.
   */
  port?: number

  /**
   * Password to use for automatic login.
   */
  password?: string

  /**
   * Color depth.
   *
   * - `8`: 8-bit color (256 colors)
   * - `16`: 16-bit color
   */
  depth?: 8 | 16

  /**
   * Username to use for automatic login (RDP only).
   *
   * Note: Must be capitalized as 'Username' for newer versions of Jump Desktop.
   */
  username?: string

  /**
   * Domain name to use for automatic login (RDP only).
   */
  domain?: string

  /**
   * Width of the display (RDP only).
   */
  width?: number

  /**
   * Height of the display (RDP only).
   */
  height?: number

  /**
   * Connect to the console session on Windows server machines (RDP only).
   */
  console?: 'yes' | 'no'

  /**
   * Additional custom parameters.
   *
   * Any setting from the Jump JSON file format can be added here.
   *
   * @see https://support.jumpdesktop.com/hc/en-us/articles/216423963-General-Jump-Desktop-file-formats
   */
  [key: string]: unknown
}

/**
 * Connect to a remote server using Jump Desktop.
 *
 * @param options Connect options.
 * @returns Jump Desktop connect URL.
 * @example
 * connect({ host: '192.168.1.100' })
 * // => 'jump://?host=192.168.1.100'
 *
 * @example
 * connect({ host: 'server.mydomain.com', username: 'testuser', password: 'pass' })
 * // => 'jump://?host=server.mydomain.com&password=pass&Username=testuser'
 *
 * @example
 * connect({ host: '192.168.1.100', protocol: 'vnc', port: 5903 })
 * // => 'jump://?host=192.168.1.100&protocol=vnc&port=5903'
 *
 * @link https://support.jumpdesktop.com/hc/en-us/articles/216423723-General-Starting-Jump-Desktop-from-other-applications
 */
export function connect(options: ConnectOptions) {
  const { host, protocol, port, password, depth, username, domain, width, height, console, ...rest } = options

  const params = qs({
    host,
    ...(protocol ? { protocol } : {}),
    ...(port ? { port } : {}),
    ...(password ? { password } : {}),
    ...(depth ? { depth } : {}),
    ...(username ? { username } : {}),
    ...(domain ? { domain } : {}),
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...(console ? { console } : {}),
    ...rest,
  })

  return `jump://${params}`
}
