/**
 * Open repo definition.
 */
type OpenRepo = {
  /**
   * Owner of the repo.
   */
  owner: string

  /**
   * Name of the repo.
   */
  repo: string

  /**
   * Branch of the repo.
   *
   * Defaults to `main`.
   */
  branch?: string
}

/**
 * Open repo in GitHub Desktop
 *
 * @param payload Open repo definition.
 * @returns GitHub Desktop open repo URL.
 * @example
 * openRepo({
 *   owner: 'zhensherlock',
 *   repo: 'protocol-launcher',
 *   branch: 'main',
 * })
 * // => 'x-github-client://openRepo/https://github.com/zhensherlock/protocol-launcher?branch=main'
 */
export function openRepo(payload: OpenRepo) {
  const { owner, repo, branch = 'main' } = payload
  return `x-github-client://openRepo/https://github.com/${owner}/${repo}?branch=${branch}`
}
