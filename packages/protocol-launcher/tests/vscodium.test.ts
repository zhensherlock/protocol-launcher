import { describe, expect, test } from 'vitest'
import { vscodium } from '../src'

describe('vscodium', () => {
  test('open should return a URL', async () => {
    const url = vscodium.open()
    expect(url).toBe('vscodium://')
  })

  test('openExtension should return a URL with payload', async () => {
    const url = vscodium.openExtension({
      id: 'esbenp.prettier-vscode',
    })
    expect(url).toBe('vscodium:extension/esbenp.prettier-vscode')
  })

  test('openFile should return a URL with path', async () => {
    const url = vscodium.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('vscodium://file/etc/hosts')
  })

  test('openFile should return a URL with path, line, column, and openInNewWindow', async () => {
    const url = vscodium.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
      openInNewWindow: true,
    })
    expect(url).toBe('vscodium://file/etc/hosts:1:2?windowId=_blank')
  })

  test('openFolder should return a URL with path and openInNewWindow', async () => {
    const url = vscodium.openFolder({
      path: '/etc',
      openInNewWindow: true,
    })
    expect(url).toBe('vscodium://file/etc?windowId=_blank')
  })

  test('openFolder should return a URL with path', async () => {
    const url = vscodium.openFolder({
      path: '/etc',
    })
    expect(url).toBe('vscodium://file/etc')
  })

  test('openSettings should return a URL', async () => {
    const url = vscodium.openSettings()
    expect(url).toBe('vscodium://settings')
  })

  test('openSettings should return a URL with openInNewWindow', async () => {
    const url = vscodium.openSettings({
      openInNewWindow: true,
    })
    expect(url).toBe('vscodium://settings?windowId=_blank')
  })

  test('openSettings should return a URL with path', async () => {
    const url = vscodium.openSettings({
      path: 'terminal.integrated.suggest.enabled',
    })
    expect(url).toBe('vscodium://settings/terminal.integrated.suggest.enabled')
  })

  test('openRemote should return a URL with type, host, and path', async () => {
    const url = vscodium.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
    })
    expect(url).toBe('vscodium://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project')
  })

  test('openRemote should return a URL with type, host, path and openInNewWindow', async () => {
    const url = vscodium.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
      openInNewWindow: true,
    })
    expect(url).toBe('vscodium://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project?windowId=_blank')
  })

  test('cloneProject should return a URL with repo', async () => {
    const url = vscodium.cloneProject({
      repo: 'https://github.com/zhensherlock/protocol-launcher',
    })
    expect(url).toBe('vscodium://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Fzhensherlock%2Fprotocol-launcher')
  })
})
