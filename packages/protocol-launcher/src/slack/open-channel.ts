import { qs } from '@protocol-launcher/shared'

/**
 * Open Slack channel payload definition.
 */
type OpenChannel = {
  /**
   * Slack workspace/team ID.
   */
  team: string
  /**
   * Slack channel ID.
   */
  id: string
}

/**
 * Open a Slack channel by ID.
 *
 * @param payload Open channel definition.
 * @returns Slack channel URL.
 * @example
 * openChannel({ team: 'T12345', id: 'C123ABC456' })
 * // => 'slack://channel?team=T12345&id=C123ABC456'
 * @link https://docs.slack.dev/interactivity/deep-linking/
 */
export function openChannel(payload: OpenChannel) {
  const { team, id } = payload
  const params = qs({ team, id })

  return `slack://channel${params}`
}
