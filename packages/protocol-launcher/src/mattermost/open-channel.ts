import { type MattermostLocation, mattermostUrl } from './shared'

/**
 * Open Mattermost channel payload definition.
 */
type OpenChannel = MattermostLocation & {
  /**
   * Mattermost channel name.
   */
  channelName: string
}

/**
 * Open a Mattermost channel.
 *
 * @param payload Open channel definition.
 * @returns Mattermost channel deep link.
 * @example
 * openChannel({
 *   serverUrl: 'your-Mattermost-server-URL',
 *   teamName: 'team-name',
 *   channelName: 'channel-name',
 * })
 * // => 'mattermost://your-Mattermost-server-URL/team-name/channels/channel-name'
 * @link https://docs.mattermost.com/end-user-guide/collaborate/share-links.html#format-deep-links
 */
export function openChannel(payload: OpenChannel) {
  const { channelName } = payload

  return mattermostUrl(payload, ['channels', channelName])
}
