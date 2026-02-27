import { describe, expect, test } from 'vitest'
import { codeBuddy } from '../src'

describe('code-buddy', () => {
  test('open should return a URL', async () => {
    const url = codeBuddy.open()
    expect(url).toBe('codebuddy://getStarted')
  })

  test('openFile should return a URL with path', async () => {
    const url = codeBuddy.openFile({
      path: '/etc/hosts',
    })
    expect(url).toBe('codebuddy://file/etc/hosts')
  })

  test('openFile should return a URL with path, line, column, and openInNewWindow', async () => {
    const url = codeBuddy.openFile({
      path: '/etc/hosts',
      line: 1,
      column: 2,
      openInNewWindow: true,
    })
    expect(url).toBe('codebuddy://file/etc/hosts:1:2?windowId=_blank')
  })

  test('openFolder should return a URL with path and openInNewWindow', async () => {
    const url = codeBuddy.openFolder({
      path: '/etc',
      openInNewWindow: true,
    })
    expect(url).toBe('codebuddy://file/etc?windowId=_blank')
  })

  test('openFolder should return a URL with path', async () => {
    const url = codeBuddy.openFolder({
      path: '/etc',
    })
    expect(url).toBe('codebuddy://file/etc')
  })

  test('openSettings should return a URL', async () => {
    const url = codeBuddy.openSettings()
    expect(url).toBe('codebuddy://settings')
  })

  test('openSettings should return a URL with openInNewWindow', async () => {
    const url = codeBuddy.openSettings({
      openInNewWindow: true,
    })
    expect(url).toBe('codebuddy://settings?windowId=_blank')
  })

  test('openRemote should return a URL with type, host, and path', async () => {
    const url = codeBuddy.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
    })
    expect(url).toBe('codebuddy://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project')
  })

  test('openRemote should return a URL with type, host, path and openInNewWindow', async () => {
    const url = codeBuddy.openRemote({
      type: 'ssh-remote',
      host: 'root@172.18.105.209:22',
      path: '/code/my-project',
      openInNewWindow: true,
    })
    expect(url).toBe('codebuddy://vscode-remote/ssh-remote+root@172.18.105.209:22/code/my-project?windowId=_blank')
  })

  test('cloneProject should return a URL with repo', async () => {
    const url = codeBuddy.cloneProject({
      repo: 'https://github.com/zhensherlock/protocol-launcher',
    })
    expect(url).toBe('codebuddy://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2Fzhensherlock%2Fprotocol-launcher')
  })
})
