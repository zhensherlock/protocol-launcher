import { type PowerBiMobileTilePayload, powerBiMobileActionUrl } from './shared'

/**
 * Power BI mobile tile deep-link payload definition.
 */
export type OpenTile = PowerBiMobileTilePayload

/**
 * Open a specific dashboard tile in focus mode in the Power BI mobile app.
 *
 * @param payload Power BI tile payload.
 * @returns Power BI mobile tile URL scheme.
 * @example
 * openTile({
 *   dashboardObjectId: 'aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb',
 *   tileObjectId: 'cccccccc-2222-3333-4444-dddddddddddd',
 * })
 * // => 'mspbi://app/OpenTile?DashboardObjectId=aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb&TileObjectId=cccccccc-2222-3333-4444-dddddddddddd'
 * @link https://learn.microsoft.com/en-us/power-bi/developer/embedded/mobile-apps-deep-link-specific-location
 */
export function openTile(payload: OpenTile) {
  const { dashboardObjectId, tileObjectId, groupObjectId } = payload

  return powerBiMobileActionUrl('OpenTile', {
    DashboardObjectId: dashboardObjectId,
    TileObjectId: tileObjectId,
    GroupObjectId: groupObjectId,
  })
}
