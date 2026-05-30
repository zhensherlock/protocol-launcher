import type { HiddifyImportPayload } from './shared'
import { hiddifyImportUrl } from './shared'

/**
 * Import a single proxy share link into Hiddify.
 *
 * @param payload Hiddify import payload.
 * @returns Hiddify import URL.
 * @example
 * importProxyUrl({
 *   sublink: 'trojan://REPLACE_WITH_PASSWORD@example.com:443#name',
 * })
 * // => 'hiddify://import/trojan://REPLACE_WITH_PASSWORD@example.com:443#name'
 * @link https://hiddify.com/app/URL-Scheme/
 */
export function importProxyUrl(payload: HiddifyImportPayload) {
  return hiddifyImportUrl(payload)
}
