import { describe, expect, test } from 'vitest'
import { organicMaps } from '../src'

describe('organicMaps', () => {
  test('should expose only the documented Organic Maps helpers', () => {
    expect(Object.keys(organicMaps).sort()).toEqual([
      'androidIntent',
      'crosshair',
      'directions',
      'geo',
      'navigate',
      'route',
      'search',
      'showMap',
      'showSharedPoint',
    ])
  })

  test('showSharedPoint should return the documented custom scheme short-code URL', () => {
    const url = organicMaps.showSharedPoint({ code: 'o4B4pYZsRs' })

    expect(url).toBe('om://o4B4pYZsRs')
  })

  test('showSharedPoint should preserve the documented trailing slash variant', () => {
    const url = organicMaps.showSharedPoint({ code: 'o4B4pYZsRs', trailingSlash: true })

    expect(url).toBe('om://o4B4pYZsRs/')
  })

  test('showSharedPoint should support the documented custom scheme shared-point form with a title', () => {
    const url = organicMaps.showSharedPoint({
      code: 'o4B4pYZsRs',
      title: 'Zoo_Zürich',
    })

    expect(url).toBe('om://o4B4pYZsRs/Zoo_Zürich')
  })

  test('showSharedPoint should support the documented HTTPS shared-point form with a title', () => {
    const url = organicMaps.showSharedPoint({
      code: 'o4B4pYZsRs',
      title: 'Zoo_Zürich',
      linkType: 'https',
    })

    expect(url).toBe('https://omaps.app/o4B4pYZsRs/Zoo_Zürich')
  })

  test('showSharedPoint should support the documented HTTP shared-point form', () => {
    const url = organicMaps.showSharedPoint({ code: 'o4B4pYZsRs', linkType: 'http' })

    expect(url).toBe('http://omaps.app/o4B4pYZsRs')
  })

  test('showSharedPoint should support the documented HTTP shared-point form with a title', () => {
    const url = organicMaps.showSharedPoint({ code: 'o4B4pYZsRs', title: 'Zoo_Zürich', linkType: 'http' })

    expect(url).toBe('http://omaps.app/o4B4pYZsRs/Zoo_Zürich')
  })

  test('showMap should serialize one or more points with repeated ll and n parameters', () => {
    const url = organicMaps.showMap({
      points: [
        { ll: '22.17319,-159.65687', title: 'Kalalau Camping' },
        { ll: '22.17168,-159.66096', title: 'Dream Beach' },
        { ll: '22.17182,-159.65776' },
      ],
    })

    expect(url).toBe(
      'om://map?v=1&ll=22.17319,-159.65687&n=Kalalau%20Camping&ll=22.17168,-159.66096&n=Dream%20Beach&ll=22.17182,-159.65776',
    )
  })

  test('showMap should support the documented HTTPS form', () => {
    const url = organicMaps.showMap({
      points: [{ ll: '22.17319,-159.65687', title: 'Kalalau Camping' }],
      linkType: 'https',
    })

    expect(url).toBe('https://omaps.app/map?v=1&ll=22.17319,-159.65687&n=Kalalau%20Camping')
  })

  test('route should return the documented v1 vehicle route URL', () => {
    const url = organicMaps.route({
      start: { ll: '50.183933,8.942871', address: 'Start Point' },
      destination: { ll: '49.998912,8.278198', address: 'EndPoint' },
      type: 'vehicle',
    })

    expect(url).toBe(
      'om://route?v=1&sll=50.183933,8.942871&saddr=Start%20Point&dll=49.998912,8.278198&daddr=EndPoint&type=vehicle',
    )
  })

  test('route should support the documented transit route type and HTTPS form', () => {
    const url = organicMaps.route({
      start: { ll: '1.337412,103.696997', address: 'Start Point' },
      destination: { ll: '1.343107,103.732609', address: 'EndPoint' },
      type: 'transit',
      linkType: 'https',
    })

    expect(url).toBe(
      'https://omaps.app/route?v=1&sll=1.337412,103.696997&saddr=Start%20Point&dll=1.343107,103.732609&daddr=EndPoint&type=transit',
    )
  })

  test('route should support the documented pedestrian and bicycle route types', () => {
    expect(
      organicMaps.route({
        start: { ll: '47.395084,8.552692', address: 'Start Point' },
        destination: { ll: '47.38568,8.566878', address: 'EndPoint' },
        type: 'pedestrian',
      }),
    ).toBe(
      'om://route?v=1&sll=47.395084,8.552692&saddr=Start%20Point&dll=47.38568,8.566878&daddr=EndPoint&type=pedestrian',
    )
    expect(
      organicMaps.route({
        start: { ll: '47.325975,8.699972', address: 'Start Point' },
        destination: { ll: '47.374074,8.649849', address: 'EndPoint' },
        type: 'bicycle',
      }),
    ).toBe(
      'om://route?v=1&sll=47.325975,8.699972&saddr=Start%20Point&dll=47.374074,8.649849&daddr=EndPoint&type=bicycle',
    )
  })

  test('directions should return the documented v2 multi-stop route URL', () => {
    const url = organicMaps.directions({
      origin: '52.5200,13.4050',
      originName: 'Warehouse Berlin',
      destination: '52.5163,13.3777',
      destinationName: 'Customer',
      waypoints: ['52.5304,13.3850', '52.5450,13.3920'],
      waypointNames: ['Pickup 1', 'Pickup 2'],
      mode: 'drive',
    })

    expect(url).toBe(
      'om://v2/dir?origin=52.5200,13.4050&origin_name=Warehouse%20Berlin&destination=52.5163,13.3777&destination_name=Customer&waypoints=52.5304,13.3850|52.5450,13.3920&waypoint_names=Pickup%201|Pickup%202&mode=drive',
    )
  })

  test('directions should support the documented HTTPS v2 multi-stop route URL', () => {
    const url = organicMaps.directions({
      origin: '52.5200,13.4050',
      originName: 'Warehouse Berlin',
      destination: '52.5163,13.3777',
      destinationName: 'Customer',
      waypoints: ['52.5304,13.3850', '52.5450,13.3920'],
      waypointNames: ['Pickup 1', 'Pickup 2'],
      mode: 'drive',
      linkType: 'https',
    })

    expect(url).toBe(
      'https://omaps.app/v2/dir?origin=52.5200,13.4050&origin_name=Warehouse%20Berlin&destination=52.5163,13.3777&destination_name=Customer&waypoints=52.5304,13.3850|52.5450,13.3920&waypoint_names=Pickup%201|Pickup%202&mode=drive',
    )
  })

  test('navigate should return the documented v2 navigation URL with callbacks', () => {
    const url = organicMaps.navigate({
      origin: 'currentLocation',
      destination: '52.5163,13.3777',
      destinationName: 'Customer',
      waypoints: ['52.5304,13.3850', '52.5450,13.3920'],
      waypointCallbacks: ['delivery://stop/1', 'delivery://stop/2'],
      callback: 'delivery://route/complete',
      mode: 'drive',
    })

    expect(url).toBe(
      'om://v2/nav?origin=currentLocation&destination=52.5163,13.3777&destination_name=Customer&waypoints=52.5304,13.3850|52.5450,13.3920&waypoint_callbacks=delivery%3A%2F%2Fstop%2F1|delivery%3A%2F%2Fstop%2F2&callback=delivery%3A%2F%2Froute%2Fcomplete&mode=drive',
    )
  })

  test('navigate should support the documented HTTPS v2 navigation URL with callbacks', () => {
    const url = organicMaps.navigate({
      origin: 'currentLocation',
      destination: '52.5163,13.3777',
      destinationName: 'Customer',
      waypoints: ['52.5304,13.3850', '52.5450,13.3920'],
      waypointCallbacks: ['delivery://stop/1', 'delivery://stop/2'],
      callback: 'delivery://route/complete',
      mode: 'drive',
      linkType: 'https',
    })

    expect(url).toBe(
      'https://omaps.app/v2/nav?origin=currentLocation&destination=52.5163,13.3777&destination_name=Customer&waypoints=52.5304,13.3850|52.5450,13.3920&waypoint_callbacks=delivery%3A%2F%2Fstop%2F1|delivery%3A%2F%2Fstop%2F2&callback=delivery%3A%2F%2Froute%2Fcomplete&mode=drive',
    )
  })

  test('search should return the documented search URL with center, locale, and query', () => {
    const url = organicMaps.search({ cll: '47.3813,8.5889', locale: 'de', query: 'Mame' })

    expect(url).toBe('om://search?cll=47.3813,8.5889&locale=de&query=Mame')
  })

  test('search should preserve the documented empty map flag', () => {
    const url = organicMaps.search({ cll: '47.3813,8.5889', query: 'restaurants', map: '' })

    expect(url).toBe('om://search?cll=47.3813,8.5889&query=restaurants&map=')
  })

  test('search should preserve the documented Unicode query form', () => {
    const url = organicMaps.search({ locale: 'ru', query: 'Цюрих' })

    expect(url).toBe('om://search?locale=ru&query=Цюрих')
  })

  test('search should support the documented query-only form', () => {
    const url = organicMaps.search({ query: 'Minsk' })

    expect(url).toBe('om://search?query=Minsk')
  })

  test('geo should return the documented point with title form', () => {
    const url = organicMaps.geo({ coordinates: '35.341714,33.32231', title: 'Custom Title' })

    expect(url).toBe('geo:35.341714,33.32231(Custom%20Title)')
  })

  test('geo should return the documented plus code search form', () => {
    const url = organicMaps.geo({ coordinates: '0,0', query: '87G7MXQ4+M5' })

    expect(url).toBe('geo:0,0?q=87G7MXQ4%2BM5')
  })

  test('geo should support documented altitude, uncertainty, and zoom forms', () => {
    expect(organicMaps.geo({ coordinates: '37.786971,-122.399677', altitude: 1000 })).toBe(
      'geo:37.786971,-122.399677,1000',
    )
    expect(organicMaps.geo({ coordinates: '37.786971,-122.399677', uncertainty: 35 })).toBe(
      'geo:37.786971,-122.399677;u=35',
    )
    expect(organicMaps.geo({ coordinates: '37.786971,-122.399677', zoom: 17 })).toBe('geo:37.786971,-122.399677?z=17')
  })

  test('crosshair should return the documented position chooser URL', () => {
    const url = organicMaps.crosshair({ cll: '47.3813,8.5889', appname: 'Google Maps' })

    expect(url).toBe('om://crosshair?cll=47.3813,8.5889&appname=Google%20Maps')
  })

  test('crosshair should support the documented HTTPS form', () => {
    const url = organicMaps.crosshair({ cll: '47.3813,8.5889', appname: 'Google Maps', linkType: 'https' })

    expect(url).toBe('https://omaps.app/crosshair?cll=47.3813,8.5889&appname=Google%20Maps')
  })

  test('androidIntent should return the documented Organic Maps Android intent', () => {
    const url = organicMaps.androidIntent()

    expect(url).toBe('intent://#Intent;package=app.organicmaps;scheme=om;end;')
  })

  test('androidIntent should support the documented beta package', () => {
    const url = organicMaps.androidIntent({ packageName: 'app.organicmaps.beta' })

    expect(url).toBe('intent://#Intent;package=app.organicmaps.beta;scheme=om;end;')
  })

  test('androidIntent should support the documented debug package', () => {
    const url = organicMaps.androidIntent({ packageName: 'app.organicmaps.debug' })

    expect(url).toBe('intent://#Intent;package=app.organicmaps.debug;scheme=om;end;')
  })
})
