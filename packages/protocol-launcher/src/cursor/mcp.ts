import { type EncodeOptions, encodeUrlPayload } from '@protocol-launcher/shared'

/**
 * MCP Server definition.
 *
 * Represents a resolved MCP server configuration used by the client
 * for discovery, display, and runtime communication.
 */
export type MCPServer = {
  /**
   * Server name.
   *
   * human-readable name used for identification and display.
   */
  name: string

  /**
   * Server communication type.
   *
   * Defines how the MCP client communicates with the server:
   * - `stdio`: Standard input/output based communication
   * - `streamable_http`: HTTP-based streaming communication
   * - `sse`: Server-Sent Events (SSE) communication
   */
  type: 'stdio' | 'streamable_http' | 'sse'

  /**
   * URL of the server.
   *
   * The primary access address used to communicate with the server.
   * This field takes precedence over any raw URL or alias configuration.
   */
  url?: string

  /**
   * Command used to start the server.
   *
   * Examples: `npx`, `uvx`
   */
  command?: string

  /**
   * Arguments passed to the command.
   *
   * Typically, includes the package name or script path.
   */
  args?: string[]

  /**
   * Environment variables injected when starting the server.
   *
   * Key-value pairs where both key and value are strings.
   */
  env?: Record<string, string>

  /**
   * Custom request headers.
   *
   * Optional key-value pairs that will be sent as HTTP headers
   * when making requests to the server.
   */
  headers?: Record<string, string>
}

/**
 * Install MCP Server
 * @param payload MCP Server
 * @param options Encode Options
 * @returns Install MCP Server URL
 * @example
 * installMCP({
 *   name: 'server-everything',
 *   type: 'stdio',
 *   command: 'npx',
 *   args: ['-y', '@modelcontextprotocol/server-everything'],
 * })
 */
export function installMCP(payload: MCPServer, options?: EncodeOptions) {
  const { name, ...config } = payload
  const encodedPayload = encodeUrlPayload(config, options)
  return `cursor://anysphere.cursor-deeplink/mcp/install?name=${encodeURIComponent(name)}&config=${encodedPayload}`
}
