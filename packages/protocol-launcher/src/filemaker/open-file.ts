import { buildFileMakerUrl, type FileMakerFilePayload } from './shared'

/**
 * Open FileMaker Pro file payload definition.
 */
export type OpenFile = FileMakerFilePayload

/**
 * Open a shared or local FileMaker Pro file.
 *
 * @param payload Open file payload.
 * @returns FileMaker Pro open-file URL.
 * @example
 * openFile({ address: 'sales.example.com', filename: 'My Addresses.fmp12' })
 * // => 'fmp://sales.example.com/My%20Addresses.fmp12'
 * @example
 * openFile({ version: 22, address: 'sales.example.com', filename: 'My Addresses' })
 * // => 'fmp22://sales.example.com/My%20Addresses'
 * @link https://help.claris.com/en/pro-help/content/opening-files-url.html
 */
export function openFile(payload: OpenFile) {
  return buildFileMakerUrl(payload)
}
