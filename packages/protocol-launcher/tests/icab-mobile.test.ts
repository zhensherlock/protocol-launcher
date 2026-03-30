import { describe, expect, test } from 'vitest'
import { icabMobile } from '../src'

describe('icabMobile', () => {
  test('open should return a URL', async () => {
    const url = icabMobile.open()
    expect(url).toBe('icabmobile://')
  })

  test('openUrl should return a URL with url', async () => {
    const url = icabMobile.openUrl({
      url: 'https://www.example.com/',
    })
    expect(url).toBe('icabmobile://x-callback-url/open?url=https%3A%2F%2Fwww.example.com%2F')
  })

  test('search should return a URL with query', async () => {
    const url = icabMobile.search({
      query: 'hello world',
    })
    expect(url).toBe('icabmobile://x-callback-url/search?query=hello%20world')
  })

  test('search should return a URL without query', async () => {
    const url = icabMobile.search()
    expect(url).toBe('icabmobile://x-callback-url/search')
  })

  test('addBookmark should return a URL with url and title', async () => {
    const url = icabMobile.addBookmark({
      url: 'https://www.example.com/',
      title: 'Example',
    })
    expect(url).toBe('icabmobile://x-callback-url/add-bookmark?url=https%3A%2F%2Fwww.example.com%2F&title=Example')
  })

  test('addBookmark should return a URL with url, title and folder', async () => {
    const url = icabMobile.addBookmark({
      url: 'https://www.example.com/',
      title: 'Example',
      folder: 'Favorites',
    })
    expect(url).toBe(
      'icabmobile://x-callback-url/add-bookmark?url=https%3A%2F%2Fwww.example.com%2F&title=Example&folder=Favorites',
    )
  })

  test('addBookmark should return a URL with url only', async () => {
    const url = icabMobile.addBookmark({
      url: 'https://www.example.com/',
    })
    expect(url).toBe('icabmobile://x-callback-url/add-bookmark?url=https%3A%2F%2Fwww.example.com%2F')
  })
})
