import { describe, expect, test } from 'vitest'
import { dictCc } from '../src'

describe('dictCc', () => {
  describe('open', () => {
    test('should return base URL without parameters', async () => {
      const url = dictCc.open()
      expect(url).toBe('dictcc://')
    })

    test('should return plus version URL', async () => {
      const url = dictCc.open({ plus: true })
      expect(url).toBe('dictccplus://')
    })

    test('should return URL with word parameter', async () => {
      const url = dictCc.open({ word: 'hello' })
      expect(url).toBe('dictcc://?word=hello')
    })

    test('should return URL with language-pair parameter', async () => {
      const url = dictCc.open({ languagePair: 'de-en' })
      expect(url).toBe('dictcc://?language-pair=de-en')
    })

    test('should return URL with word and language-pair parameters', async () => {
      const url = dictCc.open({ word: 'hello', languagePair: 'de-en' })
      expect(url).toBe('dictcc://?word=hello&language-pair=de-en')
    })

    test('should return URL with all parameters', async () => {
      const url = dictCc.open({ word: 'hello', languagePair: 'de-en', newSearch: true })
      expect(url).toBe('dictcc://?word=hello&language-pair=de-en&newsearch=1')
    })

    test('should return plus version URL with parameters', async () => {
      const url = dictCc.open({ plus: true, word: 'hello', languagePair: 'en-de' })
      expect(url).toBe('dictccplus://?word=hello&language-pair=en-de')
    })
  })

  describe('search', () => {
    test('should return base search URL without parameters', async () => {
      const url = dictCc.search()
      expect(url).toBe('dictcc://')
    })

    test('should return search URL with word parameter', async () => {
      const url = dictCc.search({ word: 'world' })
      expect(url).toBe('dictcc://?word=world')
    })

    test('should return search URL with language-pair parameter', async () => {
      const url = dictCc.search({ languagePair: 'en-de' })
      expect(url).toBe('dictcc://?language-pair=en-de')
    })

    test('should return search URL with word and language-pair parameters', async () => {
      const url = dictCc.search({ word: 'world', languagePair: 'en-de' })
      expect(url).toBe('dictcc://?word=world&language-pair=en-de')
    })

    test('should return search URL with all parameters', async () => {
      const url = dictCc.search({ word: 'world', languagePair: 'en-de', newSearch: true })
      expect(url).toBe('dictcc://?word=world&language-pair=en-de&newsearch=1')
    })

    test('should return plus version search URL', async () => {
      const url = dictCc.search({ word: 'world', plus: true })
      expect(url).toBe('dictccplus://?word=world')
    })
  })
})
