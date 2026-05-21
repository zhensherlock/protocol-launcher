import type { IAWriterXCallback } from './shared'
import { iaWriterUrl } from './shared'

/**
 * Read command payload definition.
 */
type Read = IAWriterXCallback & {
  /**
   * URL Commands auth token from iA Writer settings.
   */
  authToken: string
  /**
   * Library path to the file to read.
   */
  path: string
}

/**
 * Reads and returns file contents.
 *
 * iA Writer returns `path` and `text` parameters on `x-success`.
 *
 * @param payload Read command payload.
 * @returns iA Writer read URL.
 * @example
 * read({ authToken: 'REPLACE_WITH_YOUR_TOKEN', path: '/File.txt' })
 * // => 'ia-writer://read?auth-token=REPLACE_WITH_YOUR_TOKEN&path=%2FFile.txt'
 * @example
 * read({ authToken: 'REPLACE_WITH_YOUR_TOKEN', path: '/File.txt', xSuccess: 'myapp://callback' })
 * // => 'ia-writer://x-callback-url/read?auth-token=REPLACE_WITH_YOUR_TOKEN&path=%2FFile.txt&x-success=myapp%3A%2F%2Fcallback'
 * @link https://ia.net/writer/support/help/url-commands#read
 */
export function read(payload: Read) {
  const { authToken, path, xSuccess } = payload

  return iaWriterUrl(
    'read',
    {
      'auth-token': authToken,
      path,
    },
    xSuccess,
  )
}
