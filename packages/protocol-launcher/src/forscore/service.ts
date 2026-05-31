import type { ForScoreServicePayload } from './shared'
import { assertForScoreServicePayload, forScoreUrl } from './shared'

/**
 * Open forScore's services panel to a service account or content provider.
 *
 * forScore documents `path` for Dropbox and Box services. Paths are not
 * supported when opening content providers.
 *
 * @param payload forScore service command payload.
 * @returns forScore service URL.
 * @example
 * service({ type: 'dropbox' })
 * // => 'forscore://service?type=dropbox'
 * @example
 * service({ type: 'dropbox', path: 'Directory/Subdirectory' })
 * // => 'forscore://service?type=dropbox&path=Directory%2FSubdirectory'
 * @link https://forscore.co/developers-automation/
 */
export function service(payload: ForScoreServicePayload) {
  assertForScoreServicePayload(payload)

  const { type, path } = payload

  return forScoreUrl('service', {
    type,
    ...(path !== undefined ? { path } : {}),
  })
}
