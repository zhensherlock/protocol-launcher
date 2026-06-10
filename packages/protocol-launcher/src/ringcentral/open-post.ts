import { ringCentralMobileUrl } from './shared'

export type OpenPost = {
  /**
   * RingCentral post ID.
   *
   * @example 'post-123'
   */
  postId: string
}

/**
 * Open a specific post in a RingCentral mobile conversation.
 *
 * @param payload RingCentral post payload.
 * @returns RingCentral mobile post URI.
 * @example
 * openPost({ postId: 'post-123' })
 * // => 'rcmobile://glip/post?id=post-123'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openPost(payload: OpenPost) {
  return ringCentralMobileUrl('glip/post', {
    id: payload.postId,
  })
}
