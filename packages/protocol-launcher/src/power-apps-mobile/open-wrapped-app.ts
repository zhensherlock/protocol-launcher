import {
  POWER_APPS_WRAPPED_MOBILE_SCHEME,
  type PowerAppsWrappedAppPayload,
  powerAppsProviderAppUrl,
  trueParam,
} from './shared'

/**
 * Power Apps wrapped native mobile app payload definition.
 */
export type OpenWrappedAppPayload = PowerAppsWrappedAppPayload

/**
 * Open a wrapped native mobile app created with Power Apps wrap.
 *
 * @param payload Power Apps wrapped app payload.
 * @returns Power Apps wrapped native mobile app deep link.
 * @example
 * openWrappedApp({
 *   appId: '11111111-2222-3333-4444-555555555555',
 *   tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
 * })
 * // => 'ms-mobile-apps:///providers/Microsoft.PowerApps/apps/11111111-2222-3333-4444-555555555555?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee'
 * @link https://learn.microsoft.com/en-us/power-apps/mobile/mobile-deep-links
 */
export function openWrappedApp(payload: OpenWrappedAppPayload) {
  const { appId, tenantId, restartApp, autoLoginUpn } = payload

  return powerAppsProviderAppUrl(POWER_APPS_WRAPPED_MOBILE_SCHEME, appId, {
    tenantId,
    restartApp: trueParam(restartApp),
    autoLoginUpn,
  })
}
