import { describe, expect, test } from 'vitest'
import { ftstreets } from '../src'

describe('ftstreets', () => {
  test('open should return a URL', async () => {
    const url = ftstreets.open()
    expect(url).toBe('ftstreets://')
  })

  test('view should return a URL with location', async () => {
    const url = ftstreets.view({
      location: { lat: 48.872112, lng: 2.332977 },
    })
    expect(url).toBe('ftstreets://?location=48.872112%2C2.332977')
  })

  test('view should return a URL with all parameters', async () => {
    const url = ftstreets.view({
      location: { lat: 48.872112, lng: 2.332977 },
      heading: 60,
      pitch: 7,
      title: 'Apple Store Opéra',
      pano: '4mgeFbSLLMaDGxKdfHeq7Q',
    })
    expect(url).toBe(
      'ftstreets://?location=48.872112%2C2.332977&heading=60&pitch=7&title=Apple%20Store%20Op%C3%A9ra&pano=4mgeFbSLLMaDGxKdfHeq7Q',
    )
  })

  test('view should handle negative coordinates', async () => {
    const url = ftstreets.view({
      location: { lat: -23.442896, lng: 151.906584 },
    })
    expect(url).toBe('ftstreets://?location=-23.442896%2C151.906584')
  })

  test('view should handle negative pitch', async () => {
    const url = ftstreets.view({
      location: { lat: 48.872112, lng: 2.332977 },
      pitch: -4,
    })
    expect(url).toBe('ftstreets://?location=48.872112%2C2.332977&pitch=-4')
  })

  test('view supports region, alternate scheme and clipboard callbacks', () => {
    expect(
      ftstreets.view({
        scheme: 'streets',
        location: { lat: 1, lng: 2 },
        region: { lat: 1, lng: 2, latSpan: 0, lngSpan: 0.5 },
        action: 'clipboard',
        xSuccess: 'myapp://done?a=1&b=2',
        xError: 'myapp://error',
      }),
    ).toBe(
      'streets://?location=1%2C2&region=1%2C2%2C0%2C0.5&action=clipboard&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2&x-error=myapp%3A%2F%2Ferror',
    )
  })
  test('view preserves supplied callbacks for the app to handle', () => {
    expect(ftstreets.view({ location: { lat: 1, lng: 2 }, xSuccess: 'myapp://done', xError: 'myapp://error' })).toBe(
      'ftstreets://?location=1%2C2&x-success=myapp%3A%2F%2Fdone&x-error=myapp%3A%2F%2Ferror',
    )
    expect(ftstreets.view({ location: { lat: 1, lng: 2 }, action: 'clipboard', xError: 'myapp://error' })).toBe(
      'ftstreets://?location=1%2C2&action=clipboard&x-error=myapp%3A%2F%2Ferror',
    )
  })
})
