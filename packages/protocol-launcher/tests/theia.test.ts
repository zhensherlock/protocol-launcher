import { describe, expect, test } from 'vitest'
import { theia } from '../src'

describe('theia', () => {
  test('open should return a URL with path', async () => {
    const url = theia.open()
    expect(url).toBe('theia://')
  })
})
