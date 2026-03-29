import { describe, expect, test } from 'vitest'
import { equipdBible } from '../src'

describe('equipdBible', () => {
  test('open should return a URL', async () => {
    const url = equipdBible.open()
    expect(url).toBe('equipdbible://')
  })

  test('scripture should return a URL with full book name', async () => {
    const url = equipdBible.scripture({
      scripture: '2Timothy3:15,16',
    })
    expect(url).toBe('equipdbible://bible/2Timothy3:15,16')
  })

  test('scripture should return a URL with abbreviated book name', async () => {
    const url = equipdBible.scripture({
      scripture: '2Tim3:15-17',
    })
    expect(url).toBe('equipdbible://bible/2Tim3:15-17')
  })

  test('scripture should return a URL with short abbreviated book name', async () => {
    const url = equipdBible.scripture({
      scripture: '2Ti3:1,3,5-7',
    })
    expect(url).toBe('equipdbible://bible/2Ti3:1,3,5-7')
  })

  test('scripture should return a URL with Revelation', async () => {
    const url = equipdBible.scripture({
      scripture: 'Revelation21:3,4',
    })
    expect(url).toBe('equipdbible://bible/Revelation21:3,4')
  })

  test('scripture should return a URL for whole chapter', async () => {
    const url = equipdBible.scripture({
      scripture: '2Tim3:1-17',
    })
    expect(url).toBe('equipdbible://bible/2Tim3:1-17')
  })

  test('lookup should return a URL with scripture only', async () => {
    const url = equipdBible.lookup({
      scripture: '2Tim3:16',
    })
    expect(url).toBe('equipdbible://x-callback-url/lookup?scripture=2Tim3%3A16')
  })

  test('lookup should return a URL with x-source and x-success', async () => {
    const url = equipdBible.lookup({
      xSource: 'Your App Name',
      xSuccess: 'yourappname://',
      scripture: '2Tim3:16',
    })
    expect(url).toBe(
      'equipdbible://x-callback-url/lookup?x-source=Your%20App%20Name&x-success=yourappname%3A%2F%2F&scripture=2Tim3%3A16',
    )
  })

  test('lookup should return a URL with language', async () => {
    const url = equipdBible.lookup({
      scripture: 'John3:16',
      language: 'en',
    })
    expect(url).toBe('equipdbible://x-callback-url/lookup?scripture=John3%3A16&language=en')
  })

  test('lookup should return a URL with book, chapter and verses', async () => {
    const url = equipdBible.lookup({
      book: 40,
      chapter: 5,
      verses: '3,4',
    })
    expect(url).toBe('equipdbible://x-callback-url/lookup?book=40&chapter=5&verses=3%2C4')
  })

  test('lookup should return a URL with book as string', async () => {
    const url = equipdBible.lookup({
      book: '1',
      chapter: 1,
    })
    expect(url).toBe('equipdbible://x-callback-url/lookup?book=1&chapter=1')
  })

  test('lookup should return a URL with all parameters', async () => {
    const url = equipdBible.lookup({
      xSource: 'My App',
      xSuccess: 'myapp://',
      scripture: '2Tim3:16,17',
      language: 'fr',
      book: 40,
      chapter: 12,
      verses: '15,16,17',
    })
    expect(url).toBe(
      'equipdbible://x-callback-url/lookup?x-source=My%20App&x-success=myapp%3A%2F%2F&scripture=2Tim3%3A16%2C17&language=fr&book=40&chapter=12&verses=15%2C16%2C17',
    )
  })

  test('lookup should return a URL without parameters', async () => {
    const url = equipdBible.lookup({})
    expect(url).toBe('equipdbible://x-callback-url/lookup')
  })
})
