import type { HiddifyImportPayload } from './shared'
import { hiddifyImportUrl } from './shared'

/**
 * Import a Hiddify configuration link.
 *
 * @param payload Hiddify import payload.
 * @returns Hiddify import URL.
 * @example
 * importConfig({
 *   sublink: 'https://hiddify.com/autosub',
 *   name: 'name',
 * })
 * // => 'hiddify://import/https://hiddify.com/autosub#name'
 * @link https://hiddify.com/app/URL-Scheme/
 */
export function importConfig(payload: HiddifyImportPayload) {
  return hiddifyImportUrl(payload)
}
