import { qs } from '@protocol-launcher/shared'

/**
 * Open Working Copy at specific screen payload definition.
 */
type OpenScreen = {
  /**
   * Repository name or remote URL.
   *
   * @example 'my project'
   * @example 'https://github.com/libgit2/libgit2'
   */
  repo?: string

  /**
   * File or directory path relative to repository root.
   *
   * @example 'README.md'
   */
  path?: string

  /**
   * Commit hash or prefix.
   *
   * @example '23f387'
   */
  commit?: string

  /**
   * Branch name.
   *
   * @example 'develop'
   */
  branch?: string

  /**
   * Display mode.
   *
   * - 'content': Show file content or directory contents
   * - 'changes': Show Changes tab (files only)
   * - 'status': Show Status tab
   * - 'preview': Show Content tab in preview mode
   */
  mode?: 'content' | 'changes' | 'status' | 'preview'

  /**
   * Line number to jump to in text file.
   */
  line?: number

  /**
   * Error message to display.
   *
   * @example 'red text'
   */
  error?: string

  /**
   * Information message to display.
   *
   * @example 'blue text'
   */
  message?: string
}

/**
 * Open Working Copy at specific screen.
 *
 * @param payload Open screen definition.
 * @returns Working Copy open screen URL.
 * @example
 * openScreen({
 *   repo: 'my project',
 *   path: 'README.md',
 *   mode: 'content',
 * })
 * // => 'working-copy://open?repo=my%20project&path=README.md&mode=content'
 * @example
 * openScreen({
 *   repo: 'https://github.com/libgit2/libgit2',
 *   branch: 'develop',
 * })
 * // => 'working-copy://open?repo=https%3A%2F%2Fgithub.com%2Flibgit2%2Flibgit2&branch=develop'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function openScreen(payload: OpenScreen = {}) {
  const { repo, path, commit, branch, mode, line, error, message } = payload
  const params = qs({
    ...(repo ? { repo } : {}),
    ...(path ? { path } : {}),
    ...(commit ? { commit } : {}),
    ...(branch ? { branch } : {}),
    ...(mode ? { mode } : {}),
    ...(line ? { line: String(line) } : {}),
    ...(error ? { error } : {}),
    ...(message ? { message } : {}),
  })

  return `working-copy://open${params}`
}
