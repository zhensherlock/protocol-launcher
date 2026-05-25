import { qs } from '@protocol-launcher/shared'

/**
 * Slack app redirect payload definition.
 */
type AppRedirect = {
  /**
   * Slack app ID.
   */
  app: string
  /**
   * Slack workspace/team ID.
   */
  team?: string
}

/**
 * Create a Slack app redirect URL for opening a direct message with an app or bot.
 *
 * @param payload App redirect definition.
 * @returns Slack app redirect URL.
 * @example
 * appRedirect({ app: 'A123ABC456' })
 * // => 'https://slack.com/app_redirect?app=A123ABC456'
 * @example
 * appRedirect({ app: 'A123ABC456', team: 'T12345' })
 * // => 'https://slack.com/app_redirect?app=A123ABC456&team=T12345'
 * @link https://docs.slack.dev/interactivity/deep-linking/
 */
export function appRedirect(payload: AppRedirect) {
  const { app, team } = payload
  const params = qs({
    app,
    ...(team ? { team } : {}),
  })

  return `https://slack.com/app_redirect${params}`
}
