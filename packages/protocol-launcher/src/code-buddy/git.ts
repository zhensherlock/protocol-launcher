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
 * clone project in CodeBuddy.
 *
 * @param payload Git clone definition.
 * @returns CodeBuddy git clone URL.
 * @example
 * cloneProject({
 *   repo: 'https://github.com/zhensherlock/protocol-launcher',
 * })
 * // => 'codebuddy://vscode.git/clone?url=https://github.com/zhensherlock/protocol-launcher'
 */
export function cloneProject(payload: CloneProject) {
  const { repo } = payload
  return `codebuddy://vscode.git/clone?url=${encodeURIComponent(repo)}`
}
