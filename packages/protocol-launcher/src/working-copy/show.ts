import { qs } from '@protocol-launcher/shared'

/**
 * Show command payload definition.
 */
type Show = {
  /**
   * Remote repository URL to show.
   * If repository exists, it will be opened. Otherwise, cloning will be initiated.
   *
   * @example 'https://github.com/git/git.git'
   */
  remote: string
}

/**
 * Show a remote repository inside Working Copy, cloning as needed.
 *
 * @param payload Show command payload.
 * @returns Working Copy show URL.
 * @example
 * show({
 *   remote: 'https://github.com/git/git.git',
 * })
 * // => 'working-copy://show?remote=https%3A%2F%2Fgithub.com%2Fgit%2Fgit.git'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function show(payload: Show) {
  const { remote } = payload
  const params = qs({ remote })

  return `working-copy://show${params}`
}
