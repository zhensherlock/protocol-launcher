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
 * clone project in VS Code Insiders.
 *
 * @param payload Git clone definition.
 * @returns VS Code git clone URL.
 * @example
 * cloneProject({
 *   repo: 'https://github.com/zhensherlock/protocol-launcher',
 * })
 * // => 'vscode-insiders://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Fzhensherlock%2Fprotocol-launcher'
 */
export function cloneProject(payload: CloneProject) {
  const { repo } = payload
  return `vscode-insiders://vscode.git/clone?url=${encodeURIComponent(repo)}`
}
