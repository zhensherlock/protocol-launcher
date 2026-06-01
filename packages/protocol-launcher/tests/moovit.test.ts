import { describe, expect, test } from 'vitest'
import { moovit } from '../src'

describe('moovit', () => {
  test('nearby should return the documented nearby transit URL', () => {
    const url = moovit.nearby({
      lat: 40.758896,
      lon: -73.98513,
      partner_id: 'YOUR_APP_NAME',
    })

    expect(url).toBe('moovit://nearby?lat=40.758896&lon=-73.98513&partner_id=YOUR_APP_NAME')
  })

  test('nearby should omit optional coordinates', () => {
    const url = moovit.nearby({
      partner_id: 'YOUR_APP_NAME',
    })

    expect(url).toBe('moovit://nearby?partner_id=YOUR_APP_NAME')
  })

  test('directions should return the documented directions URL', () => {
    const url = moovit.directions({
      dest_lat: 40.758896,
      dest_lon: -73.98513,
      dest_name: 'Times Square',
      orig_lat: 40.735845,
      orig_lon: -73.990512,
      orig_name: 'Union Square',
      auto_run: true,
      date: '2019-04-01T18:30:00+02:00',
      partner_id: 'YOUR_APP_NAME',
    })

    expect(url).toBe(
      'moovit://directions?dest_lat=40.758896&dest_lon=-73.98513&dest_name=Times%20Square&orig_lat=40.735845&orig_lon=-73.990512&orig_name=Union%20Square&auto_run=true&date=2019-04-01T18%3A30%3A00%2B02%3A00&partner_id=YOUR_APP_NAME',
    )
  })

  test('directions should omit optional trip fields', () => {
    const url = moovit.directions({
      partner_id: 'YOUR_APP_NAME',
    })

    expect(url).toBe('moovit://directions?partner_id=YOUR_APP_NAME')
  })

  test('downloadLink should return the documented Moovit OneLink URL', () => {
    const url = moovit.downloadLink({
      c: 'YOUR_APP_NAME',
    })

    expect(url).toBe('https://moovit.onelink.me/3986059930?pid=Developers&c=YOUR_APP_NAME')
  })

  test('iosFallbackLink should return the documented iOS App Store fallback URL', () => {
    const url = moovit.iosFallbackLink({
      c: 'YOUR_APP_NAME',
      af_dp: 'moovit://nearby?lat=40.758896&lon=-73.98513&partner_id=YOUR_APP_NAME',
    })

    expect(url).toBe(
      'https://app.appsflyer.com/id498477945?pid=DL&c=YOUR_APP_NAME&af_dp=moovit%3A%2F%2Fnearby%3Flat%3D40.758896%26lon%3D-73.98513%26partner_id%3DYOUR_APP_NAME',
    )
  })

  test('androidFallbackLink should return the documented Android fallback URL', () => {
    const url = moovit.androidFallbackLink({
      c: 'YOUR_APP_NAME',
      af_dp: 'moovit://nearby?lat=40.758896&lon=-73.98513&partner_id=YOUR_APP_NAME',
    })

    expect(url).toBe(
      'https://app.appsflyer.com/com.tranzmate?pid=DL&c=YOUR_APP_NAME&af_dp=moovit%3A%2F%2Fnearby%3Flat%3D40.758896%26lon%3D-73.98513%26partner_id%3DYOUR_APP_NAME',
    )
  })
})
