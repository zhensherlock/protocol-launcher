/**
 * Get version info result definition.
 */
export type GetVersionResult = {
  /**
   * The version of Ulysses' X-Callback API (e.g. 2).
   * Use this to find out which actions (and parameters) are supported.
   */
  apiVersion: string
  /**
   * The build version number of Ulysses itself (e.g. 32193).
   */
  buildNumber: string
}

/**
 * Retrieves the build number of Ulysses, and the version of Ulysses' X-Callback API.
 *
 * Available since Ulysses 2.8 (API version 2).
 *
 * @returns Ulysses get-version URL.
 * @example
 * getVersion()
 * // => 'ulysses://x-callback-url/get-version'
 * @link https://refined-github-html-preview.kidonng.workers.dev/softwarehistorysociety/UlyssesX-Callback-URL/raw/main/x-callback.html#get-version
 */
export function getVersion() {
  return 'ulysses://x-callback-url/get-version'
}
