import { type BoxFolderPayload, boxUrl } from './shared'

export type OpenFolderPayload = BoxFolderPayload

/**
 * Open a folder object in the Box mobile app.
 *
 * @param payload Box folder payload.
 * @returns Box folder deep link.
 * @example
 * openFolder({ id: '123456789' })
 * // => 'boxapp://folder?id=123456789'
 * @link https://developer.box.com/guides/mobile/mobile-deep-linking/
 */
export function openFolder(payload: OpenFolderPayload) {
  return boxUrl('boxapp', 'folder', { id: payload.id })
}
