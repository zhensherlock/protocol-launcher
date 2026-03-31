import { qs } from '@protocol-launcher/shared'

/**
 * SSH command payload definition.
 */
type SshCommand = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Remote server hostname (required).
   */
  server: string

  /**
   * Command to run on remote server (required).
   */
  cmd: string

  /**
   * Local directory to upload.
   *
   * @default Repository root
   */
  source?: string

  /**
   * Remote directory to download to.
   *
   * @default Remote home directory
   */
  remote?: string
}

/**
 * Run secure shell command on remote server.
 *
 * @param payload SSH command payload.
 * @returns Working Copy x-callback-url/ssh-command URL.
 * @example
 * sshCommand({
 *   key: '123ABC',
 *   server: 'remote.server.net',
 *   cmd: 'run tests',
 * })
 * // => 'working-copy://x-callback-url/ssh-command?key=123ABC&server=remote.server.net&cmd=run%20tests'
 * @example
 * sshCommand({
 *   key: '123ABC',
 *   server: 'remote.server.net',
 *   cmd: 'deploy',
 *   source: 'subdir',
 *   remote: 'dir',
 * })
 * // => 'working-copy://x-callback-url/ssh-command?key=123ABC&server=remote.server.net&cmd=deploy&source=subdir&remote=dir'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function sshCommand(payload: SshCommand) {
  const { key, server, cmd, source, remote } = payload
  const params = qs({
    key,
    server,
    cmd,
    ...(source ? { source } : {}),
    ...(remote ? { remote } : {}),
  })

  return `working-copy://x-callback-url/ssh-command${params}`
}
