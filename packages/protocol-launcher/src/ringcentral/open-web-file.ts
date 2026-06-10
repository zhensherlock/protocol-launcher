import { ringCentralAppUrl, ringCentralPath } from './shared'

export type OpenWebFile = {
  /**
   * RingCentral shared file ID.
   *
   * @example 'file-123'
   */
  fileId: string
}

/**
 * Open a shared file in the RingCentral web app.
 *
 * @param payload RingCentral web file payload.
 * @returns RingCentral web file deep link.
 * @example
 * openWebFile({ fileId: 'file-123' })
 * // => 'https://app.ringcentral.com/files/file-123'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openWebFile(payload: OpenWebFile) {
  return ringCentralAppUrl(ringCentralPath('files', payload.fileId))
}
