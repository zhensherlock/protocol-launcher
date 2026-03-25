import { describe, expect, test } from 'vitest'
import { upic } from '../src'

describe('upic', () => {
  test('open should return a URL', async () => {
    const url = upic.open()
    expect(url).toBe('uPic://')
  })

  test('uploadFile should return a URL with filePath', async () => {
    const url = upic.uploadFile({
      filePath: '/Users/dev/Downloads/test.txt',
    })
    expect(url).toBe('uPic://files?/Users/dev/Downloads/test.txt')
  })
})
