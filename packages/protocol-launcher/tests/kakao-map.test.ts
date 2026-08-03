import { describe, expect, test } from 'vitest'
import { kakaoMap } from '../src'

describe('kakaoMap', () => {
  test('open should return the Kakao Map open URL', () => {
    const url = kakaoMap.open()

    expect(url).toBe('kakaomap://open')
  })

  test('open should return a documented page URL', () => {
    const url = kakaoMap.open({ page: 'placeSearch' })

    expect(url).toBe('kakaomap://open?page=placeSearch')
  })

  test.each(['placeSearch', 'routeSearch', 'locationsharing'] as const)(
    'open should return the documented %s page URL',
    page => {
      const url = kakaoMap.open({ page })

      expect(url).toBe(`kakaomap://open?page=${page}`)
    },
  )

  test('open should return a documented layer URL', () => {
    const url = kakaoMap.open({ layer: 'skyview' })

    expect(url).toBe('kakaomap://open?layer=skyview')
  })

  test.each(['skyview', 'bike', 'traffic', 'hyperaccuratebus', 'airinfo', 'cctv'] as const)(
    'open should return the documented %s layer URL',
    layer => {
      const url = kakaoMap.open({ layer })

      expect(url).toBe(`kakaomap://open?layer=${layer}`)
    },
  )

  test('open should return the MobileWeb URL when requested', () => {
    const url = kakaoMap.open({ page: 'routeSearch', scheme: 'mobileWeb' })

    expect(url).toBe('http://m.map.kakao.com/scheme/open?page=routeSearch')
  })

  test('trendRanking should return the Kakao Map trend ranking URL', () => {
    const url = kakaoMap.trendRanking()

    expect(url).toBe('kakaomap://open?page=placerank&center=map')
  })

  test('trendRanking should use the documented HTTPS MobileWeb URL', () => {
    const url = kakaoMap.trendRanking({ scheme: 'mobileWeb' })

    expect(url).toBe('https://m.map.kakao.com/scheme/open?page=placerank&center=map')
  })

  test('look should return a coordinate URL', () => {
    const url = kakaoMap.look({ p: '37.3952969470752,127.110449292622' })

    expect(url).toBe('kakaomap://look?p=37.3952969470752%2C127.110449292622')
  })

  test('look should return the MobileWeb coordinate URL when requested', () => {
    const url = kakaoMap.look({ p: '37.3952969470752,127.110449292622', scheme: 'mobileWeb' })

    expect(url).toBe('http://m.map.kakao.com/scheme/look?p=37.3952969470752%2C127.110449292622')
  })

  test('place should return a place ID URL', () => {
    const url = kakaoMap.place({ id: '18577297' })

    expect(url).toBe('kakaomap://place?id=18577297')
  })

  test('search should return a keyword search URL with a center coordinate', () => {
    const url = kakaoMap.search({
      q: '맛집',
      p: '37.3952,127.11044',
    })

    expect(url).toBe('kakaomap://search?q=%EB%A7%9B%EC%A7%91&p=37.3952%2C127.11044')
  })

  test('search should return the MobileWeb keyword search URL when requested', () => {
    const url = kakaoMap.search({
      q: '맛집',
      p: '37.39529,127.11044',
      scheme: 'mobileWeb',
    })

    expect(url).toBe('http://m.map.kakao.com/scheme/search?q=%EB%A7%9B%EC%A7%91&p=37.39529%2C127.11044')
  })

  test('route should return a car route URL without waypoints', () => {
    const url = kakaoMap.route({
      sp: '37.39529,127.11044',
      ep: '37.49795,127.02763',
      by: 'car',
    })

    expect(url).toBe('kakaomap://route?sp=37.39529%2C127.11044&ep=37.49795%2C127.02763&by=car')
  })

  test('route should return a route URL with documented waypoint keys', () => {
    const url = kakaoMap.route({
      sp: '37.40205,127.10821',
      vp: '37.39424,127.11030',
      ep: '37.39529,127.11044',
      by: 'foot',
    })

    expect(url).toBe('kakaomap://route?sp=37.40205%2C127.10821&vp=37.39424%2C127.11030&ep=37.39529%2C127.11044&by=foot')
  })

  test('route should return the MobileWeb route URL when requested', () => {
    const url = kakaoMap.route({
      sp: '37.39529,127.11044',
      ep: '37.49795,127.02763',
      by: 'car',
      scheme: 'mobileWeb',
    })

    expect(url).toBe('http://m.map.kakao.com/scheme/route?sp=37.39529%2C127.11044&ep=37.49795%2C127.02763&by=car')
  })

  test('route should reject public transit waypoints', () => {
    expect(() =>
      kakaoMap.route({
        sp: '37.40205,127.10821',
        vp: '37.39424,127.11030',
        ep: '37.39529,127.11044',
        by: 'publictransit',
      }),
    ).toThrow('Kakao Map public transit routes do not support waypoints.')
  })

  test('roadView should return a Road View URL', () => {
    const url = kakaoMap.roadView({ p: '37.39529,127.11044' })

    expect(url).toBe('kakaomap://roadView?p=37.39529%2C127.11044')
  })

  test('roadView should return the MobileWeb Road View URL when requested', () => {
    const url = kakaoMap.roadView({ p: '37.39529,127.11044', scheme: 'mobileWeb' })

    expect(url).toBe('http://m.map.kakao.com/scheme/roadView?p=37.39529%2C127.11044')
  })
})
