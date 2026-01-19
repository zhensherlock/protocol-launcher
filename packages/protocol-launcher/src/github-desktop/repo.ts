/**
 * Open repo definition.
 *
 * @link https://github.com/desktop/desktop/blob/development/app/src/lib/parse-app-url.ts
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
   * Pull request number.
   */
  pr?: string

  /**
   * Branch of the repo.
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
 * @link https://github.com/desktop/desktop/blob/development/app/src/lib/parse-app-url.ts
 * @link https://github.com/desktop/desktop/issues/19965
 */
export function openRepo(payload: OpenRepo) {
  const { owner, repo, pr, branch } = payload
  const query = []
  if (pr) {
    query.push(`pr=${pr}`)
  }
  if (branch) {
    query.push(`branch=${branch}`)
  }
  return `x-github-client://openRepo/https://github.com/${owner}/${repo}${query.length > 0 ? `?${query.join('&')}` : ''}`
}
