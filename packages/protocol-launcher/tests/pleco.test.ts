import { describe, expect, test } from 'vitest'
import { pleco } from '../src'

describe('pleco', () => {
  describe('search', () => {
    test('should return a URL with search term', async () => {
      const url = pleco.search({
        q: '你好',
      })
      expect(url).toBe('plecoapi://x-callback-url/s?q=%E4%BD%A0%E5%A5%BD')
    })

    test('should return a URL with pinyin search', async () => {
      const url = pleco.search({
        q: 'nihao',
      })
      expect(url).toBe('plecoapi://x-callback-url/s?q=nihao')
    })

    test('should return a URL with x-source and x-success', async () => {
      const url = pleco.search({
        q: '你好',
        xSource: 'MyApp',
        xSuccess: 'myapp://success',
      })
      expect(url).toBe(
        'plecoapi://x-callback-url/s?q=%E4%BD%A0%E5%A5%BD&x-source=MyApp&x-success=myapp%3A%2F%2Fsuccess',
      )
    })
  })

  describe('definition', () => {
    test('should return a URL with headword', async () => {
      const url = pleco.definition({
        hw: '你好',
      })
      expect(url).toBe('plecoapi://x-callback-url/df?hw=%E4%BD%A0%E5%A5%BD')
    })

    test('should return a URL with headword and pinyin', async () => {
      const url = pleco.definition({
        hw: '你好',
        py: 'ni3hao3',
      })
      expect(url).toBe('plecoapi://x-callback-url/df?hw=%E4%BD%A0%E5%A5%BD&py=ni3hao3')
    })

    test('should return a URL with headword and sec tab', async () => {
      const url = pleco.definition({
        hw: '你好',
        sec: 'stroke',
      })
      expect(url).toBe('plecoapi://x-callback-url/df?hw=%E4%BD%A0%E5%A5%BD&sec=stroke')
    })

    test('should return a URL with all parameters', async () => {
      const url = pleco.definition({
        hw: '你好',
        py: 'ni3hao3',
        sec: 'chars',
        xSource: 'MyApp',
        xSuccess: 'myapp://success',
      })
      expect(url).toBe(
        'plecoapi://x-callback-url/df?hw=%E4%BD%A0%E5%A5%BD&py=ni3hao3&sec=chars&x-source=MyApp&x-success=myapp%3A%2F%2Fsuccess',
      )
    })
  })

  describe('clipboard', () => {
    test('should return a clipboard reader URL', async () => {
      const url = pleco.clipboard()
      expect(url).toBe('plecoapi://x-callback-url/clipboard')
    })
  })

  describe('importFlashcards', () => {
    test('should return a URL with flashcard list URL', async () => {
      const url = pleco.importFlashcards({
        u: 'https://example.com/flashcards.txt',
      })
      expect(url).toBe('plecoapi://x-callback-url/fl?u=https%3A%2F%2Fexample.com%2Fflashcards.txt')
    })

    test('should return a URL with x-source and x-success', async () => {
      const url = pleco.importFlashcards({
        u: 'https://example.com/flashcards.xml',
        xSource: 'MyApp',
        xSuccess: 'myapp://success',
      })
      expect(url).toBe(
        'plecoapi://x-callback-url/fl?u=https%3A%2F%2Fexample.com%2Fflashcards.xml&x-source=MyApp&x-success=myapp%3A%2F%2Fsuccess',
      )
    })

    test('should return a URL with all x-callback-url parameters', async () => {
      const url = pleco.importFlashcards({
        u: 'https://example.com/flashcards.txt',
        xSource: 'MyApp',
        xSuccess: 'myapp://success',
        xError: 'myapp://error',
        xCancel: 'myapp://cancel',
      })
      expect(url).toBe(
        'plecoapi://x-callback-url/fl?u=https%3A%2F%2Fexample.com%2Fflashcards.txt&x-source=MyApp&x-success=myapp%3A%2F%2Fsuccess&x-error=myapp%3A%2F%2Ferror&x-cancel=myapp%3A%2F%2Fcancel',
      )
    })
  })
})
