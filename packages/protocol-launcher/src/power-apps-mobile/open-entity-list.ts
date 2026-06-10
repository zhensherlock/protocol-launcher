import { type PowerAppsEntityListPayload, powerAppsModelDrivenUrl } from './shared'

/**
 * Power Apps entity list payload definition.
 */
export type OpenEntityListPayload = PowerAppsEntityListPayload

/**
 * Open an entity list view in a Power Apps mobile model-driven app.
 *
 * @param payload Power Apps entity list payload.
 * @returns Power Apps mobile entity list deep link.
 * @example
 * openEntityList({
 *   orgUrl: 'contoso.onmicrosoft.com',
 *   appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
 *   tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
 *   environmentId: 'g67tfyufhkjfg',
 *   appLogicalName: 'cr12_e567',
 *   etn: 'account',
 *   viewid: '11111111-2222-3333-4444-555555555555',
 *   viewType: 1039,
 * })
 * // => 'ms-apps://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&appLogicalName=cr12_e567&appType=AppModule&openApp=true&etn=account&pagetype=entitylist&viewid=11111111-2222-3333-4444-555555555555&Viewtype=1039'
 * @link https://learn.microsoft.com/en-us/power-apps/mobile/mobile-deep-links
 */
export function openEntityList(payload: OpenEntityListPayload) {
  const { etn, viewid, viewType } = payload

  return powerAppsModelDrivenUrl(payload, {
    etn,
    pagetype: 'entitylist',
    viewid,
    Viewtype: viewType,
  })
}
