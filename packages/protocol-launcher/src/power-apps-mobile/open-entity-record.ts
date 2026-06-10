import { type PowerAppsEntityRecordPayload, powerAppsModelDrivenUrl } from './shared'

/**
 * Power Apps entity record payload definition.
 */
export type OpenEntityRecordPayload = PowerAppsEntityRecordPayload

/**
 * Open an entity record form in a Power Apps mobile model-driven app.
 *
 * @param payload Power Apps entity record payload.
 * @returns Power Apps mobile entity record deep link.
 * @example
 * openEntityRecord({
 *   orgUrl: 'contoso.onmicrosoft.com',
 *   appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
 *   tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
 *   environmentId: 'g67tfyufhkjfg',
 *   appLogicalName: 'cr12_e567',
 *   etn: 'account',
 *   id: '00000000-1111-2222-3333-444444444444',
 * })
 * // => 'ms-apps://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&appLogicalName=cr12_e567&appType=AppModule&openApp=true&etn=account&pagetype=entityrecord&id=00000000-1111-2222-3333-444444444444'
 * @link https://learn.microsoft.com/en-us/power-apps/mobile/mobile-deep-links
 */
export function openEntityRecord(payload: OpenEntityRecordPayload) {
  const { etn, id, extraqs } = payload

  return powerAppsModelDrivenUrl(payload, {
    etn,
    pagetype: 'entityrecord',
    id,
    extraqs,
  })
}
