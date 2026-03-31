import { qs } from '@protocol-launcher/shared'

/**
 * Chain command item definition.
 */
type ChainCommand = {
  /**
   * Command name.
   */
  command: string

  /**
   * Command-specific parameters.
   */
  params?: Record<string, string | number | boolean>
}

/**
 * Chain command payload definition.
 */
type Chain = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Repository name or remote URL.
   * Shared by all commands in the chain.
   */
  repo?: string

  /**
   * Success callback URL for the last command.
   */
  xSuccess?: string

  /**
   * Error callback URL.
   */
  xError?: string

  /**
   * List of commands to execute in order.
   */
  commands: ChainCommand[]
}

/**
 * Chain multiple x-callback-url commands together.
 *
 * @param payload Chain command payload.
 * @returns Working Copy x-callback-url/chain URL.
 * @example
 * chain({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   commands: [
 *     { command: 'commit', params: { message: 'fix' } },
 *     { command: 'push' },
 *   ],
 * })
 * // => 'working-copy://x-callback-url/chain?key=123ABC&repo=my%20repo&command=commit&message=fix&command=push'
 * @example
 * chain({
 *   key: '123ABC',
 *   repo: '*',
 *   commands: [
 *     { command: 'pull' },
 *     { command: 'push' },
 *   ],
 * })
 * // => 'working-copy://x-callback-url/chain?key=123ABC&repo=%2A&command=pull&command=push'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function chain(payload: Chain) {
  const { key, repo, xSuccess, xError, commands } = payload

  // Build query string manually to support repeated keys (command)
  const params: string[] = []

  params.push(`key=${encodeURIComponent(key)}`)

  if (repo) {
    params.push(`repo=${encodeURIComponent(repo)}`)
  }

  if (xSuccess) {
    params.push(`x-success=${encodeURIComponent(xSuccess)}`)
  }

  if (xError) {
    params.push(`x-error=${encodeURIComponent(xError)}`)
  }

  // Add each command and its params
  for (const item of commands) {
    params.push(`command=${encodeURIComponent(item.command)}`)
    if (item.params) {
      for (const [paramKey, paramValue] of Object.entries(item.params)) {
        params.push(`${encodeURIComponent(paramKey)}=${encodeURIComponent(String(paramValue))}`)
      }
    }
  }

  const queryString = params.length > 0 ? `?${params.join('&')}` : ''

  return `working-copy://x-callback-url/chain${queryString}`
}
