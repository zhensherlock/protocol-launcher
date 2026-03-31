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
})
