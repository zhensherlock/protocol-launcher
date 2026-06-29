import { qs } from '@protocol-launcher/shared'

export const PERMUTE_SCHEME = 'permute://'

export type PermuteAction = 'convert' | 'stitch'
export type PermuteTrimRange = `${number}:${number}` | `${number}:` | `:${number}`
export type PermuteCropRectangle = `${number};${number};${number};${number}`

export interface PermuteBasePayload {
  /**
   * Name of the Permute preset to use.
   *
   * @example 'MP4'
   */
  preset: string
  /**
   * Optional source label Permute uses for grouping conversions.
   *
   * @example 'MyScript'
   */
  source?: string
  /**
   * Optional callback URL Permute opens when conversion finishes.
   *
   * @example 'myapp://7452d66e-9260-43f0-97cb-d0467a1143a7'
   */
  callback?: string
  /**
   * Optional destination folder path.
   *
   * @example '/Users/example/Movies/Converted'
   */
  destination?: string
  /**
   * Pass true to ask Permute to move the input file to Trash when done.
   */
  remove_original?: true
  /**
   * Optional custom group name.
   *
   * @example 'Batch 1'
   */
  custom_group?: string
  /**
   * Optional trim range in Permute's documented `start:stop` seconds format.
   *
   * @example '10:90'
   */
  trim?: PermuteTrimRange
  /**
   * Optional crop rectangle in Permute's documented `x;y;width;height` format.
   *
   * @example '0;0;1280;720'
   */
  crop?: PermuteCropRectangle
}

export interface PermuteConvertPayload extends PermuteBasePayload {
  /**
   * File system path to the file to convert.
   *
   * @example '/Users/example/Downloads/file.mp4'
   */
  filePath: string
}

export interface PermuteStitchPayload extends PermuteBasePayload {
  /**
   * Folder path containing all files to stitch.
   *
   * @example '/Users/example/Downloads/'
   */
  folderPath: string
  /**
   * Output file name for the stitched conversion.
   *
   * @example 'stitched.mp4'
   */
  name: string
  /**
   * File names to stitch, serialized as `file1`, `file2`, and so on.
   *
   * @example ['File1.mp4', 'File2.mp4']
   */
  files: [string, ...string[]]
}

function encodePath(path: string) {
  return path
    .split('/')
    .map(segment => encodeURIComponent(segment))
    .join('/')
}

function trueParam(value: unknown) {
  return value === true ? true : undefined
}

function permuteQuery(action: PermuteAction, payload: PermuteBasePayload, params: Record<string, unknown> = {}) {
  const { preset, source, callback, destination, remove_original, custom_group, trim, crop } = payload

  return qs({
    action,
    preset,
    source,
    callback,
    destination,
    remove_original: trueParam(remove_original),
    ...params,
    custom_group,
    trim,
    crop,
  })
}

export function permuteUrl(
  path: string,
  action: PermuteAction,
  payload: PermuteBasePayload,
  params?: Record<string, unknown>,
) {
  return `${PERMUTE_SCHEME}${encodePath(path)}${permuteQuery(action, payload, params)}`
}

export function permuteStitchFileParams(files: [string, ...string[]]) {
  return Object.fromEntries(files.map((file, index) => [`file${index + 1}`, file]))
}
