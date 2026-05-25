import { qs } from '@protocol-launcher/shared'

/**
 * Open Slack App Home payload definition.
 */
type OpenApp = {
  /**
   * Slack workspace/team ID.
   */
  team: string
  /**
   * Slack app ID.
   */
  id: string
  /**
   * App Home tab.
   */
  tab?: 'home' | 'about' | 'messages'
}

/**
 * Open a Slack App Home.
 *
 * @param payload Open App Home definition.
 * @returns Slack App Home URL.
 * @example
 * openApp({ team: 'T12345', id: 'A123ABC456' })
 * // => 'slack://app?team=T12345&id=A123ABC456'
 * @example
 * openApp({ team: 'T12345', id: 'A123ABC456', tab: 'messages' })
 * // => 'slack://app?team=T12345&id=A123ABC456&tab=messages'
 * @link https://docs.slack.dev/interactivity/deep-linking/
 */
export function openApp(payload: OpenApp) {
  const { team, id, tab } = payload
  const params = qs({
    team,
    id,
    ...(tab ? { tab } : {}),
  })

  return `slack://app${params}`
}
