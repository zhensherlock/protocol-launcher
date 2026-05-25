import { qs } from '@protocol-launcher/shared'

/**
 * Slack channel redirect payload definition.
 */
type ChannelRedirect = {
  /**
   * Slack channel ID or channel name.
   */
  channel: string
  /**
   * Slack workspace/team ID.
   */
  team?: string
}

/**
 * Create a Slack app redirect URL for opening a channel by ID or name.
 *
 * @param payload Channel redirect definition.
 * @returns Slack channel redirect URL.
 * @example
 * channelRedirect({ channel: 'C123ABC456' })
 * // => 'https://slack.com/app_redirect?channel=C123ABC456'
 * @example
 * channelRedirect({ channel: 'release-notes', team: 'T12345' })
 * // => 'https://slack.com/app_redirect?channel=release-notes&team=T12345'
 * @link https://docs.slack.dev/interactivity/deep-linking/
 */
export function channelRedirect(payload: ChannelRedirect) {
  const { channel, team } = payload
  const params = qs({
    channel,
    ...(team ? { team } : {}),
  })

  return `https://slack.com/app_redirect${params}`
}
