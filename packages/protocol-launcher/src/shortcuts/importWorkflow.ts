import { qs } from '@protocol-launcher/shared'

/**
 * Import workflow definition.
 */
type ImportWorkflow = {
  /**
   * Workflow URL to import.
   */
  url: string

  /**
   * Workflow name.
   */
  name?: string
}

/**
 * Import a workflow into Shortcuts.
 *
 * @param payload Import workflow definition.
 * @returns Shortcuts import workflow URL.
 * @example
 * importWorkflow({ url: 'https://sharecuts.app/download/AFD6417C.shortcut' })
 * // => 'shortcuts://import-workflow?url=https://sharecuts.app/download/AFD6417C.shortcut'
 * @example
 * importWorkflow({
 *   url: 'https://sharecuts.app/download/AFD6417C.shortcut',
 *   name: 'Respring',
 * })
 * // => 'shortcuts://import-workflow?url=...&name=Respring'
 * @link https://support.apple.com/zh-cn/guide/shortcuts/apda283236d7/9.0/ios/26
 */
export function importWorkflow(payload: ImportWorkflow) {
  const { url, name } = payload
  const params = qs({
    url,
    ...(name ? { name } : {}),
  })
  return `shortcuts://import-workflow${params}`
}
