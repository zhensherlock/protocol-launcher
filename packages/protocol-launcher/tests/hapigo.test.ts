import { describe, expect, test } from 'vitest'
import { hapigo } from '../src'

describe('hapigo', () => {
  test('should expose only HapiGo documented URL scheme helpers', () => {
    expect(Object.keys(hapigo).sort()).toEqual(['searchApp', 'searchClipboard', 'searchFile', 'translate'])
  })

  test('searchApp should return the official app search URL', () => {
    const url = hapigo.searchApp({ query: 'hapigo' })

    expect(url).toBe('hapigo://open?extensionID=APP&query=hapigo')
  })

  test('searchFile should return the official file search URL', () => {
    const url = hapigo.searchFile({ query: 'pdf' })

    expect(url).toBe('hapigo://open?extensionID=FILE&query=pdf')
  })

  test('searchClipboard should return the official clipboard search URL', () => {
    const url = hapigo.searchClipboard({ query: 'request' })

    expect(url).toBe('hapigo://open?extensionID=CLIPBOARD&query=request')
  })

  test('translate should return the official translate URL', () => {
    const url = hapigo.translate({ query: 'app' })

    expect(url).toBe('hapigo://open?extensionID=TRANSLATE&query=app')
  })

  test('helpers should encode the query value', () => {
    const url = hapigo.searchApp({ query: 'HapiGo #1' })

    expect(url).toBe('hapigo://open?extensionID=APP&query=HapiGo%20%231')
  })
})
