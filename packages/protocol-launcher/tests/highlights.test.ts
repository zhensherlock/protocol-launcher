import { describe, expect, test } from 'vitest'
import { highlights } from '../src'

describe('highlights', () => {
  test('openFile should return the official Highlights file URL shape', () => {
    const url = highlights.openFile({
      path: '/Users/test.pdf',
    })

    expect(url).toBe('highlights://Users/test.pdf')
  })

  test('openFileAtPage should add the official page fragment', () => {
    const url = highlights.openFileAtPage({
      path: '/Users/test.pdf',
      page: 3,
    })

    expect(url).toBe('highlights://Users/test.pdf#page=3')
  })
})
