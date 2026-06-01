import { qs } from '@protocol-launcher/shared'

/**
 * MindNode open document payload definition.
 */
export type OpenDocument = {
  /**
   * Document name in the MindNode iCloud container.
   */
  name: string
}

/**
 * Open a MindNode document from the MindNode iCloud container.
 *
 * @param payload MindNode open document payload.
 * @returns MindNode open document URL.
 * @example
 * openDocument({ name: 'YourDocument' })
 * // => 'mindnode://open?name=YourDocument'
 * @link https://www.mindnode.com/blog/improving-integrations
 */
export function openDocument(payload: OpenDocument) {
  const { name } = payload

  return `mindnode://open${qs({ name })}`
}
