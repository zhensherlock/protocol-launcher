import { qs } from '@protocol-launcher/shared'

export const POWER_BI_MOBILE_APP_SCHEME = 'mspbi://app/'

export type PowerBiMobileAction = 'OpenDashboard' | 'OpenReport' | 'OpenTile'

export interface PowerBiMobileWorkspacePayload {
  /**
   * Workspace/group object ID for content outside My Workspace.
   *
   * @example 'cccccccc-2222-3333-4444-dddddddddddd'
   */
  groupObjectId?: string
}

export interface PowerBiMobileDashboardPayload extends PowerBiMobileWorkspacePayload {
  /**
   * Dashboard object ID.
   *
   * @example 'aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb'
   */
  dashboardObjectId: string
}

export interface PowerBiMobileTilePayload extends PowerBiMobileWorkspacePayload {
  /**
   * Dashboard object ID that contains the tile.
   *
   * @example 'aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb'
   */
  dashboardObjectId: string
  /**
   * Tile object ID.
   *
   * @example 'cccccccc-2222-3333-4444-dddddddddddd'
   */
  tileObjectId: string
}

export interface PowerBiMobileReportPayload extends PowerBiMobileWorkspacePayload {
  /**
   * Report object ID.
   *
   * @example 'dddddddd-3333-4444-5555-eeeeeeeeeeee'
   */
  reportObjectId: string
  /**
   * Report page name, such as ReportSection11.
   */
  reportPage?: string
  /**
   * Bookmark GUID. Microsoft notes that BookmarkXXXXXXXXXXXXXXXXXXX values are not supported.
   */
  bookmarkGuid?: string
  /**
   * Optional context value that helps Microsoft filter relevant telemetry if support is needed.
   */
  context?: string
}

export function powerBiMobileActionUrl(action: PowerBiMobileAction, params: Record<string, unknown>) {
  return `${POWER_BI_MOBILE_APP_SCHEME}${action}${qs(params)}`
}
