import { describe, expect, test } from 'vitest'
import { pincase } from '../src'

describe('pincase', () => {
  test('should expose only documented Pincase actions and official-mode helpers', () => {
    expect(Object.keys(pincase).sort()).toEqual(['addBookmark', 'open', 'openRecent', 'openTag', 'openUnread'])
  })

  test('addBookmark should return the official example URL', () => {
    const url = pincase.addBookmark({
      url: 'http://pincaseapp.com/',
      title: 'Pincase - A simple, elegant and powerful Pinboard.in client for iOS',
      noui: 'yes',
      later: 'yes',
    })

    expect(url).toBe(
      'pincaseapp://x-callback-url/add?url=http%3A%2F%2Fpincaseapp.com%2F&title=Pincase%20-%20A%20simple%2C%20elegant%20and%20powerful%20Pinboard.in%20client%20for%20iOS&noui=yes&later=yes',
    )
  })

  test('addBookmark should return a URL with the required bookmark URL only', () => {
    const url = pincase.addBookmark({
      url: 'https://www.example.com/',
    })

    expect(url).toBe('pincaseapp://x-callback-url/add?url=https%3A%2F%2Fwww.example.com%2F')
  })

  test('addBookmark should include documented optional parameters and callbacks', () => {
    const url = pincase.addBookmark({
      url: 'https://www.example.com/article?ref=url scheme',
      title: 'Example Article',
      private: 'no',
      toread: 'no',
      noui: 'no',
      xSuccess: 'myapp://success',
      xError: 'myapp://error',
      xCancel: 'myapp://cancel',
    })

    expect(url).toBe(
      'pincaseapp://x-callback-url/add?url=https%3A%2F%2Fwww.example.com%2Farticle%3Fref%3Durl%20scheme&title=Example%20Article&private=no&toread=no&noui=no&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ferror&x-cancel=myapp%3A%2F%2Fcancel',
    )
  })

  test('open should return the official launch URL without parameters', () => {
    const url = pincase.open()

    expect(url).toBe('pincaseapp://x-callback-url/open')
  })

  test('open should return the official public tag example URL', () => {
    const url = pincase.open({
      mode: 'public_tag',
      tag: 'iOS',
    })

    expect(url).toBe('pincaseapp://x-callback-url/open?mode=public_tag&tag=iOS')
  })

  test('open should accept every documented mode value exactly', () => {
    const modes = [
      'menu',
      'personal_unread',
      'personal_recent',
      'personal_tag',
      'public_popular',
      'public_recent',
      'public_japanese',
      'public_wikipedia',
      'public_fandom',
      'public_favorite_stream',
      'public_tag',
      'public_username',
    ] as const

    const urls = modes.map(mode => pincase.open({ mode }))

    expect(urls).toEqual([
      'pincaseapp://x-callback-url/open?mode=menu',
      'pincaseapp://x-callback-url/open?mode=personal_unread',
      'pincaseapp://x-callback-url/open?mode=personal_recent',
      'pincaseapp://x-callback-url/open?mode=personal_tag',
      'pincaseapp://x-callback-url/open?mode=public_popular',
      'pincaseapp://x-callback-url/open?mode=public_recent',
      'pincaseapp://x-callback-url/open?mode=public_japanese',
      'pincaseapp://x-callback-url/open?mode=public_wikipedia',
      'pincaseapp://x-callback-url/open?mode=public_fandom',
      'pincaseapp://x-callback-url/open?mode=public_favorite_stream',
      'pincaseapp://x-callback-url/open?mode=public_tag',
      'pincaseapp://x-callback-url/open?mode=public_username',
    ])
  })

  test('openUnread should return the official unread URL', () => {
    const url = pincase.openUnread()

    expect(url).toBe('pincaseapp://x-callback-url/open?mode=personal_unread')
  })

  test('openRecent should return the official recent URL', () => {
    const url = pincase.openRecent()

    expect(url).toBe('pincaseapp://x-callback-url/open?mode=personal_recent')
  })

  test('openTag should return a URL with the selected official tag mode', () => {
    const url = pincase.openTag({
      mode: 'personal_tag',
      tag: 'reading list',
    })

    expect(url).toBe('pincaseapp://x-callback-url/open?mode=personal_tag&tag=reading%20list')
  })

  test('openTag should support public_tag because the official tag parameter allows it', () => {
    const url = pincase.openTag({
      mode: 'public_tag',
      tag: 'iOS',
    })

    expect(url).toBe('pincaseapp://x-callback-url/open?mode=public_tag&tag=iOS')
  })
})
