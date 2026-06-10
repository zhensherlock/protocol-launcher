import { ringCentralMobileUrl } from './shared'

export type OpenFile = {
  /**
   * RingCentral shared file ID.
   *
   * @example 'file-123'
   */
  fileId: string
}

/**
 * Open a file shared in a RingCentral mobile conversation.
 *
 * @param payload RingCentral file payload.
 * @returns RingCentral mobile file URI.
 * @example
 * openFile({ fileId: 'file-123' })
 * // => 'rcmobile://glip/file?id=file-123'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openFile(payload: OpenFile) {
  return ringCentralMobileUrl('glip/file', {
    id: payload.fileId,
  })
}
