import { describe, expect, it } from 'vitest'
import { zed } from '../src/'

describe('zed', () => {
  it('openAgent should return a URL', () => {
    expect(zed.openAgent()).toBe('zed://agent')
  })

  it('openAgent should return a URL with prompt', () => {
    expect(zed.openAgent({ prompt: 'hello world' })).toBe('zed://agent?prompt=hello%20world')
  })

  it('joinAgent should return a URL with id', () => {
    expect(zed.joinAgent({ id: '12345' })).toBe('zed://agent/shared/12345')
  })

  it('openExtension should return a URL with id', () => {
    expect(zed.openExtension({ id: 'html' })).toBe('zed://extension/html')
  })

  it('openFile should return a URL with path', () => {
    expect(zed.openFile({ path: '/etc/hosts' })).toBe('zed://file/etc/hosts')
  })

  it('openFile should return a URL with path, line, and column', () => {
    expect(zed.openFile({ path: '/etc/hosts', line: 10, column: 5 })).toBe('zed://file/etc/hosts:10:5')
  })

  it('openFolder should return a URL with path', () => {
    expect(zed.openFolder({ path: '/etc' })).toBe('zed://file/etc')
  })

  it('cloneProject should return a URL with repo', () => {
    expect(zed.cloneProject({ repo: 'https://github.com/zhensherlock/protocol-launcher' })).toBe(
      'zed://git/clone?repo=https%3A%2F%2Fgithub.com%2Fzhensherlock%2Fprotocol-launcher',
    )
  })

  it('openGitCommit should return a URL with sha and path', () => {
    expect(zed.openGitCommit({ sha: '739420c', path: '/Users/dev/Documents/protocol-launcher' })).toBe(
      'zed://git/commit/739420c?repo=/Users/dev/Documents/protocol-launcher',
    )
  })

  it('openRemote should return a URL with host', () => {
    expect(zed.openRemote({ host: 'root@172.18.105.209:22' })).toBe('zed://ssh/root@172.18.105.209:22/')
  })

  it('openSettings should return a URL', () => {
    expect(zed.openSettings()).toBe('zed://settings/')
  })
})
