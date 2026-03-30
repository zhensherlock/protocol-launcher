import { describe, expect, test } from 'vitest'
import { overcast } from '../src'

describe('overcast', () => {
  test('open should return a URL', async () => {
    const url = overcast.open()
    expect(url).toBe('overcast://')
  })

  test('add should return a URL with url', async () => {
    const url = overcast.add({
      url: 'https://example.com/podcast/rss',
    })
    expect(url).toBe('overcast://x-callback-url/add?url=https%3A%2F%2Fexample.com%2Fpodcast%2Frss')
  })

  test('add should return a URL with url and x-success', async () => {
    const url = overcast.add({
      url: 'https://example.com/podcast/rss',
      xSuccess: 'myapp://success',
    })
    expect(url).toBe(
      'overcast://x-callback-url/add?url=https%3A%2F%2Fexample.com%2Fpodcast%2Frss&x-success=myapp%3A%2F%2Fsuccess',
    )
  })
})
