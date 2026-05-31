import { type PicsewStitchPayload, picsewStitchUrl } from './shared'

/**
 * /hori action payload definition.
 */
export type Hori = PicsewStitchPayload

/**
 * Use specified images for Picsew Horizontal Stitching.
 *
 * @param payload /hori action payload.
 * @returns Picsew /hori x-callback-url.
 * @example
 * hori({
 *   in: 'paste',
 *   out: 'copy',
 * })
 * // => 'picsew://x-callback-url/hori?in=paste&out=copy'
 * @link https://docs.picsew.app/getting-started/x-callback-url/
 */
export function hori(payload: Hori) {
  return picsewStitchUrl('hori', payload)
}
