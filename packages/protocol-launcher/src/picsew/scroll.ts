import { type PicsewStitchPayload, picsewStitchUrl } from './shared'

/**
 * Scrollshot stitching payload definition.
 */
export type Scroll = PicsewStitchPayload

/**
 * Use specified images for Picsew Scrollshot Stitching.
 *
 * @param payload Scrollshot stitching payload.
 * @returns Picsew scroll x-callback-url.
 * @example
 * scroll({
 *   in: 'recent',
 *   out: 'save',
 *   clean_status: 'yes',
 *   mockup2: 'iphone-14-blue',
 *   delete_source: 'yes',
 * })
 * // => 'picsew://x-callback-url/scroll?in=recent&out=save&clean_status=yes&mockup2=iphone-14-blue&delete_source=yes'
 * @link https://docs.picsew.app/getting-started/x-callback-url/
 */
export function scroll(payload: Scroll) {
  return picsewStitchUrl('scroll', payload)
}
