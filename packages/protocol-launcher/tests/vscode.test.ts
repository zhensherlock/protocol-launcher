import { describe, expect, test } from 'vitest'
import { vscode } from '../src'

describe('vscode', () => {
  test('openFile should return a URL with path', async () => {
    const url = vscode.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('vscode://file/etc/hosts')
  })

  test('openFile should return a URL with path, line, column, and openInNewWindow', async () => {
    const url = vscode.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
      openInNewWindow: true,
    })
    expect(url).toBe('vscode://file/etc/hosts:1:2?windowId=_blank')
  })

  test('openFolder should return a URL with path and openInNewWindow', async () => {
    const url = vscode.openFolder({
      path: '/etc',
      openInNewWindow: true,
    })
    expect(url).toBe('vscode://file/etc?windowId=_blank')
  })

  test('openFolder should return a URL with path', async () => {
    const url = vscode.openFolder({
      path: '/etc',
    })
    expect(url).toBe('vscode://file/etc')
  })

  test('openSettings should return a URL', async () => {
    const url = vscode.openSettings()
    expect(url).toBe('vscode://settings')
  })

  test('openSettings should return a URL with openInNewWindow', async () => {
    const url = vscode.openSettings({
      openInNewWindow: true,
    })
    expect(url).toBe('vscode://settings?windowId=_blank')
  })

  test('openRemote should return a URL', async () => {
    const url = vscode.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
    })
    expect(url).toBe('vscode://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project')
  })
})
