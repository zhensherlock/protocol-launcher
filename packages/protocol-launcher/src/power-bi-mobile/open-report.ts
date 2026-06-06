import { type PowerBiMobileReportPayload, powerBiMobileActionUrl } from './shared'

/**
 * Power BI mobile report deep-link payload definition.
 */
export type OpenReport = PowerBiMobileReportPayload

/**
 * Open a specific report, report page, or bookmarked report view in the Power BI mobile app.
 *
 * @param payload Power BI report payload.
 * @returns Power BI mobile report URL scheme.
 * @example
 * openReport({
 *   reportObjectId: 'dddddddd-3333-4444-5555-eeeeeeeeeeee',
 *   groupObjectId: 'ffffffff-5555-6666-7777-aaaaaaaaaaaa',
 * })
 * // => 'mspbi://app/OpenReport?ReportObjectId=dddddddd-3333-4444-5555-eeeeeeeeeeee&GroupObjectId=ffffffff-5555-6666-7777-aaaaaaaaaaaa'
 * @link https://learn.microsoft.com/en-us/power-bi/developer/embedded/mobile-apps-deep-link-specific-location
 */
export function openReport(payload: OpenReport) {
  const { reportObjectId, groupObjectId, reportPage, bookmarkGuid, context } = payload

  return powerBiMobileActionUrl('OpenReport', {
    ReportObjectId: reportObjectId,
    GroupObjectId: groupObjectId,
    reportPage,
    bookmarkGuid,
    context,
  })
}
