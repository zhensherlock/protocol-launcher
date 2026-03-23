import { qs } from '@protocol-launcher/shared'

/**
 * New task payload definition.
 */
type NewTask = {
  /**
   * The URL of the file to download.
   *
   * @example 'https://example.com/file.dmg'
   */
  uri: string
  /**
   * The output filename (optional).
   *
   * @example 'myfile.dmg'
   */
  out?: string
}

/**
 * Create a new download task in Motrix.
 *
 * @param payload New task definition.
 * @returns Motrix new task URL.
 * @example
 * newTask({
 *   uri: 'https://example.com/file.dmg',
 *   out: 'myfile.dmg',
 * })
 * // => 'motrix://new-task?uri=https%3A%2F%2Fexample.com%2Ffile.dmg&out=myfile.dmg'
 * @link https://github.com/agalwood/Motrix/blob/7012040fec926e16fe8f6c403cf038527f5c18b9/src/main/configs/protocol.js
 */
export function newTask(payload: NewTask) {
  const { uri, out } = payload
  const params = qs({
    uri,
    ...(out ? { out } : {}),
  })

  return `motrix://new-task${params}`
}
