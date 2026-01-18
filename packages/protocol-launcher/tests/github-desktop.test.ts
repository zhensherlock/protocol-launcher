import { describe, expect, test } from 'vitest'
import { githubDesktop } from '../src'

describe('github-desktop.ts', () => {
  test('openFile should return a URL with path', async () => {
    const url = githubDesktop.openFile({
      owner: 'zhensherlock',
      repo: 'protocol-launcher',
      branch: 'main',
      path: 'packages/shared/src/index.ts',
    })
    expect(url).toBe(
      'x-github-client://openRepo/https://github.com/zhensherlock/protocol-launcher?branch=main&filepath=packages/shared/src/index.ts',
    )
  })

  test('openRepo should return a URL with path', async () => {
    const url = githubDesktop.openRepo({
      owner: 'zhensherlock',
      repo: 'protocol-launcher',
      branch: 'main',
    })
    expect(url).toBe('x-github-client://openRepo/https://github.com/zhensherlock/protocol-launcher?branch=main')
  })
})
