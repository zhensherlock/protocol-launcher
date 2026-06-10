import { describe, expect, test } from 'vitest'
import { yandexNavigator } from '../src'

describe('yandexNavigator', () => {
  test('open should return the Yandex Navigator URL scheme', () => {
    const url = yandexNavigator.open()

    expect(url).toBe('yandexnavi://')
  })

  test('buildRoute should build a route from point A to point B', () => {
    const url = yandexNavigator.buildRoute({
      lat_from: '55.74',
      lon_from: '37.60',
      lat_to: '55.76',
      lon_to: '37.64',
    })

    expect(url).toBe('yandexnavi://build_route_on_map?lat_from=55.74&lon_from=37.60&lat_to=55.76&lon_to=37.64')
  })

  test('buildRoute should build a route from the current location', () => {
    const url = yandexNavigator.buildRoute({
      lat_to: '55.70',
      lon_to: '37.64',
    })

    expect(url).toBe('yandexnavi://build_route_on_map?lat_to=55.70&lon_to=37.64')
  })

  test('buildRoute should serialize intermediate route points', () => {
    const url = yandexNavigator.buildRoute({
      lat_from: '55.75',
      lon_from: '37.58',
      lat_to: '55.75',
      lon_to: '37.64',
      via: [{ lat: '55.75', lon: '37.62' }],
    })

    expect(url).toBe(
      'yandexnavi://build_route_on_map?lat_from=55.75&lon_from=37.58&lat_to=55.75&lon_to=37.64&lat_via_0=55.75&lon_via_0=37.62',
    )
  })

  test('search should use the documented map_search path', () => {
    const url = yandexNavigator.search({ text: 'заправка' })

    expect(url).toBe('yandexnavi://map_search?text=%D0%B7%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BA%D0%B0')
  })

  test('search should encode reserved characters', () => {
    const url = yandexNavigator.search({ text: 'cash&carry' })

    expect(url).toBe('yandexnavi://map_search?text=cash%26carry')
  })

  test('showPoint should show a point with documented options', () => {
    const url = yandexNavigator.showPoint({
      lat: 55.77,
      lon: 37.44,
      zoom: 12,
      'no-balloon': 0,
      desc: 'кафе с wi-fi',
    })

    expect(url).toBe(
      'yandexnavi://show_point_on_map?lat=55.77&lon=37.44&zoom=12&no-balloon=0&desc=%D0%BA%D0%B0%D1%84%D0%B5%20%D1%81%20wi-fi',
    )
  })

  test('showPoint should omit optional values', () => {
    const url = yandexNavigator.showPoint({
      lat: 55.77,
      lon: 37.44,
    })

    expect(url).toBe('yandexnavi://show_point_on_map?lat=55.77&lon=37.44')
  })

  test('actions should include access-key signature parameters when provided', () => {
    const url = yandexNavigator.showPoint({
      lat: 55.75,
      lon: 37.64,
      zoom: 14,
      client: '007',
      signature: 'JYEYuBc7154+e/==',
    })

    expect(url).toBe(
      'yandexnavi://show_point_on_map?lat=55.75&lon=37.64&zoom=14&client=007&signature=JYEYuBc7154%2Be%2F%3D%3D',
    )
  })
})
