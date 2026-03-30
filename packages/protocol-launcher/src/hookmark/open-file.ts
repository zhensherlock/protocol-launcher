import { qs } from '@protocol-launcher/shared'

/**
 * Open file payload definition.
 */
type OpenFile = {
  /**
   * File path.
   *
   * @example '/Applications'
   */
  path: string

  /**
   * File name.
   *
   * @example 'Applications'
   */
  name?: string
}

/**
 * Open a file or folder in Hookmark using hook://file/ URL.
 *
 * @param payload Open file payload.
 * @returns Hookmark open file URL.
 * @example
 * openFile({
 *   path: '/Applications',
 *   name: 'Applications',
 * })
 * // => 'hook://file/path/Lw==?n=Applications'
 * @link https://hookproductivity.com/help/more/about-hookmarks-file-links/
 */
export function openFile(payload: OpenFile) {
  const { path, name } = payload
  const params = qs({
    ...(name ? { n: name } : {}),
  })

  return `hook://file${path}${params}`
}
