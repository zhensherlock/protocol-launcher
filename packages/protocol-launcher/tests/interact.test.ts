import { describe, expect, test } from 'vitest'
import { interact } from '../src'

describe('interact', () => {
  test('open should return a URL', async () => {
    const url = interact.open()
    expect(url).toBe('interact://x-callback-url/scratchpad')
  })

  test('scratchpad should return a URL without text', async () => {
    const url = interact.scratchpad({})
    expect(url).toBe('interact://x-callback-url/scratchpad')
  })

  test('scratchpad should return a URL with text', async () => {
    const url = interact.scratchpad({
      text: 'John Doe\njohn@example.com',
    })
    expect(url).toBe('interact://x-callback-url/scratchpad?text=John%20Doe%0Ajohn%40example.com')
  })

  test('scratchpad should return a URL with simple text', async () => {
    const url = interact.scratchpad({
      text: 'Hello World',
    })
    expect(url).toBe('interact://x-callback-url/scratchpad?text=Hello%20World')
  })
})
