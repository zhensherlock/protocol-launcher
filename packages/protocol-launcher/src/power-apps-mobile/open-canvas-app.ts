import { POWER_APPS_MOBILE_SCHEME, type PowerAppsCanvasAppPayload, powerAppsProviderAppUrl, trueParam } from './shared'

/**
 * Power Apps canvas app payload definition.
 */
export type OpenCanvasAppPayload = PowerAppsCanvasAppPayload

/**
 * Open a canvas app in Power Apps mobile.
 *
 * @param payload Power Apps canvas app payload.
 * @returns Power Apps mobile canvas app deep link.
 * @example
 * openCanvasApp({
 *   appId: '11111111-2222-3333-4444-555555555555',
 *   tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
 *   environmentId: 'g67tfyufhkjfg',
 * })
 * // => 'ms-apps:///providers/Microsoft.PowerApps/apps/11111111-2222-3333-4444-555555555555?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg'
 * @link https://learn.microsoft.com/en-us/power-apps/mobile/mobile-deep-links
 */
export function openCanvasApp(payload: OpenCanvasAppPayload) {
  const { appId, tenantId, environmentId, restartApp, autoLoginUpn } = payload

  return powerAppsProviderAppUrl(POWER_APPS_MOBILE_SCHEME, appId, {
    tenantId,
    environmentId,
    restartApp: trueParam(restartApp),
    autoLoginUpn,
  })
}
