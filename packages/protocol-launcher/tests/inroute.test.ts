import { describe, expect, test } from 'vitest'
import { inRoute } from '../src'

describe('inRoute', () => {
  test('should expose only the documented inRoute URL scheme helpers', () => {
    expect(Object.keys(inRoute).sort()).toEqual(['coordinates', 'route', 'search', 'view'])
  })

  test('coordinates should serialize coordinate locations with action=opt before repeated loc parameters', () => {
    const url = inRoute.coordinates({
      optimize: true,
      locations: [
        { name: 'Lazy K’s', latitude: 47.648434, longitude: -121.914307 },
        { name: 'Greek Food', latitude: 47.739555, longitude: -121.985924 },
      ],
    })

    expect(url).toBe(
      'inroute://coordinates?action=opt&loc=Lazy%20K’s/47.648434/-121.914307&loc=Greek%20Food/47.739555/-121.985924',
    )
  })

  test('coordinates should omit action when waypoint optimization is not requested', () => {
    const url = inRoute.coordinates({
      locations: [{ name: 'Start Pin', latitude: '48.8582', longitude: '2.2946' }],
    })

    expect(url).toBe('inroute://coordinates?loc=Start%20Pin/48.8582/2.2946')
  })

  test('coordinates should encode slashes inside pin names while preserving loc separators', () => {
    const url = inRoute.coordinates({
      locations: [{ name: 'A/B Stop', latitude: '48.8582', longitude: '2.2946' }],
    })

    expect(url).toBe('inroute://coordinates?loc=A%2FB%20Stop/48.8582/2.2946')
  })

  test('search should use the official searches command and repeated name/search loc parameters', () => {
    const url = inRoute.search({
      optimize: true,
      locations: [
        { name: 'Lazy K’s', search: 'Lazy K’, Carnation WA 98014' },
        { name: 'Greek Food', search: '15410 Main St NE, Duvall WA 98019' },
      ],
    })

    expect(url).toBe(
      'inroute://searches?action=opt&loc=Lazy%20K’s/Lazy%20K’,%20Carnation%20WA%2098014&loc=Greek%20Food/15410%20Main%20St%20NE,%20Duvall%20WA%2098019',
    )
  })

  test('search should encode slashes inside search terms while preserving loc separators', () => {
    const url = inRoute.search({
      locations: [{ name: 'Cafe', search: 'Main St / 1st Ave' }],
    })

    expect(url).toBe('inroute://searches?loc=Cafe/Main%20St%20%2F%201st%20Ave')
  })

  test('view should return the documented geo query', () => {
    const url = inRoute.view({ geo: '48.8582,2.2946' })

    expect(url).toBe('inroute://view?geo=48.8582,2.2946')
  })

  test('route should return the documented geo query', () => {
    const url = inRoute.route({ geo: '48.8582,2.2946' })

    expect(url).toBe('inroute://route?geo=48.8582,2.2946')
  })

  test('all helpers should support the documented back_url return parameter', () => {
    expect(
      inRoute.coordinates({
        locations: [{ name: 'Eiffel Tower', latitude: '48.8582', longitude: '2.2946' }],
        backUrl: 'myapp://',
      }),
    ).toBe('inroute://coordinates?loc=Eiffel%20Tower/48.8582/2.2946&back_url=myapp%3A%2F%2F')
    expect(
      inRoute.search({
        locations: [{ name: 'Eiffel Tower', search: 'Champ de Mars, Paris' }],
        backUrl: 'myapp://',
      }),
    ).toBe('inroute://searches?loc=Eiffel%20Tower/Champ%20de%20Mars,%20Paris&back_url=myapp%3A%2F%2F')
    expect(inRoute.view({ geo: '48.8582,2.2946', backUrl: 'myapp://' })).toBe(
      'inroute://view?geo=48.8582,2.2946&back_url=myapp%3A%2F%2F',
    )
    expect(inRoute.route({ geo: '48.8582,2.2946', backUrl: 'myapp://' })).toBe(
      'inroute://route?geo=48.8582,2.2946&back_url=myapp%3A%2F%2F',
    )
  })
})
