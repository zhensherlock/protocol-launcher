/**
 * Upload file payload definition.
 */
type UploadFile = {
  /**
   * File path to upload.
   *
   * @example '/Users/dev/Downloads/test.txt'
   */
  filePath: string
}

/**
 * Upload file in uPic.
 *
 * @param payload Upload file payload.
 * @returns uPic upload file URL.
 * @example
 * uploadFile({
 *   filePath: '/Users/dev/Downloads/test.txt',
 * })
 * // => 'uPic://files?/Users/dev/Downloads/test.txt'
 */
export function uploadFile(payload: UploadFile) {
  const { filePath } = payload
  return `uPic://files?${filePath}`
}
