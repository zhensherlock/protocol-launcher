import { qs } from '@protocol-launcher/shared'

/**
 * Open file payload definition.
 */
type OpenFile = {
  /**
   * Storage location.
   *
   * @default 'local'
   */
  location?: 'iCloud' | 'local' | 'external' | 'fullPath'
  /**
   * Directory path.
   *
   * @default root folder
   */
  path?: string
  /**
   * File name to open.
   */
  name: string
  /**
   * External folder identifier. Required when location is 'external'.
   *
   * @example '62E8D362-7DFA-413C-874E-20C1D98B17C0'
   */
  externalUUID?: string
  /**
   * Suggested external folder path. Used when location is 'fullPath'.
   */
  suggestedExternalFolderPath?: string
}

/**
 * Open an existing file in the local file system, iCloud, or an external folder.
 *
 * @param payload Open file payload.
 * @returns Textastic open file URL.
 * @example
 * openFile({
 *   path: 'example.com',
 *   name: 'index.html',
 * })
 * // => 'textastic://x-callback-url/open?path=example.com&name=index.html'
 * @example
 * openFile({
 *   location: 'iCloud',
 *   name: 'test.txt',
 * })
 * // => 'textastic://x-callback-url/open?location=iCloud&name=test.txt'
 * @link https://www.textasticapp.com/v10/manual/integration_other_apps/x-callback-url.html#open
 */
export function openFile(payload: OpenFile) {
  const { location, path, name, externalUUID, suggestedExternalFolderPath } = payload
  const params = qs({
    ...(location ? { location } : {}),
    ...(path ? { path } : {}),
    name,
    ...(externalUUID ? { externalUUID } : {}),
    ...(suggestedExternalFolderPath ? { suggestedExternalFolderPath } : {}),
  })

  return `textastic://x-callback-url/open${params}`
}
