import { describe, expect, test } from 'vitest'
import { traeChina } from '../src'
import { cloneProject } from '../src/trae-cn/git'

describe('trae-cn', () => {
  test('open should return a URL', async () => {
    const url = traeChina.open()
    expect(url).toBe('trae-cn://')
  })

  test('openAgent should return a URL with payload', async () => {
    const url = traeChina.openAgent({
      agentId: '878f64',
    })
    expect(url).toBe('trae-cn://trae.ai-ide/agent/share/878f64')
  })

  test('openExtension should return a URL with payload', async () => {
    const url = traeChina.openExtension({
      id: 'esbenp.prettier-vscode',
    })
    expect(url).toBe('trae-cn:extension/esbenp.prettier-vscode')
  })

  test('installMCP should return a URL with payload', async () => {
    const url = traeChina.installMCP({
      name: 'server-everything',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-everything'],
    })
    expect(url).toBe(
      'trae-cn://trae.ai-ide/mcp-import?name=server-everything&type=stdio&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBtb2RlbGNvbnRleHRwcm90b2NvbC9zZXJ2ZXItZXZlcnl0aGluZyJdfQ%3D%3D',
    )
  })

  test('installMCP should return a URL with payload and openInNewWindow', async () => {
    const url = traeChina.installMCP({
      name: 'server-everything',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-everything'],
      openInNewWindow: true,
    })
    expect(url).toBe(
      'trae-cn://trae.ai-ide/mcp-import?name=server-everything&type=stdio&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBtb2RlbGNvbnRleHRwcm90b2NvbC9zZXJ2ZXItZXZlcnl0aGluZyJdfQ%3D%3D&windowId=_blank',
    )
  })

  test('openFile should return a URL with path', async () => {
    const url = traeChina.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('trae-cn://file/etc/hosts')
  })

  test('openFile should return a URL with path, line, column, and openInNewWindow', async () => {
    const url = traeChina.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
      openInNewWindow: true,
    })
    expect(url).toBe('trae-cn://file/etc/hosts:1:2?windowId=_blank')
  })

  test('openFolder should return a URL with path and openInNewWindow', async () => {
    const url = traeChina.openFolder({
      path: '/etc',
      openInNewWindow: true,
    })
    expect(url).toBe('trae-cn://file/etc?windowId=_blank')
  })

  test('openFolder should return a URL with path', async () => {
    const url = traeChina.openFolder({
      path: '/etc',
    })
    expect(url).toBe('trae-cn://file/etc')
  })

  test('openSettings should return a URL', async () => {
    const url = traeChina.openSettings()
    expect(url).toBe('trae-cn://settings')
  })

  test('openSettings should return a URL with openInNewWindow', async () => {
    const url = traeChina.openSettings({
      openInNewWindow: true,
    })
    expect(url).toBe('trae-cn://settings?windowId=_blank')
  })

  test('openSettings should return a URL with path', async () => {
    const url = traeChina.openSettings({
      path: 'terminal.integrated.suggest.enabled',
    })
    expect(url).toBe('trae-cn://settings/terminal.integrated.suggest.enabled')
  })

  test('openRemote should return a URL with type, host, and path', async () => {
    const url = traeChina.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
    })
    expect(url).toBe('trae-cn://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project')
  })

  test('openRemote should return a URL with type, host, path and openInNewWindow', async () => {
    const url = traeChina.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
      openInNewWindow: true,
    })
    expect(url).toBe('trae-cn://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project?windowId=_blank')
  })

  test('cloneProject should return a URL with repo', async () => {
    const url = cloneProject({
      repo: 'https://github.com/zhensherlock/protocol-launcher',
    })
    expect(url).toBe('trae-cn://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Fzhensherlock%2Fprotocol-launcher')
  })
})
