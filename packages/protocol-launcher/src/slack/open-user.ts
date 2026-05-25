import { qs } from '@protocol-launcher/shared'

/**
 * Open Slack direct message payload definition.
 */
type OpenUser = {
  /**
   * Slack workspace/team ID.
   */
  team: string
  /**
   * Slack user ID.
   */
  id: string
}

/**
 * Open a direct message with a Slack user by ID.
 *
 * @param payload Open user definition.
 * @returns Slack user URL.
 * @example
 * openUser({ team: 'T12345', id: 'U123ABC456' })
 * // => 'slack://user?team=T12345&id=U123ABC456'
 * @link https://docs.slack.dev/interactivity/deep-linking/
 */
export function openUser(payload: OpenUser) {
  const { team, id } = payload
  const params = qs({ team, id })

  return `slack://user${params}`
}
