/**
 * Arguments for cloning a repository.
 */
type CloneProject = {
  /**
   * The URL of the remote repository. Supports both HTTPS and SSH.
   */
  url: string
}

/**
 * Clone a repository from a specified URL.
 *
 * @param payload Arguments for cloning a repository.
 * @returns Nova clone project URL.
 * @example
 * cloneProject({
 *   url: 'https://github.com/zhensherlock/protocol-launcher.git',
 * })
 * // => 'nova://clone?url=https://github.com/zhensherlock/protocol-launcher.git'
 * @link https://help.nova.app/projects/url-schema/#clone
 */
export function cloneProject(payload: CloneProject) {
  const { url } = payload
  return `nova://clone?url=${url}`
}
