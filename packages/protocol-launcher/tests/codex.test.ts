import { describe, expect, test } from 'vitest'
import { codex } from '../src'

describe('codex', () => {
  test('open should return a URL', async () => {
    const url = codex.open()
    expect(url).toBe('codex://')
  })

  test('openSettings should return a URL', async () => {
    const url = codex.openSettings()
    expect(url).toBe('codex://settings')
  })

  test('openThread should return a URL', async () => {
    const url = codex.openThread()
    expect(url).toBe('codex://thread/new')
  })
})
