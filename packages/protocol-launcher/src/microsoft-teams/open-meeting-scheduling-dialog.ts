import { teamsUrl, teamsUserListParam } from './shared'

/**
 * Microsoft Teams meeting scheduling dialog payload definition.
 */
type OpenMeetingSchedulingDialog = {
  /**
   * Meeting subject.
   */
  subject?: string

  /**
   * Meeting start time. Microsoft documents long ISO 8601 format with UTC offset.
   */
  startTime?: string

  /**
   * Meeting end time. Microsoft documents ISO 8601 format with UTC offset.
   */
  endTime?: string

  /**
   * Meeting details field content.
   */
  content?: string

  /**
   * Microsoft Entra UserPrincipalName values, such as email addresses.
   */
  attendees?: string[]
}

/**
 * Open the Microsoft Teams meeting scheduling dialog.
 *
 * @param payload - Teams meeting scheduling dialog payload.
 * @returns Microsoft Teams meeting scheduling dialog deep link.
 * @example
 * openMeetingSchedulingDialog({
 *   subject: 'test subject',
 *   attendees: ['joe@contoso.com', 'bob@contoso.com'],
 *   startTime: '2018-10-24T10:00:00-07:00',
 *   endTime: '2018-10-24T10:30:00-07:00',
 *   content: 'test:content',
 * })
 * // => 'https://teams.microsoft.com/l/meeting/new?subject=test%20subject&startTime=2018-10-24T10%3A00%3A00-07%3A00&endTime=2018-10-24T10%3A30%3A00-07%3A00&content=test%3Acontent&attendees=joe@contoso.com,bob@contoso.com'
 * @link https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-workflow#configure-deep-link-manually-to-open-a-meeting-scheduling-dialog
 */
export function openMeetingSchedulingDialog(payload: OpenMeetingSchedulingDialog = {}) {
  const { subject, startTime, endTime, content, attendees } = payload

  return teamsUrl('meeting/new', {
    subject,
    startTime,
    endTime,
    content,
    attendees: attendees ? teamsUserListParam(attendees) : undefined,
  })
}
