import { webexTeamsUrl } from './shared'

export type OpenChat = {
  /**
   * Email address for the person to open a Webex chat with.
   *
   * @example 'barbara@example.com'
   */
  email: string
}

/**
 * Open a Webex chat with one person.
 *
 * @param payload Webex chat payload.
 * @returns Webex Teams IM URL.
 * @example
 * openChat({
 *   email: 'barbara@example.com',
 * })
 * // => 'webexteams://im?email=barbara%40example.com'
 * @link https://help.webex.com/en-us/article/n5yzg8y/Webex-Add-Links
 * @link https://developer.webex.com/blog/build-a-click-to-call-shortcut-using-adaptive-cards-in-webex
 */
export function openChat(payload: OpenChat) {
  return webexTeamsUrl('im', {
    email: payload.email,
  })
}
