import { teamsUrl } from './shared'

/**
 * Microsoft Teams channel conversation payload definition.
 */
type OpenChannelConversation = {
  /**
   * Channel ID of the conversation.
   */
  channelId: string

  /**
   * Message ID of the conversation.
   */
  messageId: string

  /**
   * Microsoft Entra tenant ID.
   */
  tenantId: string

  /**
   * Microsoft 365 group ID.
   */
  groupId: string

  /**
   * Parent message ID of the conversation.
   */
  parentMessageId: string

  /**
   * Name of the team.
   */
  teamName: string

  /**
   * Name of the team's channel.
   */
  channelName: string

  /**
   * Created time value from the Teams message URL.
   */
  createdTime: string
}

/**
 * Navigate to a Microsoft Teams channel conversation.
 *
 * @param payload - Teams channel conversation payload.
 * @returns Microsoft Teams channel conversation deep link.
 * @example
 * openChannelConversation({
 *   channelId: '19:3997a8734ee5432bb9cdedb7c432ae7d@thread.tacv2',
 *   messageId: '1648741500652',
 *   tenantId: '0d9b645f-597b-41f0-a2a3-ef103fbd91bb',
 *   groupId: '3606f714-ec2e-41b3-9ad1-6afb331bd35d',
 *   parentMessageId: '1648741500652',
 *   teamName: 'Example Team',
 *   channelName: 'General',
 *   createdTime: '1648741500652',
 * })
 * // => 'https://teams.microsoft.com/l/message/19:3997a8734ee5432bb9cdedb7c432ae7d@thread.tacv2/1648741500652?tenantId=0d9b645f-597b-41f0-a2a3-ef103fbd91bb&groupId=3606f714-ec2e-41b3-9ad1-6afb331bd35d&parentMessageId=1648741500652&teamName=Example%20Team&channelName=General&createdTime=1648741500652'
 * @link https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-teams#deep-link-to-navigate-to-channel-conversation
 */
export function openChannelConversation(payload: OpenChannelConversation) {
  const { channelId, messageId, tenantId, groupId, parentMessageId, teamName, channelName, createdTime } = payload

  return teamsUrl(`message/${channelId}/${messageId}`, {
    tenantId,
    groupId,
    parentMessageId,
    teamName,
    channelName,
    createdTime,
  })
}
