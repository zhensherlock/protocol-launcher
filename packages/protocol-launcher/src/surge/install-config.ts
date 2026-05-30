import { qs } from '@protocol-launcher/shared'
import type { SurgeInstallConfigPayload } from './shared'

/**
 * Install a Surge configuration from a URL.
 *
 * @param payload Surge install-config payload.
 * @returns Surge install-config URL.
 * @example
 * installConfig({
 *   url: 'https://example.com/surge.conf',
 * })
 * // => 'surge:///install-config?url=https%3A%2F%2Fexample.com%2Fsurge.conf'
 * @link https://manual.nssurge.com/others/url-scheme.html
 */
export function installConfig(payload: SurgeInstallConfigPayload) {
  return `surge:///install-config${qs({ url: payload.url })}`
}
