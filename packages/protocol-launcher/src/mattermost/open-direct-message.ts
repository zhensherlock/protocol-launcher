import { type MattermostLocation, mattermostPathSegment, mattermostUrl, rawMattermostPathSegment } from './shared'

/**
 * Open Mattermost direct message payload definition.
 */
type OpenDirectMessage = MattermostLocation & {
  /**
   * Mattermost user name.
   */
  userName: string
}

/**
 * Open a Mattermost direct message by user name.
 *
 * @param payload Open direct message definition.
 * @returns Mattermost direct message deep link.
 * @example
 * openDirectMessage({
 *   serverUrl: 'your-Mattermost-server-URL',
 *   teamName: 'team-name',
 *   userName: 'user-name',
 * })
 * // => 'mattermost://your-Mattermost-server-URL/team-name/messages/@user-name'
 * @link https://docs.mattermost.com/end-user-guide/collaborate/share-links.html#format-deep-links
 */
export function openDirectMessage(payload: OpenDirectMessage) {
  const { userName } = payload

  return mattermostUrl(payload, ['messages', rawMattermostPathSegment(`@${mattermostPathSegment(userName)}`)])
}
