import { type Dynamics365FieldServiceMobileEntityListPayload, fieldServiceMobileUrl } from './shared'

/**
 * Dynamics 365 Field Service mobile entity list payload definition.
 */
export type OpenEntityListPayload = Dynamics365FieldServiceMobileEntityListPayload

/**
 * Open an entity list view in the Dynamics 365 Field Service mobile app.
 *
 * @param payload Dynamics 365 Field Service mobile entity list payload.
 * @returns Dynamics 365 Field Service mobile entity list deep link.
 * @example
 * openEntityList({
 *   orgUrl: 'contoso.onmicrosoft.com',
 *   appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
 *   tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
 *   etn: 'bookableresourcebooking',
 *   viewid: '11111111-2222-3333-4444-555555555555',
 *   viewType: 1039,
 * })
 * // => 'ms-apps-fs://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=bookableresourcebooking&pagetype=entitylist&viewid=11111111-2222-3333-4444-555555555555&Viewtype=1039'
 * @link https://learn.microsoft.com/en-us/dynamics365/guidance/resources/field-service-mobile-use-deep-links
 */
export function openEntityList(payload: OpenEntityListPayload) {
  const { etn, viewid, viewType } = payload

  return fieldServiceMobileUrl(payload, {
    etn,
    pagetype: 'entitylist',
    viewid,
    Viewtype: viewType,
  })
}
