import { type BoxFolderPayload, boxUrl } from './shared'

export type OpenEmmFolderPayload = BoxFolderPayload

/**
 * Open a folder object in Box for EMM.
 *
 * @param payload Box for EMM folder payload.
 * @returns Box for EMM folder deep link.
 * @example
 * openEmmFolder({ id: '123456789' })
 * // => 'boxemm://folder?id=123456789'
 * @link https://developer.box.com/guides/mobile/mobile-deep-linking/
 */
export function openEmmFolder(payload: OpenEmmFolderPayload) {
  return boxUrl('boxemm', 'folder', { id: payload.id })
}
