export const installSTDIOMCPServerParams = {
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
}

export const installStreamableHTTPMCPServerParams = {
  name: '企查查企业信息 MCP',
  type: 'streamable_http',
  url: 'https://mcp.qcc.com/basic/stream',
  headers: {
    Authorization: 'MjMmbGnP0gwLcbYe7MCr4FCuIA9dHQ9277zoO409EGZOdL3K',
  },
}

export const installSSEMCPServerParams = {
  name: '企查查风险信息 MCP',
  type: 'sse',
  url: 'https://mcp.qcc.com/basic/sse',
  headers: {
    Authorization: 'MjMmbGnP0gwLcbYe7MCr4FCuIA9dHQ9277zoO409EGZOdL3K',
  },
}

export const openFileParams = (isWindows: boolean) => {
  return {
    path: isWindows ? 'C:\\Windows\\System32\\drivers\\etc\\hosts' : '/etc/hosts',
    line: 1,
    column: 2,
    openInNewWindow: true,
  }
}

export const openFolderParams = (isWindows: boolean) => {
  return {
    path: isWindows ? 'C:\\Windows\\System32\\drivers\\etc' : '/etc',
    openInNewWindow: true,
  }
}
