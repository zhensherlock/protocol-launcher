import { tableproUrl } from './shared'

/**
 * Lazy-start the TablePro MCP server.
 *
 * TablePro starts the server on a free port in the `51000-52000` range and writes its MCP handshake file.
 *
 * @returns TablePro MCP server start URL.
 * @example
 * startMCP()
 * // => 'tablepro://integrations/start-mcp'
 * @link https://docs.tablepro.app/external-api/url-scheme
 */
export function startMCP() {
  return tableproUrl('integrations/start-mcp')
}
