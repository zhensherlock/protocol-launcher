/**
 * Open file definition.
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
   * Branch of the repo.
   *
   * Defaults to `main`.
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
 */
export function openFile(payload: OpenFile) {
  const { owner, repo, branch = 'main', path } = payload
  return `x-github-client://openRepo/https://github.com/${owner}/${repo}?branch=${branch}&filepath=${path}`
}
