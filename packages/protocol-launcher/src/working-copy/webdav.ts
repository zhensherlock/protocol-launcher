import { qs } from '@protocol-launcher/shared'

/**
 * WebDAV command payload definition.
 */
type Webdav = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * WebDAV server command.
   *
   * - 'start': Start WebDAV server (default)
   * - 'stop': Stop WebDAV server
   */
  cmd?: 'start' | 'stop'
}

/**
 * Start or stop the internal WebDAV server.
 *
 * @param payload WebDAV command payload.
 * @returns Working Copy x-callback-url/webdav URL.
 * @example
 * webdav({
 *   key: '123ABC',
 *   cmd: 'start',
 * })
 * // => 'working-copy://x-callback-url/webdav?key=123ABC&cmd=start'
 * @example
 * webdav({
 *   key: '123ABC',
 *   cmd: 'stop',
 * })
 * // => 'working-copy://x-callback-url/webdav?key=123ABC&cmd=stop'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function webdav(payload: Webdav) {
  const { key, cmd } = payload
  const params = qs({
    key,
    ...(cmd ? { cmd } : {}),
  })

  return `working-copy://x-callback-url/webdav${params}`
}
