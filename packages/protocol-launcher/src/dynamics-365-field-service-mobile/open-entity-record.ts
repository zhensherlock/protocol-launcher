import { type Dynamics365FieldServiceMobileEntityRecordPayload, fieldServiceMobileUrl } from './shared'

/**
 * Dynamics 365 Field Service mobile entity record payload definition.
 */
export type OpenEntityRecordPayload = Dynamics365FieldServiceMobileEntityRecordPayload

/**
 * Open an entity record form in the Dynamics 365 Field Service mobile app.
 *
 * @param payload Dynamics 365 Field Service mobile entity record payload.
 * @returns Dynamics 365 Field Service mobile entity record deep link.
 * @example
 * openEntityRecord({
 *   orgUrl: 'contoso.onmicrosoft.com',
 *   appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
 *   tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
 *   etn: 'bookableresourcebooking',
 *   id: '00000000-1111-2222-3333-444444444444',
 * })
 * // => 'ms-apps-fs://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=bookableresourcebooking&pagetype=entityrecord&id=00000000-1111-2222-3333-444444444444'
 * @link https://learn.microsoft.com/en-us/dynamics365/guidance/resources/field-service-mobile-use-deep-links
 */
export function openEntityRecord(payload: OpenEntityRecordPayload) {
  const { etn, id, extraqs } = payload

  return fieldServiceMobileUrl(payload, {
    etn,
    pagetype: 'entityrecord',
    id,
    extraqs,
  })
}
