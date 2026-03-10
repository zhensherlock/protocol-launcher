import { describe, expect, test } from 'vitest'
import { fsnotes } from '../src'

describe('fsnotes', () => {
  test('open should return a URL', async () => {
    const url = fsnotes.open()
    expect(url).toBe('fsnotes://')
  })

  test('createNote should return a URL with payload', async () => {
    const url = fsnotes.createNote({
      title: 'hello',
      content: 'hello world',
      tags: '2026',
    })
    expect(url).toBe('nv://make/?title=hello&html=hello%20world&tags=2026')
  })

  test('createNote should return a URL', async () => {
    const url = fsnotes.createNote()
    expect(url).toBe('nv://make/')
  })

  test('findNotes should return a URL with payload', async () => {
    const url = fsnotes.findNotes({
      keyword: 'hello',
    })
    expect(url).toBe('fsnotes://find/hello')
  })

  test('openNote should return a URL with payload', async () => {
    const url = fsnotes.openNote({
      title: 'hello',
      tag: '2026',
    })
    expect(url).toBe('fsnotes://open/?title=hello&tag=2026')
  })

  test('openNote should return a URL', async () => {
    const url = fsnotes.openNote()
    expect(url).toBe('fsnotes://open/')
  })
})
