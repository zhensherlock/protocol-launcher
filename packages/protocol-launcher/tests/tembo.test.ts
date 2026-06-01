import { describe, expect, test } from 'vitest'
import { tembo } from '../src'

describe('tembo', () => {
  test('should expose only Tembo documented search helpers', () => {
    expect(Object.keys(tembo).sort()).toEqual(['search', 'searchGroup', 'searchInLocation'])
  })

  test('search should return the official Tembo search URL with query text', () => {
    const url = tembo.search({ query: 'Houdah Software' })

    expect(url).toBe('tembo2://search?query=Houdah%20Software')
  })

  test('search should return the official example URL with query, location, and group', () => {
    const url = tembo.search({
      query: 'Houdah Software',
      location: '~/Documents',
      group: 'PDF',
    })

    expect(url).toBe('tembo2://search?query=Houdah%20Software&location=~/Documents&group=PDF')
  })

  test('search should support the official Alfred custom search q parameter', () => {
    const url = tembo.search({ q: 'Houdah Software' })

    expect(url).toBe('tembo2://search?q=Houdah%20Software')
  })

  test('searchInLocation should serialize one location', () => {
    const url = tembo.searchInLocation({
      query: 'Houdah Software',
      location: '~/Documents',
    })

    expect(url).toBe('tembo2://search?query=Houdah%20Software&location=~/Documents')
  })

  test('searchInLocation should repeat multiple location parameters', () => {
    const url = tembo.searchInLocation({
      query: 'Houdah Software',
      location: ['~/Documents', '~/Desktop'],
      group: 'PDF',
    })

    expect(url).toBe('tembo2://search?query=Houdah%20Software&location=~/Documents&location=~/Desktop&group=PDF')
  })

  test('searchGroup should require and serialize the official group value with query text', () => {
    const url = tembo.searchGroup({
      query: 'Houdah Software',
      group: 'IMAGES',
    })

    expect(url).toBe('tembo2://search?query=Houdah%20Software&group=IMAGES')
  })
})
