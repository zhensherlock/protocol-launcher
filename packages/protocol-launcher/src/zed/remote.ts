/**
 * Open remote definition.
 */
type OpenRemote = {
  /**
   * SSH connection target.
   * Can be:
   * - `user@host:port`
   * - SSH config alias defined in `~/.ssh/config`
   *
   * @example 'root@192.168.1.100:22'
   * @example 'my-ssh-alias'
   */
  host: string

  /**
   * Remote path inside the remote environment.
   *
   * Defaults to `'/'`.
   *
   * @example '/code/my-project'
   */
  path?: string
}

/**
 * Open remote in Zed via SSH.
 *
 * @param payload Open remote definition.
 * @returns Zed open remote URL.
 * @example
 * openRemote({
 *   host: 'root@172.18.105.209:22',
 *   path: '/code/my-project',
 * })
 * // => 'zed://ssh/root@172.18.105.209:22/code/my-project'
 * @link https://github.com/zed-industries/zed/blob/main/crates/zed/src/zed/open_listener.rs#L106
 */
export function openRemote(payload: OpenRemote) {
  const { host, path = '/' } = payload
  return `zed://ssh/${host}${path}`
}
