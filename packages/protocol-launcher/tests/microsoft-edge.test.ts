import { describe, expect, test } from 'vitest'
import { microsoftEdge } from '../src'

describe('microsoftEdge', () => {
  test('open should return a URL', async () => {
    const url = microsoftEdge.open()
    expect(url).toBe('microsoft-edge:')
  })

  test('openUrl should return a URL with url', async () => {
    const url = microsoftEdge.openUrl({
      url: 'https://www.baidu.com/',
    })
    expect(url).toBe('microsoft-edge:?url=https://www.baidu.com/')
  })

  test('openUrl should return a URL with empty url', async () => {
    const url = microsoftEdge.openUrl({
      url: '',
    })
    expect(url).toBe('microsoft-edge:?url=')
  })
})
