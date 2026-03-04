import { describe, expect, test } from 'vitest'
import { antigravity } from '../src'

describe('antigravity', () => {
  test('open should return a URL', async () => {
    const url = antigravity.open()
    expect(url).toBe('antigravity://')
  })

  test('openExtension should return a URL with payload', async () => {
    const url = antigravity.openExtension({
      id: 'esbenp.prettier-vscode',
    })
    expect(url).toBe('antigravity:extension/esbenp.prettier-vscode')
  })

  test('installMCP should return a URL with payload', async () => {
    const url = antigravity.installMCP({
      name: 'server-everything',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-everything'],
    })
    expect(url).toBe(
      'antigravity:mcp/install?%7B%22name%22%3A%22server-everything%22%2C%22type%22%3A%22stdio%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40modelcontextprotocol%2Fserver-everything%22%5D%7D',
    )
  })

  test('installMCP should return a URL with payload and openInNewWindow', async () => {
    const url = antigravity.installMCP({
      name: 'server-everything',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-everything'],
      openInNewWindow: true,
    })
    expect(url).toBe(
      'antigravity:mcp/install?%7B%22name%22%3A%22server-everything%22%2C%22type%22%3A%22stdio%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40modelcontextprotocol%2Fserver-everything%22%5D%7D&windowId=_blank',
    )
  })

  test('openFile should return a URL with path', async () => {
    const url = antigravity.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('antigravity://file/etc/hosts')
  })

  test('openFile should return a URL with path, line, column, and openInNewWindow', async () => {
    const url = antigravity.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
      openInNewWindow: true,
    })
    expect(url).toBe('antigravity://file/etc/hosts:1:2?windowId=_blank')
  })

  test('openFolder should return a URL with path and openInNewWindow', async () => {
    const url = antigravity.openFolder({
      path: '/etc',
      openInNewWindow: true,
    })
    expect(url).toBe('antigravity://file/etc?windowId=_blank')
  })

  test('openFolder should return a URL with path', async () => {
    const url = antigravity.openFolder({
      path: '/etc',
    })
    expect(url).toBe('antigravity://file/etc')
  })

  test('openSettings should return a URL', async () => {
    const url = antigravity.openSettings()
    expect(url).toBe('antigravity://settings')
  })

  test('openSettings should return a URL with openInNewWindow', async () => {
    const url = antigravity.openSettings({
      openInNewWindow: true,
    })
    expect(url).toBe('antigravity://settings?windowId=_blank')
  })

  test('openSettings should return a URL with path', async () => {
    const url = antigravity.openSettings({
      path: 'terminal.integrated.suggest.enabled',
    })
    expect(url).toBe('antigravity://settings/terminal.integrated.suggest.enabled')
  })

  test('openRemote should return a URL with type, host, and path', async () => {
    const url = antigravity.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
    })
    expect(url).toBe('antigravity://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project')
  })

  test('openRemote should return a URL with type, host, path and openInNewWindow', async () => {
    const url = antigravity.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
      openInNewWindow: true,
    })
    expect(url).toBe('antigravity://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project?windowId=_blank')
  })

  test('cloneProject should return a URL with repo', async () => {
    const url = antigravity.cloneProject({
      repo: 'https://github.com/zhensherlock/protocol-launcher',
    })
    expect(url).toBe('antigravity://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Fzhensherlock%2Fprotocol-launcher')
  })
})
