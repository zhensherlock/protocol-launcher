import { POWER_BI_MOBILE_APP_SCHEME } from './shared'

/**
 * Open the Power BI mobile app.
 *
 * @returns Power BI mobile app URL scheme.
 * @example
 * openApp()
 * // => 'mspbi://app/'
 * @link https://learn.microsoft.com/en-us/power-bi/developer/embedded/mobile-apps-deep-link-specific-location
 */
export function openApp() {
  return POWER_BI_MOBILE_APP_SCHEME
}
