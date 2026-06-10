import { type Dynamics365FieldServiceMobileCreateEntityRecordPayload, fieldServiceMobileUrl } from './shared'

/**
 * Dynamics 365 Field Service mobile create entity record payload definition.
 */
export type CreateEntityRecordPayload = Dynamics365FieldServiceMobileCreateEntityRecordPayload

/**
 * Open a create form for an entity record in the Dynamics 365 Field Service mobile app.
 *
 * @param payload Dynamics 365 Field Service mobile create entity record payload.
 * @returns Dynamics 365 Field Service mobile create entity record deep link.
 * @example
 * createEntityRecord({
 *   orgUrl: 'contoso.onmicrosoft.com',
 *   appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
 *   tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
 *   etn: 'bookableresourcebooking',
 * })
 * // => 'ms-apps-fs://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&isShortcut=true&appType=AppModule&openApp=true&restartApp=true&forceOfflineDataSync=true&etn=bookableresourcebooking&pagetype=entityrecord&id='
 * @link https://learn.microsoft.com/en-us/dynamics365/guidance/resources/field-service-mobile-use-deep-links
 */
export function createEntityRecord(payload: CreateEntityRecordPayload) {
  const { etn, extraqs } = payload

  return fieldServiceMobileUrl(payload, {
    etn,
    pagetype: 'entityrecord',
    id: '',
    extraqs,
  })
}
