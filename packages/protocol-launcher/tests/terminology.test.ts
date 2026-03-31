import { describe, expect, test } from 'vitest'
import { terminology } from '../src'

describe('terminology', () => {
  test('open should return a URL', async () => {
    const url = terminology.open()
    expect(url).toBe('terminology://')
  })

  test('lookup should return a URL with text', async () => {
    const url = terminology.lookup({
      text: 'automation',
    })
    expect(url).toBe('terminology:///lookup?text=automation')
  })

  test('lookup should return a URL with encoded text', async () => {
    const url = terminology.lookup({
      text: 'URL scheme',
    })
    expect(url).toBe('terminology:///lookup?text=URL%20scheme')
  })

  test('search should return a URL with q', async () => {
    const url = terminology.search({
      q: 'protocol',
    })
    expect(url).toBe('terminology:///search?q=protocol')
  })

  test('search should return a URL with encoded q', async () => {
    const url = terminology.search({
      q: 'deep link',
    })
    expect(url).toBe('terminology:///search?q=deep%20link')
  })
})
