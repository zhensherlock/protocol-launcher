import { webexTeamsUrl } from './shared'

export type OpenSpace = {
  /**
   * Webex space ID.
   *
   * @example '0000aa-a0a0'
   */
  space: string
}

/**
 * Open an existing Webex space.
 *
 * @param payload Webex space payload.
 * @returns Webex Teams IM URL.
 * @example
 * openSpace({
 *   space: '0000aa-a0a0',
 * })
 * // => 'webexteams://im?space=0000aa-a0a0'
 * @link https://help.webex.com/en-us/article/n5yzg8y/Webex-Add-Links
 */
export function openSpace(payload: OpenSpace) {
  return webexTeamsUrl('im', {
    space: payload.space,
  })
}
