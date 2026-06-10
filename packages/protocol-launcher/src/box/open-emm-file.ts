import { type BoxFilePayload, boxUrl } from './shared'

export type OpenEmmFilePayload = BoxFilePayload

/**
 * Open a file object in Box for EMM.
 *
 * @param payload Box for EMM file payload.
 * @returns Box for EMM file deep link.
 * @example
 * openEmmFile({ id: '987654321' })
 * // => 'boxemm://file?id=987654321'
 * @link https://developer.box.com/guides/mobile/mobile-deep-linking/
 */
export function openEmmFile(payload: OpenEmmFilePayload) {
  return boxUrl('boxemm', 'file', { id: payload.id })
}
