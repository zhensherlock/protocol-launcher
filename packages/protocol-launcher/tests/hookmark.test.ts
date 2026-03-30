import { describe, expect, test } from 'vitest'
import { hookmark } from '../src'

describe('hookmark', () => {
  test('open should return a URL', async () => {
    const url = hookmark.open()
    expect(url).toBe('hook://')
  })

  test('openAddressBook should return a URL', async () => {
    const url = hookmark.openAddressBook()
    expect(url).toBe('hook://addressbook')
  })

  test('openEmail should return a URL with id', async () => {
    const url = hookmark.openEmail({
      id: '<CABc123xyz@mail.gmail.com>',
    })
    expect(url).toBe('hook://email/?id=%3CCABc123xyz%40mail.gmail.com%3E')
  })

  test('openFile should return a URL with path', async () => {
    const url = hookmark.openFile({
      path: '/Applications',
    })
    expect(url).toBe('hook://file/Applications')
  })

  test('openFile should return a URL with path and name', async () => {
    const url = hookmark.openFile({
      path: '/Applications',
      name: 'Applications',
    })
    expect(url).toBe('hook://file/Applications?n=Applications')
  })

  test('openNotes should return a URL', async () => {
    const url = hookmark.openNotes()
    expect(url).toBe('hook://notes')
  })

  test('openSearch should return a URL without query', async () => {
    const url = hookmark.openSearch({})
    expect(url).toBe('hook://search/')
  })

  test('openSearch should return a URL with query', async () => {
    const url = hookmark.openSearch({
      query: 'project',
    })
    expect(url).toBe('hook://search/?query=project')
  })

  test('openSpotify should return a URL', async () => {
    const url = hookmark.openSpotify()
    expect(url).toBe('hook://spotify')
  })
})
