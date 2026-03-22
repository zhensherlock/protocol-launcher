import { describe, expect, test } from 'vitest'
import { quark } from '../src'

describe('quark', () => {
  test('open should return a URL', async () => {
    const url = quark.open()
    expect(url).toBe('qklink://')
  })

  test('openLink should return a URL with www example', async () => {
    const url = quark.openLink({
      url: 'www.baidu.com',
    })
    expect(url).toBe('qklink://www.baidu.com')
  })

  test('openCloudDrive should return a URL', async () => {
    const url = quark.openCloudDrive()
    expect(url).toBe('qkclouddrive://save')
  })
})
