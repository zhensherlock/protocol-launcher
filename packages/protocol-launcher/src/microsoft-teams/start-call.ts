import { teamsUrl, teamsUserListParam } from './shared'

/**
 * Microsoft Teams call payload definition.
 */
type StartCall = {
  /**
   * Microsoft Entra UserPrincipalName values or PSTN MRI values such as `4:<phonenumber>`.
   */
  users: string[]

  /**
   * Set to true to make a video call.
   */
  withVideo?: true

  /**
   * Optional source value documented in Microsoft Teams call deep link examples.
   */
  source?: string
}

/**
 * Start a Microsoft Teams audio or audio-video call.
 *
 * @param payload - Teams call payload.
 * @returns Microsoft Teams call deep link.
 * @example
 * startCall({
 *   users: ['joe@contoso.com', '4:9876543210'],
 *   withVideo: true,
 *   source: 'demoApp',
 * })
 * // => 'https://teams.microsoft.com/l/call/0/0?users=joe@contoso.com,4:9876543210&withVideo=true&source=demoApp'
 * @link https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-workflow#configure-deep-link-manually-to-start-audio-video-call-with-users
 */
export function startCall(payload: StartCall) {
  const { users, withVideo, source } = payload

  return teamsUrl('call/0/0', {
    users: teamsUserListParam(users),
    withVideo,
    source,
  })
}
