import { legacyRdpUrl, type LegacyRdpPayload as MicrosoftRemoteDesktopLegacyRdpPayload } from './shared'

/**
 * Legacy Microsoft Remote Desktop RDP payload definition.
 */
export type LegacyRdpPayload = MicrosoftRemoteDesktopLegacyRdpPayload

/**
 * Build a legacy `rdp://` URI with documented RDP attributes.
 *
 * @param payload Legacy RDP attributes payload.
 * @returns Legacy RDP URI.
 * @example
 * legacyRdp({
 *   attributes: [
 *     { name: 'full address', value: 'mypc:3389' },
 *     { name: 'audiomode', value: 2 },
 *     { name: 'disable themes', value: 1 },
 *   ],
 * })
 * // => 'rdp://full%20address=s:mypc:3389&audiomode=i:2&disable%20themes=i:1'
 * @link https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remote-desktop-uri
 */
export function legacyRdp(payload: LegacyRdpPayload) {
  return legacyRdpUrl(payload.attributes)
}
