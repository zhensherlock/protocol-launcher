import { microsoftRemoteDesktopUrl } from './shared'

/**
 * Open the Remote Desktop client.
 *
 * @returns Remote Desktop client launch URI.
 * @example
 * open()
 * // => 'ms-rd:'
 * @link https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/remote-desktop-uri
 */
export function open() {
  return microsoftRemoteDesktopUrl()
}
