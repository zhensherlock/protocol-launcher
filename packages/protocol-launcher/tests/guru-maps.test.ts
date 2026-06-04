import { describe, expect, test } from 'vitest'
import { guruMaps } from '../src'

describe('guruMaps', () => {
  test('open should return the base Guru Maps URL', () => {
    const url = guruMaps.open()

    expect(url).toBe('guru:')
  })

  test('open should include back_url when provided', () => {
    const url = guruMaps.open({ backUrl: 'https://gurumaps.app' })

    expect(url).toBe('guru:?back_url=https://gurumaps.app')
  })

  test('importFile should return the file import URL', () => {
    const url = guruMaps.importFile({
      url: 'https://gurumaps.app/example/feature_collection.geojson',
    })

    expect(url).toBe('guru://open?url=https://gurumaps.app/example/feature_collection.geojson')
  })

  test('importFile should match the official map source example', () => {
    const url = guruMaps.importFile({
      url: 'https://ms.gurumaps.app/ms/google/Google_Satellite_RU_HD.ms',
    })

    expect(url).toBe('guru://open?url=https://ms.gurumaps.app/ms/google/Google_Satellite_RU_HD.ms')
  })

  test('search should return URL with query and coord', () => {
    const url = guruMaps.search({
      q: 'Wybrzeże Kościuszkowskie 20 Warszawa',
      coord: '52.2297,21.0122',
    })

    expect(url).toBe('guru://search?q=Wybrze%C5%BCe%20Ko%C5%9Bciuszkowskie%2020%20Warszawa&coord=52.2297,21.0122')
  })

  test('search should include back_url when provided', () => {
    const url = guruMaps.search({
      q: 'Agrykola 1 Warszawa',
      backUrl: 'https://gurumaps.app',
    })

    expect(url).toBe('guru://search?q=Agrykola%201%20Warszawa&back_url=https://gurumaps.app')
  })

  test('search should match the official current-position example', () => {
    const url = guruMaps.search({ q: 'Agrykola 1 Warszawa' })

    expect(url).toBe('guru://search?q=Agrykola%201%20Warszawa')
  })

  test('navigate should return URL with finish only', () => {
    const url = guruMaps.navigate({ finish: '52.2297,21.0122' })

    expect(url).toBe('guru://nav?finish=52.2297,21.0122')
  })

  test('navigate should match the official start and finish example', () => {
    const url = guruMaps.navigate({
      start: '52.2297,21.0122',
      finish: '52.2397,21.0222',
    })

    expect(url).toBe('guru://nav?start=52.2297,21.0122&finish=52.2397,21.0222')
  })

  test('navigate should match the official single via example', () => {
    const url = guruMaps.navigate({
      start: '52.2297,21.0122',
      finish: '52.2397,21.0222',
      via: '52.2347,21.0172',
    })

    expect(url).toBe('guru://nav?start=52.2297,21.0122&finish=52.2397,21.0222&via=52.2347,21.0172')
  })

  test('navigate should match the official multiple via example', () => {
    const url = guruMaps.navigate({
      start: '52.2297,21.0122',
      via: ['52.2347,21.0172', '52.2765,21.234'],
      finish: '52.2397,21.0222',
    })

    expect(url).toBe('guru://nav?start=52.2297,21.0122&via=52.2347,21.0172&via=52.2765,21.234&finish=52.2397,21.0222')
  })

  test('navigate should match the official bicycle route example', () => {
    const url = guruMaps.navigate({
      start: '52.2297,21.0122',
      finish: '52.2397,21.0222',
      via: '52.2347,21.0172',
      mode: 'bicycle',
    })

    expect(url).toBe('guru://nav?start=52.2297,21.0122&finish=52.2397,21.0222&via=52.2347,21.0172&mode=bicycle')
  })

  test('navigate should match the official start navigation example', () => {
    const url = guruMaps.navigate({
      start: '52.2297,21.0122',
      finish: '52.2397,21.0222',
      via: '52.2347,21.0172',
      mode: 'bicycle',
      startNavigation: true,
    })

    expect(url).toBe(
      'guru://nav?start=52.2297,21.0122&finish=52.2397,21.0222&via=52.2347,21.0172&mode=bicycle&start_navigation=true',
    )
  })

  test('navigate should match the official back_url example', () => {
    const url = guruMaps.navigate({
      finish: '52.2297,21.0122',
      backUrl: 'https://gurumaps.app',
    })

    expect(url).toBe('guru://nav?finish=52.2297,21.0122&back_url=https://gurumaps.app')
  })

  test('navigate should match the official start navigation and back_url example', () => {
    const url = guruMaps.navigate({
      finish: '52.2297,21.0122',
      startNavigation: true,
      backUrl: 'https://gurumaps.app',
    })

    expect(url).toBe('guru://nav?finish=52.2297,21.0122&start_navigation=true&back_url=https://gurumaps.app')
  })

  test('navigate should repeat via parameters and include navigation options', () => {
    const url = guruMaps.navigate({
      start: '52.2297,21.0122',
      via: ['52.2347,21.0172', '52.2765,21.234'],
      finish: '52.2397,21.0222',
      mode: 'bicycle',
      startNavigation: true,
      backUrl: 'https://gurumaps.app',
    })

    expect(url).toBe(
      'guru://nav?start=52.2297,21.0122&finish=52.2397,21.0222&via=52.2347,21.0172&via=52.2765,21.234&mode=bicycle&start_navigation=true&back_url=https://gurumaps.app',
    )
  })

  test('navigate should keep start_navigation false when provided', () => {
    const url = guruMaps.navigate({
      finish: '52.2297,21.0122',
      startNavigation: false,
    })

    expect(url).toBe('guru://nav?finish=52.2297,21.0122&start_navigation=false')
  })

  test('recordTrack should omit action by default to use Guru Maps toggle behavior', () => {
    const url = guruMaps.recordTrack()

    expect(url).toBe('guru://recordTrack')
  })

  test('recordTrack should include the action when provided', () => {
    const url = guruMaps.recordTrack({ action: 'start' })

    expect(url).toBe('guru://recordTrack?action=start')
  })

  test('recordTrack should match the official stop and toggle examples', () => {
    expect(guruMaps.recordTrack({ action: 'stop' })).toBe('guru://recordTrack?action=stop')
    expect(guruMaps.recordTrack({ action: 'toggle' })).toBe('guru://recordTrack?action=toggle')
  })

  test('saveMarker should return base marker URL without options', () => {
    const url = guruMaps.saveMarker()

    expect(url).toBe('guru://saveMarker')
  })

  test('saveMarker should match the official name-only and coord-only examples', () => {
    expect(guruMaps.saveMarker({ name: 'MyMarker' })).toBe('guru://saveMarker?name=MyMarker')
    expect(guruMaps.saveMarker({ coord: '52.2297,21.0122' })).toBe('guru://saveMarker?coord=52.2297,21.0122')
  })

  test('saveMarker should include name and coord', () => {
    const url = guruMaps.saveMarker({
      name: 'MyMarker',
      coord: '52.2297,21.0122',
    })

    expect(url).toBe('guru://saveMarker?name=MyMarker&coord=52.2297,21.0122')
  })

  test('showPlace should return URL with place coordinates', () => {
    const url = guruMaps.showPlace({ coord: '52.2297,21.0122' })

    expect(url).toBe('guru://show?place=52.2297,21.0122')
  })

  test('showPlace should append zoom to place and include back_url', () => {
    const url = guruMaps.showPlace({
      coord: '52.2297,21.0122',
      zoom: 17,
      backUrl: 'https://gurumaps.app',
    })

    expect(url).toBe('guru://show?place=52.2297,21.0122,17&back_url=https://gurumaps.app')
  })

  test('showPlace should match the official back_url example', () => {
    const url = guruMaps.showPlace({
      coord: '52.2297,21.0122',
      backUrl: 'https://gurumaps.app',
    })

    expect(url).toBe('guru://show?place=52.2297,21.0122&back_url=https://gurumaps.app')
  })

  test('geo should return the supported geo scheme with coordinates', () => {
    const url = guruMaps.geo({ coord: '52.2297,21.0122' })

    expect(url).toBe('geo:52.2297,21.0122')
  })
})
