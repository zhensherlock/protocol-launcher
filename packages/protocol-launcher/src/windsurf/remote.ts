/**
 * Open remote definition.
 */
type OpenRemote = {
  /**
   * Remote type (Windsurf Remote kind).
   *
   * Determines which Windsurf Remote extension is used.
   *
   * - `ssh-remote`
   *    Uses **Remote - SSH** extension.
   *    Opens a folder on a remote Linux/macOS machine via SSH.
   *
   * - `wsl`
   *    Uses **Remote - WSL** extension.
   *    Opens a Linux distribution running inside Windows Subsystem for Linux.
   *
   * - `dev-container`
   *    Uses **Dev Containers** extension.
   *    Opens a development container defined by a Docker / devcontainer config.
   */
  type: 'ssh-remote' | 'wsl' | 'dev-container'
  /**
   * Remote host identifier.
   *
   * The meaning and format of this field depends on `type`.
   *
   * ### ssh-remote
   * - SSH connection target
   * - Can be:
   *   - `user@host:port`
   *   - SSH config alias defined in `~/.ssh/config`
   *
   * ### wsl
   * - WSL distribution name
   *
   * ### dev-container
   * - Dev container identifier
   * - Usually a container ID or workspace container name
   *
   * @example 'ubuntu@192.168.1.100:22'
   * @example 'root@my-server'
   * @example 'my-ssh-alias'
   * @example 'Ubuntu'
   * @example 'Ubuntu-22.04'
   * @example '2b7c3d9f0e3b'
   * @example 'my-project-container'
   */
  host: string

  /**
   * Remote path inside the remote environment.
   *
   * - For `ssh-remote` and `wsl`, this is a filesystem path
   * - For `dev-container`, this is the container's workspace path
   *
   * Defaults to `'/'`.
   *
   * @example '/code/my-project'
   */
  path: string

  /**
   * Whether to open the folder in a new window.
   *
   * Defaults to `false`.
   */
  openInNewWindow?: boolean
}

/**
 * Open remote in Windsurf.
 *
 * @param payload Open remote definition.
 * @returns Windsurf open remote URL.
 * @example
 * openRemote({
 *   type: 'ssh-remote',
 *   host: 'root@172.18.105.209:22',
 *   path: '/code/my-project',
 * })
 * // => 'windsurf://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project'
 */
export function openRemote(payload: OpenRemote) {
  const { type, host, path, openInNewWindow = false } = payload
  return `windsurf://vscode-remote/${type}+${host}${path}${openInNewWindow ? '?windowId=_blank' : ''}`
}
