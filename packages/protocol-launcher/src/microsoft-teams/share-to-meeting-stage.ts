import { doubleEncodeJson } from './shared'

/**
 * Microsoft Teams share-to-meeting-stage app context definition.
 */
type ShareToMeetingStageAppContext = {
  /**
   * URL to share on stage. The domain must be valid in the app manifest.
   */
  appSharingUrl: string

  /**
   * Teams app ID from the app manifest.
   */
  appId: string

  /**
   * Set to true to initiate Meet now when there is no ongoing meeting.
   */
  useMeetNow?: boolean
}

/**
 * Microsoft Teams share-to-meeting-stage payload definition.
 */
type ShareToMeetingStage = {
  /**
   * Identifier used for telemetry correlation.
   */
  deepLinkId: string

  /**
   * Optional FQDN. Microsoft documents teams.microsoft.com, Teams.live.com, and teams.microsoft.us.
   */
  fqdn?: 'teams.microsoft.com' | 'Teams.live.com' | 'teams.microsoft.us'

  /**
   * App context to double-encode into the final URL.
   */
  appContext: ShareToMeetingStageAppContext

  /**
   * Use `msteams` only when targeting Teams desktop or mobile clients.
   *
   * Defaults to `https`.
   */
  protocol?: 'https' | 'msteams'
}

/**
 * Share content to stage in a Microsoft Teams meeting.
 *
 * @param payload - Teams share-to-meeting-stage payload.
 * @returns Microsoft Teams share-to-meeting-stage deep link.
 * @example
 * shareToMeetingStage({
 *   deepLinkId: 'sampleid',
 *   fqdn: 'teams.microsoft.com',
 *   appContext: {
 *     appSharingUrl: 'https://teams.microsoft.com/extensibility-apps/meetingapis/view',
 *     appId: '9cc80a93-1d41-4bcb-8170-4b9ec9e29fbb',
 *     useMeetNow: true,
 *   },
 * })
 * // => 'https://teams.microsoft.com/l/meeting-share?deeplinkId=sampleid&fqdn=teams.microsoft.com&lm=deeplink&appContext=%257B%2522appSharingUrl%2522%253A%2522https%253A%252F%252Fteams.microsoft.com%252Fextensibility-apps%252Fmeetingapis%252Fview%2522%252C%2522appId%2522%253A%25229cc80a93-1d41-4bcb-8170-4b9ec9e29fbb%2522%252C%2522useMeetNow%2522%253Atrue%257D'
 * @link https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-workflow#deep-link-to-share-content-to-stage-in-meetings
 */
export function shareToMeetingStage(payload: ShareToMeetingStage) {
  const { deepLinkId, fqdn, appContext, protocol = 'https' } = payload
  const base = protocol === 'msteams' ? 'msteams:/l/meeting-share' : 'https://teams.microsoft.com/l/meeting-share'
  const encodedAppContext = doubleEncodeJson({
    appSharingUrl: appContext.appSharingUrl,
    appId: appContext.appId,
    useMeetNow: appContext.useMeetNow ?? false,
  })
  const params = [
    `deeplinkId=${encodeURIComponent(deepLinkId)}`,
    fqdn ? `fqdn=${encodeURIComponent(fqdn)}` : undefined,
    'lm=deeplink',
    `appContext=${encodedAppContext}`,
  ].filter(Boolean)

  return `${base}?${params.join('&')}`
}
