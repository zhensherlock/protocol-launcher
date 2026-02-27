/**
 * Git clone definition.
 */
type CloneProject = {
  /**
   * Git repository URL.
   *
   * @example 'https://github.com/zhensherlock/protocol-launcher'
   */
  repo: string
}

/**
 * Git commit definition.
 */
type OpenGitCommit = {
  /**
   * Commit SHA.
   *
   * @example '739420c'
   */
  sha: string

  /**
   * Local repository path.
   *
   * @example '/Users/dev/Documents/protocol-launcher'
   */
  path: string
}

/**
 * clone project in Zed.
 *
 * @param payload Git clone definition.
 * @returns Zed git clone URL.
 * @example
 * cloneProject({
 *   repo: 'https://github.com/zhensherlock/protocol-launcher',
 * })
 * // => 'zed://git/clone?repo=https://github.com/zhensherlock/protocol-launcher'
 * @link https://github.com/zed-industries/zed/blob/main/crates/zed/src/zed/open_listener.rs#L133
 */
export function cloneProject(payload: CloneProject) {
  const { repo } = payload
  return `zed://git/clone?repo=${encodeURIComponent(repo)}`
}

/**
 * Open git commit in Zed.
 *
 * @param payload Git commit definition.
 * @returns Zed git commit URL.
 * @example
 * openGitCommit({
 *   sha: '739420c',
 *   path: '/Users/dev/Documents/protocol-launcher',
 * })
 * // => 'zed://git/commit/739420c?repo=/Users/dev/Documents/protocol-launcher'
 * @link https://github.com/zed-industries/zed/blob/main/crates/zed/src/zed/open_listener.rs#L135
 */
export function openGitCommit(payload: OpenGitCommit) {
  const { sha, path } = payload
  return `zed://git/commit/${sha}?repo=${path}`
}
