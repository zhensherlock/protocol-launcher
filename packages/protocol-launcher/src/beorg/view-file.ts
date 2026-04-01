import { qs } from '@protocol-launcher/shared'

/**
 * View file command payload definition.
 */
type ViewFile = {
  /**
   * The name of the file, without an extension.
   *
   * @example 'shopping'
   */
  file: string
}

/**
 * View a specific file in Beorg.
 *
 * @param payload View file command payload.
 * @returns Beorg view file URL.
 * @example
 * viewFile({ file: 'shopping' })
 * // => 'beorg://x-callback-url/file?file=shopping'
 * @link https://www.beorgapp.com/manual/#url-scheme
 */
export function viewFile(payload: ViewFile) {
  const { file } = payload
  const params = qs({ file })

  return `beorg://x-callback-url/file${params}`
}
