import { qs } from '@protocol-launcher/shared'

/**
 * Open Slack payload definition.
 */
type Open = {
  /**
   * Slack workspace/team ID.
   */
  team?: string
}

/**
 * Open the native Slack client.
 *
 * @param payload Open Slack definition.
 * @returns Slack open URL.
 * @example
 * open()
 * // => 'slack://open'
 * @example
 * open({ team: 'T12345' })
 * // => 'slack://open?team=T12345'
 * @link https://docs.slack.dev/interactivity/deep-linking/
 */
export function open(payload: Open = {}) {
  const { team } = payload
  const params = qs({
    ...(team ? { team } : {}),
  })

  return `slack://open${params}`
}
