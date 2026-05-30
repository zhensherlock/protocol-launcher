import { type MattermostLocation, mattermostUrl } from './shared'

/**
 * Open Mattermost post payload definition.
 */
type OpenPost = MattermostLocation & {
  /**
   * Mattermost post ID.
   */
  postId: string
}

/**
 * Open a Mattermost channel message or thread by post ID.
 *
 * @param payload Open post definition.
 * @returns Mattermost post deep link.
 * @example
 * openPost({
 *   serverUrl: 'your-Mattermost-server-URL',
 *   teamName: 'team-name',
 *   postId: 'post-id',
 * })
 * // => 'mattermost://your-Mattermost-server-URL/team-name/pl/post-id'
 * @link https://docs.mattermost.com/end-user-guide/collaborate/share-links.html#format-deep-links
 */
export function openPost(payload: OpenPost) {
  const { postId } = payload

  return mattermostUrl(payload, ['pl', postId])
}
