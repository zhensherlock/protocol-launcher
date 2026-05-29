import type { MomentoSchemePayload } from './shared'
import { momentoUrl } from './shared'

/**
 * Open Momento payload definition.
 */
type Open = MomentoSchemePayload

/**
 * Launch Momento.
 *
 * @param payload Open Momento payload.
 * @returns Momento launch URL.
 * @example
 * open()
 * // => 'momento://'
 * @example
 * open({ scheme: 'momento-3' })
 * // => 'momento-3://'
 * @link https://momento.zendesk.com/hc/en-us/articles/205668512-Momento-URL-Scheme
 */
export function open(payload: Open = {}) {
  const { scheme = 'momento' } = payload

  return momentoUrl('', {}, scheme)
}
