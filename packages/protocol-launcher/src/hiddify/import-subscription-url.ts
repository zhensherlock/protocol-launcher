import type { HiddifyImportPayload } from './shared'
import { hiddifyImportUrl } from './shared'

/**
 * Import a Hiddify sublink URL.
 *
 * @param payload Hiddify import payload.
 * @returns Hiddify import URL.
 * @example
 * importSubscriptionUrl({
 *   sublink: 'https://example.com/subscriptions/v2ray.txt',
 * })
 * // => 'hiddify://import/https://example.com/subscriptions/v2ray.txt'
 * @link https://hiddify.com/app/URL-Scheme/
 */
export function importSubscriptionUrl(payload: HiddifyImportPayload) {
  return hiddifyImportUrl(payload)
}
