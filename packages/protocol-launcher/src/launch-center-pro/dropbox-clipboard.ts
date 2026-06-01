import { type LaunchCenterProXCallback, type LaunchCenterProYesNo, launchCenterProUrl } from './shared'

/**
 * Dropbox clipboard payload definition.
 */
type DropboxClipboard = LaunchCenterProXCallback & {
  /**
   * Dropbox folder or file path.
   */
  path?: string

  /**
   * Whether a sharable link should always be returned.
   */
  linkonly?: LaunchCenterProYesNo
}

/**
 * Copy Dropbox file contents or a sharable link to the clipboard with Launch Center Pro.
 *
 * @param payload Dropbox clipboard payload.
 * @returns Launch Center Pro Dropbox clipboard URL.
 * @example
 * dropboxClipboard()
 * // => 'launch://dropbox/clipboard'
 * @example
 * dropboxClipboard({ path: '/photos/', linkonly: 'yes' })
 * // => 'launch://dropbox/clipboard?path=%2Fphotos%2F&linkonly=yes'
 * @link https://help.contrast.co/hc/en-us/articles/200612283-Dropbox-Actions
 */
export function dropboxClipboard(payload: DropboxClipboard = {}) {
  const { path, linkonly } = payload

  return launchCenterProUrl('dropbox/clipboard', payload, {
    ...(path !== undefined ? { path } : {}),
    ...(linkonly !== undefined ? { linkonly } : {}),
  })
}
