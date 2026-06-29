import { type PermuteStitchPayload, permuteStitchFileParams, permuteUrl } from './shared'

export type StitchPayload = PermuteStitchPayload

/**
 * Add a stitching conversion to Permute using the documented custom URL action.
 *
 * @param payload Permute stitching payload.
 * @returns Permute stitching URL.
 * @example
 * stitch({
 *   folderPath: '/Users/example/Downloads/',
 *   preset: 'MP4',
 *   source: 'MyScript',
 *   name: 'foo.mp4',
 *   files: ['File1.mp4', 'File2.mp4'],
 * })
 * // => 'permute:///Users/example/Downloads/?action=stitch&preset=MP4&source=MyScript&name=foo.mp4&file1=File1.mp4&file2=File2.mp4'
 * @link https://software.charliemonroe.net/help/permute/?article=automation
 */
export function stitch(payload: StitchPayload) {
  const { name, files } = payload

  return permuteUrl(payload.folderPath, 'stitch', payload, {
    name,
    ...permuteStitchFileParams(files),
  })
}
