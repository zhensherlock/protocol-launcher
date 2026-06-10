import { type AzureVirtualDesktopConnectPayload, azureVirtualDesktopUrl } from './shared'

/**
 * Azure Virtual Desktop connect payload definition.
 */
export type AvdConnectPayload = AzureVirtualDesktopConnectPayload

/**
 * Connect to an Azure Virtual Desktop desktop or RemoteApp resource.
 *
 * @param payload Azure Virtual Desktop connect payload.
 * @returns Azure Virtual Desktop connect URI.
 * @example
 * avdConnect({
 *   workspaceId: '1638e073-63b2-46d8-bd84-ea02ea905467',
 *   resourceid: 'a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1',
 *   username: 'user@contoso.com',
 *   version: 0,
 * })
 * // => 'ms-avd:connect?workspaceId=1638e073-63b2-46d8-bd84-ea02ea905467&resourceid=a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1&username=user@contoso.com&version=0'
 * @link https://learn.microsoft.com/en-us/azure/virtual-desktop/uri-scheme
 */
export function avdConnect(payload: AvdConnectPayload) {
  const { workspaceId, resourceid, username, env, version, launchpartnerid, peeractivityid, usemultimon } = payload

  return azureVirtualDesktopUrl('connect', {
    workspaceId,
    resourceid,
    username,
    env,
    version,
    launchpartnerid,
    peeractivityid,
    usemultimon,
  })
}
