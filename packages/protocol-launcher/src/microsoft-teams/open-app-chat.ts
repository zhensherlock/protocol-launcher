import { teamsPathSegment, teamsUrl } from './shared'

/**
 * Microsoft Teams app chat payload definition.
 */
type OpenAppChat = {
  /**
   * Teams app ID.
   */
  appId: string

  /**
   * Microsoft Entra tenant ID.
   */
  tenantId?: string
}

/**
 * Open a personal chat with a Microsoft Teams app.
 *
 * @param payload - Teams app chat payload.
 * @returns Microsoft Teams app chat deep link.
 * @example
 * openAppChat({
 *   appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
 *   tenantId: 'abcdef12-3456-7890-abcd-ef1234567890',
 * })
 * // => 'https://teams.microsoft.com/l/entity/fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx/conversations?tenantId=abcdef12-3456-7890-abcd-ef1234567890'
 * @link https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-application#deep-link-to-a-chat-with-the-application
 */
export function openAppChat(payload: OpenAppChat) {
  const { appId, tenantId } = payload

  return teamsUrl(`entity/${teamsPathSegment(appId)}/conversations`, {
    tenantId,
  })
}
