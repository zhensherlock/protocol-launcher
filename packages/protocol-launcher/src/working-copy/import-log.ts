import { qs } from '@protocol-launcher/shared'

/**
 * Import log command payload definition.
 */
type ImportLog = {
  /**
   * Log lines (mandatory).
   *
   * @example 'first line\nsecond line'
   */
  lines: string

  /**
   * Repository name or remote URL the log refers to.
   */
  repo?: string

  /**
   * Unix timestamp indicating when the log was recorded.
   */
  timestamp?: number

  /**
   * Log kind.
   *
   * - 'import': Default import log
   * - 'bitrise': Bitrise CI log
   * - 'circleci': CircleCI log
   * - 'jenkins': Jenkins log
   * - 'buddy': Buddybuild log
   * - 'fetch': Fetch operation log
   * - 'push': Push operation log
   * - 'pull': Pull operation log
   * - 'clone': Clone operation log
   */
  kind?: 'import' | 'bitrise' | 'circleci' | 'jenkins' | 'buddy' | 'fetch' | 'push' | 'pull' | 'clone'
}

/**
 * Import and show log files in Working Copy.
 *
 * @param payload Import log command payload.
 * @returns Working Copy import-log URL.
 * @example
 * importLog({
 *   lines: 'first line\nsecond line',
 * })
 * // => 'working-copy://import-log?lines=first%20line%0Asecond%20line'
 * @example
 * importLog({
 *   lines: 'Build failed',
 *   repo: 'my project',
 *   kind: 'bitrise',
 * })
 * // => 'working-copy://import-log?lines=Build%20failed&repo=my%20project&kind=bitrise'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function importLog(payload: ImportLog) {
  const { lines, repo, timestamp, kind } = payload
  const params = qs({
    lines,
    ...(repo ? { repo } : {}),
    ...(timestamp ? { timestamp: String(timestamp) } : {}),
    ...(kind ? { kind } : {}),
  })

  return `working-copy://import-log${params}`
}
