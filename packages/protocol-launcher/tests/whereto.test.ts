import { describe, expect, test } from 'vitest'
import { whereto } from '../src'

describe('whereto', () => {
  test('open should return a URL', async () => {
    const url = whereto.open()
    expect(url).toBe('whereto://')
  })

  test('search should return a URL with search parameter', async () => {
    const url = whereto.search({
      search: 'Bars',
    })
    expect(url).toBe('whereto://?search=Bars')
  })

  test('search should handle search with spaces', async () => {
    const url = whereto.search({
      search: 'Public Transport',
    })
    expect(url).toBe('whereto://?search=Public%20Transport')
  })

  test('searchAtLocation should return a URL with search and location', async () => {
    const url = whereto.searchAtLocation({
      search: 'Cafe',
      location: { lat: 37.332331, lon: -122.031219 },
    })
    expect(url).toBe('whereto://?search=Cafe&location=37.332331,-122.031219')
  })

  test('showPlace should return a URL with poi', async () => {
    const url = whereto.showPlace({
      poi: '7415861409383649399',
    })
    expect(url).toBe('whereto://?poi=7415861409383649399')
  })

  test('showLocation should return a URL with location', async () => {
    const url = whereto.showLocation({
      location: { lat: 37.332331, lon: -122.031219 },
    })
    expect(url).toBe('whereto://?location=37.332331,-122.031219')
  })

  test('showLocation should return a URL with location and title', async () => {
    const url = whereto.showLocation({
      location: { lat: 37.332331, lon: -122.031219 },
      title: 'Apple HQ',
    })
    expect(url).toBe('whereto://?location=37.332331,-122.031219&title=Apple%20HQ')
  })

  test('showDirections should return a URL with location and mode', async () => {
    const url = whereto.showDirections({
      location: { lat: 37.332331, lon: -122.031219 },
      mode: 'car',
    })
    expect(url).toBe('whereto://?location=37.332331,-122.031219&showDirections=car')
  })

  test('showDirections should return a URL with poi and mode', async () => {
    const url = whereto.showDirections({
      poi: '7415861409383649399',
      mode: 'bike',
    })
    expect(url).toBe('whereto://?poi=7415861409383649399&showDirections=bike')
  })

  test('showDirections should handle different modes', async () => {
    const url = whereto.showDirections({
      location: { lat: 37.332331, lon: -122.031219 },
      mode: 'pedestrian',
    })
    expect(url).toBe('whereto://?location=37.332331,-122.031219&showDirections=pedestrian')
  })

  test('showDirections should handle transit mode', async () => {
    const url = whereto.showDirections({
      location: { lat: 37.332331, lon: -122.031219 },
      mode: 'transit',
    })
    expect(url).toBe('whereto://?location=37.332331,-122.031219&showDirections=transit')
  })
})
