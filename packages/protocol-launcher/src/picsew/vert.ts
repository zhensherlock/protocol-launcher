import { type PicsewStitchPayload, picsewStitchUrl } from './shared'

/**
 * /vert action payload definition.
 */
export type Vert = PicsewStitchPayload

/**
 * Use specified images for Picsew Vertical Stitching.
 *
 * @param payload /vert action payload.
 * @returns Picsew /vert x-callback-url.
 * @example
 * vert({
 *   in: 'latest',
 *   count: 3,
 *   out: 'copy',
 *   watermark: 'repeat',
 * })
 * // => 'picsew://x-callback-url/vert?in=latest&count=3&out=copy&watermark=repeat'
 * @link https://docs.picsew.app/getting-started/x-callback-url/
 */
export function vert(payload: Vert) {
  return picsewStitchUrl('vert', payload)
}
