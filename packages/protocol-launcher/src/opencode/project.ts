/**
 * Open project definition.
 */
type OpenProject = {
  /**
   * Folder path.
   */
  path: string
}

/**
 * Open project in OpenCode
 *
 * @param payload Open project definition.
 * @returns OpenCode open project URL.
 * @example
 * openProject({
 *   path: '/Users/dev/project',
 * })
 * // => 'opencode://open-project?directory=/Users/dev/project'
 * @link https://github.com/anomalyco/opencode/blob/dev/packages/app/src/pages/layout/deep-links.ts
 */
export function openProject(payload: OpenProject) {
  const { path } = payload
  return `opencode://open-project?directory=${path}`
}
