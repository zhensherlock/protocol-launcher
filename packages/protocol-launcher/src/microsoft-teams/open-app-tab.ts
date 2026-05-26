import { jsonParam, type TeamsJsonObject, teamsPathSegment, teamsUrl } from './shared'

/**
 * Microsoft Teams app tab payload definition.
 */
type OpenAppTab = {
  /**
   * Teams app ID.
   */
  appId: string

  /**
   * Teams tab entity ID.
   */
  entityId: string

  /**
   * Microsoft Entra tenant ID.
   */
  tenantId?: string

  /**
   * Fallback URL if the client can't render the tab.
   */
  webUrl?: string

  /**
   * Label to display for the tab content.
   */
  label?: string

  /**
   * Teams context object, such as subEntityId, channelId, chatId, or contextType.
   */
  context?: TeamsJsonObject

  /**
   * Set to false to open the app in the meeting chat tab rather than the in-meeting side panel.
   */
  openInMeeting?: false
}

/**
 * Open content within a Microsoft Teams app tab.
 *
 * @param payload - Teams app tab payload.
 * @returns Microsoft Teams app tab deep link.
 * @example
 * openAppTab({
 *   appId: 'fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx',
 *   entityId: 'tasklist123',
 *   webUrl: 'https://tasklist.example.com/123',
 *   label: 'Task List 123',
 * })
 * // => 'https://teams.microsoft.com/l/entity/fxxxxxxx-0xxx-4xxx-8xxx-cxxxxxxxxxxx/tasklist123?webUrl=https%3A%2F%2Ftasklist.example.com%2F123&label=Task%20List%20123'
 * @link https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-application#configure-deep-link-to-browse-within-your-app-manually
 */
export function openAppTab(payload: OpenAppTab) {
  const { appId, entityId, tenantId, webUrl, label, context, openInMeeting } = payload

  return teamsUrl(`entity/${teamsPathSegment(appId)}/${teamsPathSegment(entityId)}`, {
    tenantId,
    webUrl,
    label,
    context: jsonParam(context),
    openInMeeting,
  })
}
