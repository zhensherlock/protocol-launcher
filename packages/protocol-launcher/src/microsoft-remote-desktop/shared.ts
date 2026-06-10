export const MICROSOFT_REMOTE_DESKTOP_SCHEME = 'ms-rd'
export const AZURE_VIRTUAL_DESKTOP_SCHEME = 'ms-avd'
export const LEGACY_RDP_SCHEME = 'rdp'

export type AzureVirtualDesktopEnvironment = 'avdarm' | 'usgov'

export interface MicrosoftRemoteDesktopSubscribePayload {
  /**
   * Workspace URL.
   *
   * @example 'https://rdweb.wvd.microsoft.com'
   */
  url: string
}

export interface AzureVirtualDesktopConnectPayload {
  /**
   * Object ID of a valid workspace. Microsoft documents this parameter as required in Remote Desktop client
   * and not supported in Windows App.
   *
   * @example '1638e073-63b2-46d8-bd84-ea02ea905467'
   */
  workspaceId?: string
  /**
   * Object ID of a published resource contained in the workspace.
   *
   * @example 'a0a0a0a0-bbbb-cccc-dddd-e1e1e1e1e1e1'
   */
  resourceid: string
  /**
   * User Principal Name with access to the specified resource.
   *
   * @example 'user@contoso.com'
   */
  username: string
  /**
   * Azure cloud where resources are located.
   */
  env?: AzureVirtualDesktopEnvironment
  /**
   * Version of the connect URI scheme. Microsoft documents `0` as the supported value.
   */
  version?: 0
  /**
   * Partner or customer-provided GUID for Azure Virtual Desktop diagnostics.
   */
  launchpartnerid?: string
  /**
   * Partner or customer-provided GUID for Azure Virtual Desktop diagnostics.
   */
  peeractivityid?: string
  /**
   * Whether the remote session uses one or multiple displays from the local computer.
   */
  usemultimon?: boolean
}

export type LegacyRdpFlagValue = 0 | 1

export type LegacyRdpFlagAttributeName =
  | 'allow desktop composition'
  | 'allow font smoothing'
  | 'authentication level'
  | 'connect to console'
  | 'disable cursor settings'
  | 'disable full window drag'
  | 'disable menu anims'
  | 'disable themes'
  | 'disable wallpaper'
  | 'prompt for credentials on client'
  | 'redirectprinters'
  | 'remoteapplicationmode'
  | 'use multimon'
  | 'use redirection server name'

export type LegacyRdpPixelAttributeName = 'desktopheight' | 'desktopwidth'

export type LegacyRdpStringAttributeName =
  | 'alternate shell'
  | 'domain'
  | 'full address'
  | 'gatewayhostname'
  | 'loadbalanceinfo'
  | 'remoteapplicationcmdline'
  | 'remoteapplicationprogram'
  | 'shell working directory'
  | 'username'

export type LegacyRdpIntegerAttribute =
  | {
      /**
       * RDP attribute name.
       */
      name: LegacyRdpFlagAttributeName
      /**
       * Microsoft documents these RDP attribute values as `0` or `1`.
       */
      value: LegacyRdpFlagValue
    }
  | {
      /**
       * RDP attribute name.
       */
      name: 'audiomode'
      /**
       * Microsoft documents these RDP attribute values as `0`, `1`, or `2`.
       */
      value: 0 | 1 | 2
    }
  | {
      /**
       * RDP attribute name.
       */
      name: LegacyRdpPixelAttributeName
      /**
       * Pixel value.
       */
      value: number
    }
  | {
      /**
       * RDP attribute name.
       */
      name: 'gatewayusagemethod'
      /**
       * Microsoft documents these RDP attribute values as `1` or `2`.
       */
      value: 1 | 2
    }
  | {
      /**
       * RDP attribute name.
       */
      name: 'screen mode id'
      /**
       * Microsoft documents these RDP attribute values as `1` or `2`.
       */
      value: 1 | 2
    }
  | {
      /**
       * RDP attribute name.
       */
      name: 'session bpp'
      /**
       * Microsoft documents these RDP attribute values as `8`, `15`, `16`, `24`, or `32`.
       */
      value: 8 | 15 | 16 | 24 | 32
    }

export type LegacyRdpStringAttribute =
  | {
      /**
       * RDP attribute name.
       */
      name: LegacyRdpStringAttributeName
      /**
       * String attribute value.
       */
      value: string
    }
  | {
      /**
       * RDP drive redirection attribute. Microsoft documents `*` as the only supported value.
       */
      name: 'drivestoredirect'
      value: '*'
    }

export type LegacyRdpAttribute = LegacyRdpIntegerAttribute | LegacyRdpStringAttribute

export interface LegacyRdpPayload {
  /**
   * RDP attributes serialized in order as `attribute=type:value`.
   */
  attributes: readonly LegacyRdpAttribute[]
}

type LegacyRdpAttributeType = 'i' | 's'

const legacyRdpAttributeTypes = {
  'allow desktop composition': 'i',
  'allow font smoothing': 'i',
  'alternate shell': 's',
  audiomode: 'i',
  'authentication level': 'i',
  'connect to console': 'i',
  desktopheight: 'i',
  desktopwidth: 'i',
  'disable cursor settings': 'i',
  'disable full window drag': 'i',
  'disable menu anims': 'i',
  'disable themes': 'i',
  'disable wallpaper': 'i',
  domain: 's',
  drivestoredirect: 's',
  'full address': 's',
  gatewayhostname: 's',
  gatewayusagemethod: 'i',
  loadbalanceinfo: 's',
  'prompt for credentials on client': 'i',
  redirectprinters: 'i',
  remoteapplicationcmdline: 's',
  remoteapplicationmode: 'i',
  remoteapplicationprogram: 's',
  'screen mode id': 'i',
  'session bpp': 'i',
  'shell working directory': 's',
  'use multimon': 'i',
  'use redirection server name': 'i',
  username: 's',
} satisfies Record<LegacyRdpAttribute['name'], LegacyRdpAttributeType>

export function microsoftRemoteDesktopUrl(command?: 'subscribe', params: Record<string, unknown> = {}) {
  return `${MICROSOFT_REMOTE_DESKTOP_SCHEME}:${command ?? ''}${microsoftRemoteDesktopQuery(params)}`
}

export function azureVirtualDesktopUrl(command: 'connect', params: Record<string, unknown>) {
  return `${AZURE_VIRTUAL_DESKTOP_SCHEME}:${command}${microsoftRemoteDesktopQuery(params)}`
}

export function legacyRdpUrl(attributes: readonly LegacyRdpAttribute[]) {
  const query = attributes
    .map(attribute => {
      const type = legacyRdpAttributeTypes[attribute.name]
      return `${encodeURIComponent(attribute.name)}=${type}:${encodeLegacyRdpValue(attribute.value)}`
    })
    .join('&')

  return `${LEGACY_RDP_SCHEME}://${query}`
}

function encodeLegacyRdpValue(value: LegacyRdpAttribute['value']) {
  return encodeURIComponent(String(value)).replace(/%3A/g, ':')
}

function microsoftRemoteDesktopQuery(params: Record<string, unknown>) {
  const query = Object.entries(params)
    .flatMap(([key, value]) => {
      if (value === undefined || value === null) return []
      return `${key}=${String(value)}`
    })
    .join('&')

  return query ? `?${query}` : ''
}
