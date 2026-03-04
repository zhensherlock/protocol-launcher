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
   * - `http`: HTTP-based communication (including streaming protocols such as SSE)
   */
  type: 'stdio' | 'http'

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
   * Examples: `npx`, `uvx`, `docker`
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

  /**
   * Whether to open the server in a new window.
   *
   * Defaults to `false`.
   */
  openInNewWindow?: boolean
}

/**
 * Install MCP Server
 * @param payload MCP Server definition
 * @returns Install MCP Server URL
 * @example
 * installMCP({
 *   name: 'server-everything',
 *   type: 'stdio',
 *   command: 'npx',
 *   args: ['-y', '@modelcontextprotocol/server-everything'],
 *   openInNewWindow: true,
 * })
 * // => 'antigravity:mcp/install?%7B...%7D&windowId=_blank'
 */
export function installMCP(payload: MCPServer) {
  const { openInNewWindow = false, ...config } = payload
  const encodedPayload = encodeURIComponent(JSON.stringify(config))
  return `antigravity:mcp/install?${encodedPayload}${openInNewWindow ? '&windowId=_blank' : ''}`
}
