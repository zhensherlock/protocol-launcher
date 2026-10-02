import { qs } from '@protocol-launcher/shared'
import type { SurgeInstallConfigPayload } from './shared'

type InstallModule = SurgeInstallConfigPayload & { autoclose?: true }

/**
 * Install a Surge module from a URL.
 *
 * @param payload Module URL, scheme and optional iOS autoclose flag.
 * @returns Surge module installation URL.
 * @example
 * installModule({ url: 'https://example.com/example.sgmodule' })
 * // => 'surge:///install-module?url=https%3A%2F%2Fexample.com%2Fexample.sgmodule'
 * @link https://manual.nssurge.com/tools/url-scheme.html
 */
export function installModule(payload: InstallModule) {
  return `${payload.scheme ?? 'surge'}:///install-module${qs({ url: payload.url, autoclose: payload.autoclose || undefined })}`
}
