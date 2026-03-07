import { describe, expect, test } from 'vitest'
import { sourcetree } from '../src'

describe('sourcetree', () => {
  test('open should return a URL', async () => {
    const url = sourcetree.open()
    expect(url).toBe('sourcetree://')
  })

  test('cloneProject should return a URL with repo', async () => {
    const url = sourcetree.cloneProject({
      repo: 'https://github.com/zhensherlock/protocol-launcher',
    })
    expect(url).toBe('sourcetree://cloneRepo/https://github.com/zhensherlock/protocol-launcher')
  })
})
