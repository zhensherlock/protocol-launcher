import { describe, expect, test } from 'vitest'
import { codeBuddyChina } from '../src'

describe('code-buddy-cn', () => {
  test('open should return a URL', async () => {
    const url = codeBuddyChina.open()
    expect(url).toBe('codebuddycn://getStarted')
  })

  test('openExtension should return a URL with id', async () => {
    const url = codeBuddyChina.openExtension({
      id: 'esbenp.prettier-vscode',
    })
    expect(url).toBe('codebuddycn:extension/esbenp.prettier-vscode')
  })

  test('openFile should return a URL with path', async () => {
    const url = codeBuddyChina.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('codebuddycn://file/etc/hosts')
  })

  test('openFile should return a URL with path, line, column, and openInNewWindow', async () => {
    const url = codeBuddyChina.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
      openInNewWindow: true,
    })
    expect(url).toBe('codebuddycn://file/etc/hosts:1:2?windowId=_blank')
  })

  test('openFolder should return a URL with path and openInNewWindow', async () => {
    const url = codeBuddyChina.openFolder({
      path: '/etc',
      openInNewWindow: true,
    })
    expect(url).toBe('codebuddycn://file/etc?windowId=_blank')
  })

  test('openFolder should return a URL with path', async () => {
    const url = codeBuddyChina.openFolder({
      path: '/etc',
    })
    expect(url).toBe('codebuddycn://file/etc')
  })

  test('openSettings should return a URL', async () => {
    const url = codeBuddyChina.openSettings()
    expect(url).toBe('codebuddycn://settings')
  })

  test('openSettings should return a URL with openInNewWindow', async () => {
    const url = codeBuddyChina.openSettings({
      openInNewWindow: true,
    })
    expect(url).toBe('codebuddycn://settings?windowId=_blank')
  })

  test('openSettings should return a URL with path', async () => {
    const url = codeBuddyChina.openSettings({
      path: 'terminal.integrated.suggest.enabled',
    })
    expect(url).toBe('codebuddycn://settings/terminal.integrated.suggest.enabled')
  })

  test('openRemote should return a URL with type, host, and path', async () => {
    const url = codeBuddyChina.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
    })
    expect(url).toBe('codebuddycn://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project')
  })

  test('openRemote should return a URL with type, host, path and openInNewWindow', async () => {
    const url = codeBuddyChina.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
      openInNewWindow: true,
    })
    expect(url).toBe('codebuddycn://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project?windowId=_blank')
  })

  test('cloneProject should return a URL with repo', async () => {
    const url = codeBuddyChina.cloneProject({
      repo: 'https://github.com/zhensherlock/protocol-launcher',
    })
    expect(url).toBe('codebuddycn://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Fzhensherlock%2Fprotocol-launcher')
  })
})
