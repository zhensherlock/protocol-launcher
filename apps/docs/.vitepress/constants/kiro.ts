export const installSTDIOMCPServerParams = {
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
}

export const installStreamableHTTPMCPServerParams = {
  name: '企查查企业信息 MCP',
  type: 'sse',
  url: 'https://mcp.qcc.com/basic/sse',
  headers: {
    Authorization: 'REPLACE_WITH_YOUR_TOKEN',
  },
}

export const installSSEMCPServerParams = {
  name: '企查查风险信息 MCP',
  type: 'sse',
  url: 'https://mcp.qcc.com/basic/sse',
  headers: {
    Authorization: 'REPLACE_WITH_YOUR_TOKEN',
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

export const openRemoteParams = {
  type: 'ssh-remote',
  host: 'root@172.18.105.209:22',
  path: '/code/my-project',
}

export const cloneProjectParams = {
  repo: 'https://github.com/zhensherlock/protocol-launcher',
}
