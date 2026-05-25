/**
 * Open repository definition.
 */
type OpenRepo = {
  /**
   * Remote repository URL.
   *
   * @example 'git@example.beanstalkapp.com:/project.git'
   */
  remoteRepositoryUrl: string
}

/**
 * Generate Tower's documented custom URL scheme for a remote repository.
 *
 * @param payload Open repository definition.
 * @returns Tower open repository URL.
 * @example
 * openRepo({
 *   remoteRepositoryUrl: 'git@example.beanstalkapp.com:/project.git',
 * })
 * // => 'gittower://openRepo/git@example.beanstalkapp.com:/project.git'
 * @link https://www.git-tower.com/help/guides/integration/url-scheme/mac
 */
export function openRepo(payload: OpenRepo) {
  const { remoteRepositoryUrl } = payload
  return `gittower://openRepo/${remoteRepositoryUrl}`
}
