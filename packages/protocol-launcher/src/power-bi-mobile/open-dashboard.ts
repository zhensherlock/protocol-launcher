import { type PowerBiMobileDashboardPayload, powerBiMobileActionUrl } from './shared'

/**
 * Power BI mobile dashboard deep-link payload definition.
 */
export type OpenDashboard = PowerBiMobileDashboardPayload

/**
 * Open a specific dashboard in the Power BI mobile app.
 *
 * @param payload Power BI dashboard payload.
 * @returns Power BI mobile dashboard URL scheme.
 * @example
 * openDashboard({ dashboardObjectId: 'aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb' })
 * // => 'mspbi://app/OpenDashboard?DashboardObjectId=aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb'
 * @link https://learn.microsoft.com/en-us/power-bi/developer/embedded/mobile-apps-deep-link-specific-location
 */
export function openDashboard(payload: OpenDashboard) {
  const { dashboardObjectId, groupObjectId } = payload

  return powerBiMobileActionUrl('OpenDashboard', {
    DashboardObjectId: dashboardObjectId,
    GroupObjectId: groupObjectId,
  })
}
