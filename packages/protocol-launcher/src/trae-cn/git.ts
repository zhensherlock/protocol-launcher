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
 * clone project in Trae China.
 *
 * @param payload Git clone definition.
 * @returns Trae git clone URL.
 * @example
 * cloneProject({
 *   repo: 'https://github.com/zhensherlock/protocol-launcher',
 * })
 * // => 'trae-cn://vscode.git/clone?url=https://github.com/zhensherlock/protocol-launcher'
 */
export function cloneProject(payload: CloneProject) {
  const { repo } = payload
  return `trae-cn://vscode.git/clone?url=${encodeURIComponent(repo)}`
}
