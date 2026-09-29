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

  test('native new route supports plain text, folder and a new window', () => {
    expect(fsnotes.newNote({ title: 'A & B', txt: '# Agenda', html: 'ignored', folder: '工作', open: true })).toBe(
      'fsnotes://new/?title=A%20%26%20B&txt=%23%20Agenda&folder=%E5%B7%A5%E4%BD%9C&open=true',
    )
    expect(fsnotes.newNote()).toBe('fsnotes://new/')
    expect(fsnotes.newNote({ html: '<b>hello</b>', open: false })).toBe('fsnotes://new/?html=%3Cb%3Ehello%3C%2Fb%3E')
  })
  test('legacy create keeps nv compatibility and encodes title/tags', () => {
    expect(fsnotes.createNote({ title: 'A&B', content: 'ignored', txt: '', tags: 'work & home', open: true })).toBe(
      'nv://make/?title=A%26B&tags=work%20%26%20home&txt=&open=true',
    )
  })
  test('open supports appending text and escapes query delimiters', () => {
    expect(fsnotes.openNote({ title: 'A&B', txt: 'Next line' })).toBe('fsnotes://open/?title=A%26B&txt=Next%20line')
  })
  test('find encodes one path component and supports note identifiers', () => {
    expect(fsnotes.findNotes({ keyword: 'A/B ?#' })).toBe('fsnotes://find/A%2FB%20%3F%23')
    expect(fsnotes.findNotes({ keyword: 'hello', id: 'A&B' })).toBe('fsnotes://find/hello?id=A%26B')
  })
})
