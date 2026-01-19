/**
 * Open file definition.
 *
 * @link https://github.com/desktop/desktop/blob/development/app/src/lib/parse-app-url.ts
 */
type OpenFile = {
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

  /**
   * Path of the file.
   */
  path: string
}

/**
 * Open file in GitHub Desktop
 *
 * @param payload Open file definition.
 * @returns GitHub Desktop open file URL.
 * @example
 * openFile({
 *   owner: 'zhensherlock',
 *   repo: 'protocol-launcher',
 *   branch: 'main',
 *   path: 'packages/shared/src/index.ts',
 * })
 * // => 'x-github-client://openRepo/https://github.com/zhensherlock/protocol-launcher?branch=main&filepath=packages/shared/src/index.ts'
 * @link https://github.com/desktop/desktop/blob/development/app/src/lib/parse-app-url.ts
 * @link https://github.com/desktop/desktop/issues/19965
 */
export function openFile(payload: OpenFile) {
  const { owner, repo, pr, branch, path } = payload
  const query = []
  if (pr) {
    query.push(`pr=${pr}`)
  }
  if (branch) {
    query.push(`branch=${branch}`)
  }
  query.push(`filepath=${path}`)
  return `x-github-client://openRepo/https://github.com/${owner}/${repo}?${query.join('&')}`
}
