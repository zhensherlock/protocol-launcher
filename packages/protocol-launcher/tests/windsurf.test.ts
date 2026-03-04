import { describe, expect, test } from 'vitest'
import { windsurf } from '../src'

describe('windsurf', () => {
  test('open should return a URL', async () => {
    const url = windsurf.open()
    expect(url).toBe('windsurf://')
  })

  test('openExtension should return a URL with payload', async () => {
    const url = windsurf.openExtension({
      id: 'esbenp.prettier-vscode',
    })
    expect(url).toBe('windsurf:extension/esbenp.prettier-vscode')
  })

  test('installMCP should return a URL with payload', async () => {
    const url = windsurf.installMCP({
      name: 'server-everything',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-everything'],
    })
    expect(url).toBe(
      'windsurf:mcp/install?%7B%22name%22%3A%22server-everything%22%2C%22type%22%3A%22stdio%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40modelcontextprotocol%2Fserver-everything%22%5D%7D',
    )
  })

  test('installMCP should return a URL with payload and openInNewWindow', async () => {
    const url = windsurf.installMCP({
      name: 'server-everything',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-everything'],
      openInNewWindow: true,
    })
    expect(url).toBe(
      'windsurf:mcp/install?%7B%22name%22%3A%22server-everything%22%2C%22type%22%3A%22stdio%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40modelcontextprotocol%2Fserver-everything%22%5D%7D&windowId=_blank',
    )
  })

  test('openFile should return a URL with path', async () => {
    const url = windsurf.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('windsurf://file/etc/hosts')
  })

  test('openFile should return a URL with path, line, column, and openInNewWindow', async () => {
    const url = windsurf.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
      openInNewWindow: true,
    })
    expect(url).toBe('windsurf://file/etc/hosts:1:2?windowId=_blank')
  })

  test('openFolder should return a URL with path and openInNewWindow', async () => {
    const url = windsurf.openFolder({
      path: '/etc',
      openInNewWindow: true,
    })
    expect(url).toBe('windsurf://file/etc?windowId=_blank')
  })

  test('openFolder should return a URL with path', async () => {
    const url = windsurf.openFolder({
      path: '/etc',
    })
    expect(url).toBe('windsurf://file/etc')
  })

  test('openSettings should return a URL', async () => {
    const url = windsurf.openSettings()
    expect(url).toBe('windsurf://settings')
  })

  test('openSettings should return a URL with openInNewWindow', async () => {
    const url = windsurf.openSettings({
      openInNewWindow: true,
    })
    expect(url).toBe('windsurf://settings?windowId=_blank')
  })

  test('openSettings should return a URL with path', async () => {
    const url = windsurf.openSettings({
      path: 'terminal.integrated.suggest.enabled',
    })
    expect(url).toBe('windsurf://settings/terminal.integrated.suggest.enabled')
  })

  test('openRemote should return a URL with type, host, and path', async () => {
    const url = windsurf.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
    })
    expect(url).toBe('windsurf://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project')
  })

  test('openRemote should return a URL with type, host, path and openInNewWindow', async () => {
    const url = windsurf.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
      openInNewWindow: true,
    })
    expect(url).toBe('windsurf://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project?windowId=_blank')
  })

  test('cloneProject should return a URL with repo', async () => {
    const url = windsurf.cloneProject({
      repo: 'https://github.com/zhensherlock/protocol-launcher',
    })
    expect(url).toBe('windsurf://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Fzhensherlock%2Fprotocol-launcher')
  })
})
