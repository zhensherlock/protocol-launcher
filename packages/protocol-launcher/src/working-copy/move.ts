import { qs } from '@protocol-launcher/shared'

/**
 * Move command payload definition.
 */
type Move = {
  /**
   * Secret key for authentication (required).
   */
  key: string

  /**
   * Repository name or remote URL (required).
   */
  repo: string

  /**
   * Source file path relative to repository root (required).
   */
  source: string

  /**
   * Destination file path relative to repository root (required).
   */
  destination: string
}

/**
 * Move or rename files within a repository.
 *
 * @param payload Move command payload.
 * @returns Working Copy x-callback-url/move URL.
 * @example
 * move({
 *   key: '123ABC',
 *   repo: 'my repo',
 *   source: 'from.txt',
 *   destination: 'to.txt',
 * })
 * // => 'working-copy://x-callback-url/move?key=123ABC&repo=my%20repo&source=from.txt&destination=to.txt'
 * @link https://workingcopyapp.com/x-callback-url.html
 */
export function move(payload: Move) {
  const { key, repo, source, destination } = payload
  const params = qs({
    key,
    repo,
    source,
    destination,
  })

  return `working-copy://x-callback-url/move${params}`
}
