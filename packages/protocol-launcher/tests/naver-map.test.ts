import { describe, expect, test } from 'vitest'
import { naverMap } from '../src'

describe('naverMap', () => {
  test('openMap should include only provided map parameters and appname', () => {
    const url = naverMap.openMap({
      lat: 37.56661,
      lng: 126.978388,
      zoom: 13,
      appname: 'com.example.myapp',
    })

    expect(url).toBe('nmap://map?lat=37.56661&lng=126.978388&zoom=13&appname=com.example.myapp')
  })

  test('openMap should return the documented no-parameter URL shape', () => {
    const url = naverMap.openMap({
      appname: 'com.example.myapp',
    })

    expect(url).toBe('nmap://map?&appname=com.example.myapp')
  })

  test('showPoint should build a place marker URL', () => {
    const url = naverMap.showPoint({
      lat: 37.56661,
      lng: 126.978388,
      name: '서울역',
      appname: 'com.example.myapp',
    })

    expect(url).toBe(
      'nmap://place?lat=37.56661&lng=126.978388&name=%EC%84%9C%EC%9A%B8%EC%97%AD&appname=com.example.myapp',
    )
  })

  test('search should build a place search URL', () => {
    const url = naverMap.search({
      query: '카페',
      appname: 'com.example.myapp',
    })

    expect(url).toBe('nmap://search?query=%EC%B9%B4%ED%8E%98&appname=com.example.myapp')
  })

  test('searchBus should build a bus search URL', () => {
    const url = naverMap.searchBus({
      query: 'M4101',
      appname: 'com.example.myapp',
    })

    expect(url).toBe('nmap://search/bus?query=M4101&appname=com.example.myapp')
  })

  test.each(['public', 'car', 'walk', 'bicycle'] as const)('route should build a documented %s route URL', mode => {
    const url = naverMap.route({
      mode,
      dlat: 37.5209436,
      dlng: 127.1230074,
      dname: '올림픽공원',
      appname: 'com.example.myapp',
    })

    expect(url).toBe(
      `nmap://route/${mode}?dlat=37.5209436&dlng=127.1230074&dname=%EC%98%AC%EB%A6%BC%ED%94%BD%EA%B3%B5%EC%9B%90&appname=com.example.myapp`,
    )
  })

  test('route should include documented start, destination, and waypoint parameters', () => {
    const url = naverMap.route({
      mode: 'car',
      slat: 37.56661,
      slng: 126.978388,
      sname: '시청',
      secoords: 'wgs84',
      dlat: 37.5209436,
      dlng: 127.1230074,
      dname: '올림픽공원',
      decoords: 'wgs84',
      v1lat: 37.517235,
      v1lng: 127.047325,
      v1name: '강남역',
      v1ecoords: 'wgs84',
      appname: 'com.example.myapp',
    })

    expect(url).toBe(
      'nmap://route/car?slat=37.56661&slng=126.978388&sname=%EC%8B%9C%EC%B2%AD&secoords=wgs84&dlat=37.5209436&dlng=127.1230074&dname=%EC%98%AC%EB%A6%BC%ED%94%BD%EA%B3%B5%EC%9B%90&decoords=wgs84&v1lat=37.517235&v1lng=127.047325&v1name=%EA%B0%95%EB%82%A8%EC%97%AD&v1ecoords=wgs84&appname=com.example.myapp',
    )
  })

  test('navigation should build the documented safe-driving URL shape', () => {
    const url = naverMap.navigation({
      appname: 'com.example.myapp',
    })

    expect(url).toBe('nmap://navigation?&appname=com.example.myapp')
  })

  test('navigation should include route destination parameters when provided', () => {
    const url = naverMap.navigation({
      dlat: 37.5209436,
      dlng: 127.1230074,
      dname: '올림픽공원',
      appname: 'com.example.myapp',
    })

    expect(url).toBe(
      'nmap://navigation?dlat=37.5209436&dlng=127.1230074&dname=%EC%98%AC%EB%A6%BC%ED%94%BD%EA%B3%B5%EC%9B%90&appname=com.example.myapp',
    )
  })
})
