import { type BoxFilePayload, boxUrl } from './shared'

export type OpenFilePayload = BoxFilePayload

/**
 * Open a file object in the Box mobile app.
 *
 * @param payload Box file payload.
 * @returns Box file deep link.
 * @example
 * openFile({ id: '987654321' })
 * // => 'boxapp://file?id=987654321'
 * @link https://developer.box.com/guides/mobile/mobile-deep-linking/
 */
export function openFile(payload: OpenFilePayload) {
  return boxUrl('boxapp', 'file', { id: payload.id })
}
