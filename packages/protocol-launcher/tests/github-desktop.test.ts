import { describe, expect, test } from 'vitest'
import { githubDesktop } from '../src'

describe('github-desktop', () => {
  test('openFile should return a URL with owner, repo and path', async () => {
    const url = githubDesktop.openFile({
      owner: 'zhensherlock',
      repo: 'protocol-launcher',
      path: 'packages/shared/src/index.ts',
    })
    expect(url).toBe(
      'x-github-client://openRepo/https://github.com/zhensherlock/protocol-launcher?filepath=packages/shared/src/index.ts',
    )
  })

  test('openFile should return a URL with owner, repo, branch, and path', async () => {
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

  test('openFile should return a URL with owner, repo, pr, and path', async () => {
    const url = githubDesktop.openFile({
      owner: 'zhensherlock',
      repo: 'protocol-launcher',
      pr: '3',
      path: 'packages/shared/src/index.ts',
    })
    expect(url).toBe(
      'x-github-client://openRepo/https://github.com/zhensherlock/protocol-launcher?pr=3&filepath=packages/shared/src/index.ts',
    )
  })

  test('openRepo should return a URL with owner and repo', async () => {
    const url = githubDesktop.openRepo({
      owner: 'zhensherlock',
      repo: 'protocol-launcher',
    })
    expect(url).toBe('x-github-client://openRepo/https://github.com/zhensherlock/protocol-launcher')
  })

  test('openRepo should return a URL with owner, repo, and branch', async () => {
    const url = githubDesktop.openRepo({
      owner: 'zhensherlock',
      repo: 'protocol-launcher',
      branch: 'main',
    })
    expect(url).toBe('x-github-client://openRepo/https://github.com/zhensherlock/protocol-launcher?branch=main')
  })

  test('openRepo should return a URL with owner, repo, and pr', async () => {
    const url = githubDesktop.openRepo({
      owner: 'zhensherlock',
      repo: 'protocol-launcher',
      pr: '3',
    })
    expect(url).toBe('x-github-client://openRepo/https://github.com/zhensherlock/protocol-launcher?pr=3')
  })

  test('openRepo should return a URL with owner, repo, pr and branch', async () => {
    const url = githubDesktop.openRepo({
      owner: 'zhensherlock',
      repo: 'protocol-launcher',
      pr: '3',
      branch: 'pr/3',
    })
    expect(url).toBe('x-github-client://openRepo/https://github.com/zhensherlock/protocol-launcher?pr=3&branch=pr/3')
  })
})
