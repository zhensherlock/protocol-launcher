import type { MicrosoftRemoteDesktopSubscribePayload } from './shared'
import { microsoftRemoteDesktopUrl } from './shared'

/**
 * Microsoft Remote Desktop subscribe payload definition.
 */
export type SubscribePayload = MicrosoftRemoteDesktopSubscribePayload

/**
 * Launch Remote Desktop and start the workspace subscription process.
 *
 * @param payload Remote Desktop workspace subscription payload.
 * @returns Remote Desktop subscribe URI.
 * @example
 * subscribe({ url: 'https://rdweb.wvd.microsoft.com' })
 * // => 'ms-rd:subscribe?url=https://rdweb.wvd.microsoft.com'
 * @link https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remote-desktop-uri
 */
export function subscribe(payload: SubscribePayload) {
  return microsoftRemoteDesktopUrl('subscribe', { url: payload.url })
}
