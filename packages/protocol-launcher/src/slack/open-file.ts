import { qs } from '@protocol-launcher/shared'

/**
 * Open Slack file payload definition.
 */
type OpenFile = {
  /**
   * Slack workspace/team ID.
   */
  team: string
  /**
   * Slack file ID.
   */
  id: string
}

/**
 * Open a Slack file by ID.
 *
 * @param payload Open file definition.
 * @returns Slack file URL.
 * @example
 * openFile({ team: 'T12345', id: 'F123ABC456' })
 * // => 'slack://file?team=T12345&id=F123ABC456'
 * @link https://docs.slack.dev/interactivity/deep-linking/
 */
export function openFile(payload: OpenFile) {
  const { team, id } = payload
  const params = qs({ team, id })

  return `slack://file${params}`
}
