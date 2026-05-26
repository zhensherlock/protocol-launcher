import { describe, expect, test } from 'vitest'
import { googleMaps } from '../src'

describe('googleMaps', () => {
  test('open should return the base Google Maps URL', async () => {
    const url = googleMaps.open()

    expect(url).toBe('comgooglemaps://')
  })

  test('displayMap should return the base URL without options', async () => {
    const url = googleMaps.displayMap()

    expect(url).toBe('comgooglemaps://')
  })

  test('displayMap should return URL with center, zoom, and traffic view', async () => {
    const url = googleMaps.displayMap({
      center: '40.765819,-73.975866',
      zoom: 14,
      views: 'traffic',
    })

    expect(url).toBe('comgooglemaps://?center=40.765819,-73.975866&zoom=14&views=traffic')
  })

  test('displayMap should return URL with street view map mode', async () => {
    const url = googleMaps.displayMap({
      center: '46.414382,10.013988',
      mapmode: 'streetview',
    })

    expect(url).toBe('comgooglemaps://?center=46.414382,10.013988&mapmode=streetview')
  })

  test('displayMap should keep an empty views value to clear all views', async () => {
    const url = googleMaps.displayMap({ views: '' })

    expect(url).toBe('comgooglemaps://?views=')
  })

  test('search should return URL with query and center', async () => {
    const url = googleMaps.search({
      q: 'Pizza',
      center: '37.759748,-122.427135',
    })

    expect(url).toBe('comgooglemaps://?q=Pizza&center=37.759748,-122.427135')
  })

  test('search should return URL with multiple views and zoom', async () => {
    const url = googleMaps.search({
      q: 'Steamers Lane Santa Cruz, CA',
      center: '37.782652,-122.410126',
      views: ['satellite', 'traffic'],
      zoom: 15,
    })

    expect(url).toBe(
      'comgooglemaps://?q=Steamers+Lane+Santa+Cruz,+CA&center=37.782652,-122.410126&zoom=15&views=satellite,traffic',
    )
  })

  test('directions should return URL with transit mode', async () => {
    const url = googleMaps.directions({
      saddr: 'Google Inc, 8th Avenue, New York, NY',
      daddr: 'John F. Kennedy International Airport, Van Wyck Expressway, Jamaica, New York',
      directionsmode: 'transit',
    })

    expect(url).toBe(
      'comgooglemaps://?saddr=Google+Inc,+8th+Avenue,+New+York,+NY&daddr=John+F.+Kennedy+International+Airport,+Van+Wyck+Expressway,+Jamaica,+New+York&directionsmode=transit',
    )
  })

  test('directions should keep an empty starting point to use current location', async () => {
    const url = googleMaps.directions({
      saddr: '',
      daddr: 'John F. Kennedy International Airport',
      directionsmode: 'driving',
    })

    expect(url).toBe('comgooglemaps://?saddr=&daddr=John+F.+Kennedy+International+Airport&directionsmode=driving')
  })

  test('directions should return URL with center, walking mode, and zoom', async () => {
    const url = googleMaps.directions({
      saddr: '2025 Garcia Ave, Mountain View, CA, USA',
      daddr: 'Google, 1600 Amphitheatre Parkway, Mountain View, CA, United States',
      center: '37.423725,-122.0877',
      directionsmode: 'walking',
      zoom: 17,
    })

    expect(url).toBe(
      'comgooglemaps://?saddr=2025+Garcia+Ave,+Mountain+View,+CA,+USA&daddr=Google,+1600+Amphitheatre+Parkway,+Mountain+View,+CA,+United+States&center=37.423725,-122.0877&directionsmode=walking&zoom=17',
    )
  })

  test('openUrl should replace https scheme with comgooglemapsurl', async () => {
    const url = googleMaps.openUrl({
      url: 'https://www.google.com/maps/preview/@42.585444,13.007813,6z',
    })

    expect(url).toBe('comgooglemapsurl://www.google.com/maps/preview/@42.585444,13.007813,6z')
  })

  test('openUrl should replace https scheme for maps.google.com with comgooglemapsurl', async () => {
    const url = googleMaps.openUrl({
      url: 'https://maps.google.com/?q=@37.3161,-122.1836',
    })

    expect(url).toBe('comgooglemapsurl://maps.google.com/?q=@37.3161,-122.1836')
  })

  test('openUrl should support valid Google top-level country domains', async () => {
    const url = googleMaps.openUrl({
      url: 'https://www.google.de/maps/@42.585444,13.007813,6z',
    })

    expect(url).toBe('comgooglemapsurl://www.google.de/maps/@42.585444,13.007813,6z')
  })

  test('openUrl should throw for unsupported URL formats', async () => {
    expect(() =>
      googleMaps.openUrl({
        url: 'https://example.com/maps/@42.585444,13.007813,6z',
      }),
    ).toThrow('Unsupported Google Maps URL format.')
  })
})
