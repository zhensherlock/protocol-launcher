import { describe, expect, test } from 'vitest'
import { kaleidoscope } from '../src'

describe('kaleidoscope', () => {
  test('open should return a URL', async () => {
    const url = kaleidoscope.open()
    expect(url).toBe('kaleidoscope://')
  })

  test('clipboard should return a URL with label', async () => {
    const url = kaleidoscope.clipboard({
      label: 'Clipboard',
    })
    expect(url).toBe('kaleidoscope://clipboard?label=Clipboard')
  })

  test('clipboard should return a URL', async () => {
    const url = kaleidoscope.clipboard()
    expect(url).toBe('kaleidoscope://clipboard')
  })

  test('compare should return a URL with label, previousPath, and latestPath', async () => {
    const url = kaleidoscope.compare({
      label: 'Compare',
      previousPath: '/Users/dev/Desktop/previous.md',
      latestPath: '/Users/dev/Desktop/latest.md',
    })
    expect(url).toBe('kaleidoscope://compare?label=Compare&/Users/dev/Desktop/previous.md&/Users/dev/Desktop/latest.md')
  })

  test('compare should return a URL with label, previousLabel, previousPath, latestLabel, and latestPath', async () => {
    const url = kaleidoscope.compare({
      label: 'Compare',
      previousLabel: 'Previous',
      previousPath: '/Users/dev/Desktop/previous.md',
      latestLabel: 'Latest',
      latestPath: '/Users/dev/Desktop/latest.md',
    })
    expect(url).toBe(
      'kaleidoscope://compare?label=Compare&Previous=/Users/dev/Desktop/previous.md&Latest=/Users/dev/Desktop/latest.md',
    )
  })

  test('history should return a URL with label and filePath', async () => {
    const url = kaleidoscope.history({
      label: 'Compare',
      filePath: '/Users/dev/Desktop/previous.md',
    })
    expect(url).toBe('kaleidoscope://history?/Users/dev/Desktop/previous.md&label=Compare')
  })

  test('history should return a URL with filePath', async () => {
    const url = kaleidoscope.history({
      filePath: '/Users/dev/Desktop/previous.md',
    })
    expect(url).toBe('kaleidoscope://history?/Users/dev/Desktop/previous.md')
  })
})
