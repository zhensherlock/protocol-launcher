import { type PowerAppsModelDrivenAppPayload, powerAppsModelDrivenUrl } from './shared'

/**
 * Power Apps model-driven app payload definition.
 */
export type OpenModelDrivenAppPayload = PowerAppsModelDrivenAppPayload

/**
 * Open a model-driven app in Power Apps mobile.
 *
 * @param payload Power Apps model-driven app payload.
 * @returns Power Apps mobile model-driven app deep link.
 * @example
 * openModelDrivenApp({
 *   orgUrl: 'contoso.onmicrosoft.com',
 *   appId: 'e6429eba-2204-40e8-b9dd-fc74791ff2c2',
 *   tenantId: 'aaaabbbb-0000-cccc-1111-dddd2222eeee',
 *   environmentId: 'g67tfyufhkjfg',
 *   appLogicalName: 'cr12_e567',
 * })
 * // => 'ms-apps://contoso.onmicrosoft.com_e6429eba-2204-40e8-b9dd-fc74791ff2c2?tenantId=aaaabbbb-0000-cccc-1111-dddd2222eeee&environmentId=g67tfyufhkjfg&appLogicalName=cr12_e567&appType=AppModule&openApp=true'
 * @link https://learn.microsoft.com/en-us/power-apps/mobile/mobile-deep-links
 */
export function openModelDrivenApp(payload: OpenModelDrivenAppPayload) {
  return powerAppsModelDrivenUrl(payload)
}
