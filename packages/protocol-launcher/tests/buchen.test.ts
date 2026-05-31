import { describe, expect, test } from 'vitest'
import { buchen } from '../src'

describe('buchen', () => {
  test('should expose only actions documented by Buchen', () => {
    expect(Object.keys(buchen).sort()).toEqual(['addBookmark', 'addTag', 'goBookmarks', 'goFolders', 'goTags'])
  })

  test('addTag should return the official add tag URL', () => {
    const url = buchen.addTag({
      name: 'reading list',
    })

    expect(url).toBe('buchen://add-tag?name=reading%20list')
  })

  test('addBookmark should return the official add bookmark URL without browser', () => {
    const url = buchen.addBookmark({
      name: 'Protocol Launcher',
      url: 'https://www.example.com/',
    })

    expect(url).toBe('buchen://add?name=Protocol%20Launcher&url=https%3A%2F%2Fwww.example.com%2F')
  })

  test('addBookmark should include the optional official browser value', () => {
    const url = buchen.addBookmark({
      name: 'Protocol Launcher',
      url: 'https://www.example.com/search?q=url scheme',
      browser: 'firefox focus',
    })

    expect(url).toBe(
      'buchen://add?name=Protocol%20Launcher&url=https%3A%2F%2Fwww.example.com%2Fsearch%3Fq%3Durl%20scheme&browser=firefox%20focus',
    )
  })

  test('addBookmark should accept every official browser value exactly', () => {
    const browserOptions = [
      'safari',
      'edge',
      'icab mobile',
      'opera',
      'brave',
      'chrome',
      'firefox',
      'firefox focus',
      'duckduckgo',
      'quiche',
      'jayson',
    ] as const

    const urls = browserOptions.map(browser =>
      buchen.addBookmark({
        name: 'Example',
        url: 'https://www.example.com/',
        browser,
      }),
    )

    expect(urls).toEqual([
      'buchen://add?name=Example&url=https%3A%2F%2Fwww.example.com%2F&browser=safari',
      'buchen://add?name=Example&url=https%3A%2F%2Fwww.example.com%2F&browser=edge',
      'buchen://add?name=Example&url=https%3A%2F%2Fwww.example.com%2F&browser=icab%20mobile',
      'buchen://add?name=Example&url=https%3A%2F%2Fwww.example.com%2F&browser=opera',
      'buchen://add?name=Example&url=https%3A%2F%2Fwww.example.com%2F&browser=brave',
      'buchen://add?name=Example&url=https%3A%2F%2Fwww.example.com%2F&browser=chrome',
      'buchen://add?name=Example&url=https%3A%2F%2Fwww.example.com%2F&browser=firefox',
      'buchen://add?name=Example&url=https%3A%2F%2Fwww.example.com%2F&browser=firefox%20focus',
      'buchen://add?name=Example&url=https%3A%2F%2Fwww.example.com%2F&browser=duckduckgo',
      'buchen://add?name=Example&url=https%3A%2F%2Fwww.example.com%2F&browser=quiche',
      'buchen://add?name=Example&url=https%3A%2F%2Fwww.example.com%2F&browser=jayson',
    ])
  })

  test('goBookmarks should return the official bookmarks navigation URL', () => {
    const url = buchen.goBookmarks()

    expect(url).toBe('buchen://go-bookmarks')
  })

  test('goTags should return the official tags navigation URL', () => {
    const url = buchen.goTags()

    expect(url).toBe('buchen://go-tags')
  })

  test('goFolders should return the official folders navigation URL', () => {
    const url = buchen.goFolders()

    expect(url).toBe('buchen://go-folders')
  })
})
