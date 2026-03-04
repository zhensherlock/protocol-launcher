import { describe, expect, test } from 'vitest'
import { appflowy } from '../src'

describe('appflowy', () => {
  test('open should return a URL with path', async () => {
    const url = appflowy.open()
    expect(url).toBe('appflowy-flutter://')
  })
})
