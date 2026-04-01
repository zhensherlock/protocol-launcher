import { describe, expect, test } from 'vitest'
import { coda } from '../src'

describe('coda', () => {
  describe('open', () => {
    test('open should return a URL', () => {
      const url = coda.open()
      expect(url).toBe('coda://')
    })
  })

  describe('newFile', () => {
    test('newFile should return a URL without parameters', () => {
      const url = coda.newFile()
      expect(url).toBe('coda://x-callback-url/new')
    })

    test('newFile should return a URL with empty object', () => {
      const url = coda.newFile({})
      expect(url).toBe('coda://x-callback-url/new')
    })

    test('newFile should return a URL with name', () => {
      const url = coda.newFile({
        name: 'foo.txt',
      })
      expect(url).toBe('coda://x-callback-url/new?name=foo.txt')
    })

    test('newFile should return a URL with path', () => {
      const url = coda.newFile({
        path: 'Projects',
      })
      expect(url).toBe('coda://x-callback-url/new?path=Projects')
    })

    test('newFile should return a URL with text', () => {
      const url = coda.newFile({
        text: 'bar',
      })
      expect(url).toBe('coda://x-callback-url/new?text=bar')
    })

    test('newFile should return a URL with name and text', () => {
      const url = coda.newFile({
        name: 'foo.txt',
        text: 'bar',
      })
      expect(url).toBe('coda://x-callback-url/new?name=foo.txt&text=bar')
    })

    test('newFile should return a URL with name and path', () => {
      const url = coda.newFile({
        name: 'foo.txt',
        path: 'Projects',
      })
      expect(url).toBe('coda://x-callback-url/new?name=foo.txt&path=Projects')
    })

    test('newFile should return a URL with path and text', () => {
      const url = coda.newFile({
        path: 'Projects',
        text: 'bar',
      })
      expect(url).toBe('coda://x-callback-url/new?path=Projects&text=bar')
    })

    test('newFile should return a URL with all parameters', () => {
      const url = coda.newFile({
        name: 'foo.txt',
        path: 'Projects',
        text: 'bar',
      })
      expect(url).toBe('coda://x-callback-url/new?name=foo.txt&path=Projects&text=bar')
    })

    test('newFile should return a URL with encoded text', () => {
      const url = coda.newFile({
        name: 'test.txt',
        text: 'hello world',
      })
      expect(url).toBe('coda://x-callback-url/new?name=test.txt&text=hello%20world')
    })
  })

  describe('append', () => {
    test('append should return a URL without parameters', () => {
      const url = coda.append()
      expect(url).toBe('coda://x-callback-url/append')
    })

    test('append should return a URL with empty object', () => {
      const url = coda.append({})
      expect(url).toBe('coda://x-callback-url/append')
    })

    test('append should return a URL with name', () => {
      const url = coda.append({
        name: 'foo.txt',
      })
      expect(url).toBe('coda://x-callback-url/append?name=foo.txt')
    })

    test('append should return a URL with path', () => {
      const url = coda.append({
        path: 'Projects',
      })
      expect(url).toBe('coda://x-callback-url/append?path=Projects')
    })

    test('append should return a URL with text', () => {
      const url = coda.append({
        text: 'bar',
      })
      expect(url).toBe('coda://x-callback-url/append?text=bar')
    })

    test('append should return a URL with name and text', () => {
      const url = coda.append({
        name: 'foo.txt',
        text: 'bar',
      })
      expect(url).toBe('coda://x-callback-url/append?name=foo.txt&text=bar')
    })

    test('append should return a URL with name and path', () => {
      const url = coda.append({
        name: 'foo.txt',
        path: 'Projects',
      })
      expect(url).toBe('coda://x-callback-url/append?name=foo.txt&path=Projects')
    })

    test('append should return a URL with path and text', () => {
      const url = coda.append({
        path: 'Projects',
        text: 'bar',
      })
      expect(url).toBe('coda://x-callback-url/append?path=Projects&text=bar')
    })

    test('append should return a URL with all parameters', () => {
      const url = coda.append({
        name: 'foo.txt',
        path: 'Projects',
        text: 'bar',
      })
      expect(url).toBe('coda://x-callback-url/append?name=foo.txt&path=Projects&text=bar')
    })

    test('append should return a URL with encoded text', () => {
      const url = coda.append({
        name: 'test.txt',
        text: 'hello world',
      })
      expect(url).toBe('coda://x-callback-url/append?name=test.txt&text=hello%20world')
    })
  })

  describe('replace', () => {
    test('replace should return a URL without parameters', () => {
      const url = coda.replace()
      expect(url).toBe('coda://x-callback-url/replace')
    })

    test('replace should return a URL with empty object', () => {
      const url = coda.replace({})
      expect(url).toBe('coda://x-callback-url/replace')
    })

    test('replace should return a URL with name', () => {
      const url = coda.replace({
        name: 'foo.txt',
      })
      expect(url).toBe('coda://x-callback-url/replace?name=foo.txt')
    })

    test('replace should return a URL with path', () => {
      const url = coda.replace({
        path: 'Projects',
      })
      expect(url).toBe('coda://x-callback-url/replace?path=Projects')
    })

    test('replace should return a URL with text', () => {
      const url = coda.replace({
        text: 'bar',
      })
      expect(url).toBe('coda://x-callback-url/replace?text=bar')
    })

    test('replace should return a URL with name and text', () => {
      const url = coda.replace({
        name: 'foo.txt',
        text: 'bar',
      })
      expect(url).toBe('coda://x-callback-url/replace?name=foo.txt&text=bar')
    })

    test('replace should return a URL with name and path', () => {
      const url = coda.replace({
        name: 'foo.txt',
        path: 'Projects',
      })
      expect(url).toBe('coda://x-callback-url/replace?name=foo.txt&path=Projects')
    })

    test('replace should return a URL with path and text', () => {
      const url = coda.replace({
        path: 'Projects',
        text: 'bar',
      })
      expect(url).toBe('coda://x-callback-url/replace?path=Projects&text=bar')
    })

    test('replace should return a URL with all parameters', () => {
      const url = coda.replace({
        name: 'foo.txt',
        path: 'Projects',
        text: 'bar',
      })
      expect(url).toBe('coda://x-callback-url/replace?name=foo.txt&path=Projects&text=bar')
    })

    test('replace should return a URL with encoded text', () => {
      const url = coda.replace({
        name: 'test.txt',
        text: 'hello world',
      })
      expect(url).toBe('coda://x-callback-url/replace?name=test.txt&text=hello%20world')
    })
  })
})
