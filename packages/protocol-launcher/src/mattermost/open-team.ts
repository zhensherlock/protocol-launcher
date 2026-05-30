import { type MattermostLocation, mattermostUrl } from './shared'

/**
 * Open Mattermost team payload definition.
 */
type OpenTeam = MattermostLocation

/**
 * Open a Mattermost team.
 *
 * @param payload Open team definition.
 * @returns Mattermost team deep link.
 * @example
 * openTeam({
 *   serverUrl: 'your-Mattermost-server-URL',
 *   teamName: 'team-name',
 * })
 * // => 'mattermost://your-Mattermost-server-URL/team-name'
 * @link https://docs.mattermost.com/end-user-guide/collaborate/share-links.html#format-deep-links
 */
export function openTeam(payload: OpenTeam) {
  return mattermostUrl(payload)
}
