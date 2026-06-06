import { describe, expect, test } from 'vitest'
import { yandexMaps } from '../src'

describe('yandexMaps', () => {
  test('openMap should return the Yandex Maps mobile app map URL without parameters', () => {
    const url = yandexMaps.openMap()

    expect(url).toBe('yandexmaps://maps.yandex.com/')
  })

  test('openMap should include documented map parameters', () => {
    const url = yandexMaps.openMap({
      ll: '37.619902,55.753716',
      z: 11,
      l: ['map', 'trf'],
    })

    expect(url).toBe('yandexmaps://maps.yandex.com/?ll=37.619902%2C55.753716&z=11&l=map%2Ctrf')
  })

  test('showPoint should add a placemark with map parameters', () => {
    const url = yandexMaps.showPoint({
      pt: '30.335429,59.944869',
      z: 18,
      l: 'map',
    })

    expect(url).toBe('yandexmaps://maps.yandex.com/?pt=30.335429%2C59.944869&z=18&l=map')
  })

  test('search should find objects in a specified map area', () => {
    const url = yandexMaps.search({
      ll: '30.310182,59.951059',
      z: 16,
      text: 'cafe with wi-fi',
    })

    expect(url).toBe('yandexmaps://maps.yandex.com/?ll=30.310182%2C59.951059&z=16&text=cafe%20with%20wi-fi')
  })

  test('openOrganizationCard should open an organization card', () => {
    const url = yandexMaps.openOrganizationCard({ oid: 1184371713 })

    expect(url).toBe('yandexmaps://maps.yandex.com/?oid=1184371713')
  })

  test('showWhatsHere should use the documented root URL and bracketed parameters', () => {
    const url = yandexMaps.showWhatsHere({
      point: '37.444075,55.776788',
      zoom: 17,
    })

    expect(url).toBe('yandexmaps://?whatshere[point]=37.444075%2C55.776788&whatshere[zoom]=17')
  })

  test('route should plot a public transport route', () => {
    const url = yandexMaps.route({
      rtext: '59.967870,30.242658~59.898495,30.299559',
      rtt: 'mt',
    })

    expect(url).toBe('yandexmaps://maps.yandex.com/?rtext=59.967870%2C30.242658~59.898495%2C30.299559&rtt=mt')
  })

  test('panorama should show a panorama from a specified point', () => {
    const url = yandexMaps.panorama({
      point: '37.444075,55.776788',
      direction: '228.970000,6.060547',
      span: '130.000000,71.919192',
    })

    expect(url).toBe(
      'yandexmaps://?panorama[point]=37.444075%2C55.776788&panorama[direction]=228.970000%2C6.060547&panorama[span]=130.000000%2C71.919192',
    )
  })

  test('androidGeo should use the documented Android geo scheme example shape', () => {
    const url = yandexMaps.androidGeo({
      coordinates: '47.6,-122.3',
      z: 11,
    })

    expect(url).toBe('geo:47.6,-122.3?z=11')
  })

  test('webMap should open the Yandex Maps web URL', () => {
    const url = yandexMaps.webMap({
      ll: '30.310182,59.951059',
      z: 12,
      l: 'map',
    })

    expect(url).toBe('https://yandex.ru/maps/?ll=30.310182%2C59.951059&z=12&l=map')
  })

  test('webShowPoints should add several documented placemarks', () => {
    const url = yandexMaps.webShowPoints({
      ll: '30.310182,59.951059',
      pt: '30.335429,59.944869~30.34127,59.89173',
      z: 12,
      l: 'map',
    })

    expect(url).toBe(
      'https://yandex.ru/maps/?ll=30.310182%2C59.951059&pt=30.335429%2C59.944869~30.34127%2C59.89173&z=12&l=map',
    )
  })

  test('webOpenOrganizationCard should use the documented organization path', () => {
    const url = yandexMaps.webOpenOrganizationCard({ oid: 1184371713 })

    expect(url).toBe('https://yandex.ru/maps/org/1184371713')
  })

  test('webRoute should support the web bicycle route type', () => {
    const url = yandexMaps.webRoute({
      rtext: '59.967870,30.242658~59.898495,30.299559',
      rtt: 'bc',
    })

    expect(url).toBe('https://yandex.ru/maps/?rtext=59.967870%2C30.242658~59.898495%2C30.299559&rtt=bc')
  })
})
