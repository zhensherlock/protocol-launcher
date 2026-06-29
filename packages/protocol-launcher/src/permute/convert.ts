import { type PermuteConvertPayload, permuteUrl } from './shared'

export type ConvertPayload = PermuteConvertPayload

/**
 * Add a file to Permute using the documented custom URL conversion action.
 *
 * @param payload Permute conversion payload.
 * @returns Permute conversion URL.
 * @example
 * convert({ filePath: '/Users/example/Downloads/file.mp4', preset: 'MP4', source: 'MyScript' })
 * // => 'permute:///Users/example/Downloads/file.mp4?action=convert&preset=MP4&source=MyScript'
 * @link https://software.charliemonroe.net/help/permute/?article=automation
 */
export function convert(payload: ConvertPayload) {
  return permuteUrl(payload.filePath, 'convert', payload)
}
