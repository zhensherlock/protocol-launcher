/**
 * Clone project definition.
 */
type CloneProject = {
  /**
   * URL of the project to clone.
   */
  url: string
}

/**
 * Clone project in Xcode
 *
 * @param payload Clone project definition.
 * @returns Xcode clone project URL.
 * @example
 * cloneProject({
 *   url: 'https://github.com/zhensherlock/protocol-launcher.git',
 * })
 * // => 'xcode://clone?repo=https://github.com/zhensherlock/protocol-launcher.git'
 */
export function cloneProject(payload: CloneProject) {
  const { url } = payload
  return `xcode://clone?repo=${url}`
}
