import { describe, expect, test } from 'vitest'
import { pearai } from '../src'

describe('pearai', () => {
  test('open should return a URL', async () => {
    const url = pearai.open()
    expect(url).toBe('pearai://')
  })

  test('openFile should return a URL with path', async () => {
    const url = pearai.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('pearai://file/etc/hosts')
  })

  test('openFile should return a URL with path, line, column, and openInNewWindow', async () => {
    const url = pearai.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
      openInNewWindow: true,
    })
    expect(url).toBe('pearai://file/etc/hosts:1:2?windowId=_blank')
  })

  test('openFolder should return a URL with path and openInNewWindow', async () => {
    const url = pearai.openFolder({
      path: '/etc',
      openInNewWindow: true,
    })
    expect(url).toBe('pearai://file/etc?windowId=_blank')
  })

  test('openFolder should return a URL with path', async () => {
    const url = pearai.openFolder({
      path: '/etc',
    })
    expect(url).toBe('pearai://file/etc')
  })

  test('openSettings should return a URL', async () => {
    const url = pearai.openSettings()
    expect(url).toBe('pearai://settings')
  })

  test('openSettings should return a URL with openInNewWindow', async () => {
    const url = pearai.openSettings({
      openInNewWindow: true,
    })
    expect(url).toBe('pearai://settings?windowId=_blank')
  })

  test('openRemote should return a URL with type, host, and path', async () => {
    const url = pearai.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
    })
    expect(url).toBe('pearai://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project')
  })

  test('openRemote should return a URL with type, host, path and openInNewWindow', async () => {
    const url = pearai.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
      openInNewWindow: true,
    })
    expect(url).toBe('pearai://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project?windowId=_blank')
  })

  test('cloneProject should return a URL with repo', async () => {
    const url = pearai.cloneProject({
      repo: 'https://github.com/zhensherlock/protocol-launcher',
    })
    expect(url).toBe('pearai://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Fzhensherlock%2Fprotocol-launcher')
  })
})
