import { describe, expect, test } from 'vitest'
import { waze } from '../src'

describe('waze', () => {
  test('open should return the native Waze URL scheme', () => {
    const url = waze.open()

    expect(url).toBe('waze://')
  })

  test('search should return the Waze Deep Link search URL', () => {
    const url = waze.search({ q: '66 Acacia Avenue' })

    expect(url).toBe('https://waze.com/ul?q=66%20Acacia%20Avenue')
  })

  test('search should support the native Waze scheme when requested', () => {
    const url = waze.search({ q: 'Hawaii', protocol: 'waze' })

    expect(url).toBe('waze://?q=Hawaii')
  })

  test('navigateToLocation should return a Waze location navigation URL', () => {
    const url = waze.navigateToLocation({
      ll: '40.75889500,-73.98513100',
      zoom: 17,
    })

    expect(url).toBe('https://waze.com/ul?ll=40.75889500%2C-73.98513100&navigate=yes&zoom=17')
  })

  test('navigateToLocation should include utm_source when provided', () => {
    const url = waze.navigateToLocation({
      ll: '40.75889500,-73.98513100',
      utmSource: 'com.example.app',
    })

    expect(url).toBe('https://waze.com/ul?ll=40.75889500%2C-73.98513100&navigate=yes&utm_source=com.example.app')
  })

  test('navigateToFavorite should return a Waze favorite navigation URL', () => {
    const url = waze.navigateToFavorite({ favorite: 'work' })

    expect(url).toBe('https://waze.com/ul?favorite=work&navigate=yes')
  })

  test('showOnMap should return a Waze map zoom URL', () => {
    const url = waze.showOnMap({ z: 8 })

    expect(url).toBe('https://waze.com/ul?z=8')
  })

  test('showOnMap should return a Waze map URL with coordinates', () => {
    const url = waze.showOnMap({
      ll: '45.6906304,-120.810983',
      z: 10,
    })

    expect(url).toBe('https://waze.com/ul?ll=45.6906304%2C-120.810983&z=10')
  })

  test('searchAndNavigate should return a Waze search navigation URL', () => {
    const url = waze.searchAndNavigate({
      q: '66 Acacia Avenue',
      ll: '45.6906304,-120.810983',
    })

    expect(url).toBe('https://waze.com/ul?q=66%20Acacia%20Avenue&ll=45.6906304%2C-120.810983&navigate=yes')
  })
})
