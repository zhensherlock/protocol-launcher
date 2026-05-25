import { qs } from '@protocol-launcher/shared'

/**
 * Share Slack file payload definition.
 */
type ShareFile = {
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
 * Open the Slack file sharing dialog by file ID.
 *
 * @param payload Share file definition.
 * @returns Slack share file URL.
 * @example
 * shareFile({ team: 'T12345', id: 'F123ABC456' })
 * // => 'slack://share-file?team=T12345&id=F123ABC456'
 * @link https://docs.slack.dev/interactivity/deep-linking/
 */
export function shareFile(payload: ShareFile) {
  const { team, id } = payload
  const params = qs({ team, id })

  return `slack://share-file${params}`
}
