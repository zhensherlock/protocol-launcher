import { describe, expect, test } from 'vitest'
import { locusMap } from '../src'

describe('locusMap', () => {
  test('should expose only the documented Locus Actions helpers', () => {
    expect(Object.keys(locusMap).sort()).toEqual(['actions', 'downloadAction', 'eventAction'])
  })

  test('actions should convert an HTTPS XML file URL to the official locus-actions scheme', () => {
    const url = locusMap.actions({
      url: 'https://dl.dropbox.com/u/12579512/my_directory/test.xml',
    })

    expect(url).toBe('locus-actions://https/dl.dropbox.com/u/12579512/my_directory/test.xml')
  })

  test('actions should reject HTTP action file URLs because the official URL scheme example uses HTTPS', () => {
    expect(() =>
      locusMap.actions({
        url: 'http://example.com/path/to/actions.xml',
      }),
    ).toThrow('Unsupported Locus Map actions URL format.')
  })

  test('actions should reject URLs that are already prefixed', () => {
    expect(() =>
      locusMap.actions({
        url: 'locus-actions://https/example.com/path/to/actions.xml',
      }),
    ).toThrow('Unsupported Locus Map actions URL format.')
  })

  test('downloadAction should generate a download action XML document with size and date', () => {
    const xml = locusMap.downloadAction({
      source: {
        url: 'http://example.com/maps/map.tar',
        size: 22075830,
        date: '2012-06-29_19-11-54',
      },
      dest: '/maps/map.tar',
      after: 'refreshMap',
    })

    expect(xml).toBe(
      [
        '<?xml version="1.0" encoding="utf-8"?>',
        '<locusActions>',
        '  <download>',
        '    <source size="22075830" date="2012-06-29_19-11-54">',
        '      <![CDATA[http://example.com/maps/map.tar]]>',
        '    </source>',
        '    <dest><![CDATA[/maps/map.tar]]></dest>',
        '    <after>refreshMap</after>',
        '  </download>',
        '</locusActions>',
      ].join('\n'),
    )
  })

  test('downloadAction should join documented after-action combinations with a pipe', () => {
    const xml = locusMap.downloadAction({
      source: 'https://example.com/maps/map.zip',
      dest: '/maps/map.zip',
      after: ['extract', 'deleteSource', 'refreshMap'],
    })

    expect(xml).toBe(
      [
        '<?xml version="1.0" encoding="utf-8"?>',
        '<locusActions>',
        '  <download>',
        '    <source>',
        '      <![CDATA[https://example.com/maps/map.zip]]>',
        '    </source>',
        '    <dest><![CDATA[/maps/map.zip]]></dest>',
        '    <after>extract|deleteSource|refreshMap</after>',
        '  </download>',
        '</locusActions>',
      ].join('\n'),
    )
  })

  test('eventAction should generate a map vector event action XML document', () => {
    const xml = locusMap.eventAction({
      key: 'setMapVector',
      value: '/mapsVector/DownloadedMap.map',
    })

    expect(xml).toBe(
      [
        '<?xml version="1.0" encoding="utf-8"?>',
        '<locusActions>',
        '  <event>',
        '    <key>setMapVector</key>',
        '    <value><![CDATA[/mapsVector/DownloadedMap.map]]></value>',
        '  </event>',
        '</locusActions>',
      ].join('\n'),
    )
  })

  test('eventAction should generate a map vector theme event action XML document', () => {
    const xml = locusMap.eventAction({
      key: 'setMapVectorTheme',
      value: '/mapsVector/_themes/theme.xml',
    })

    expect(xml).toContain('<key>setMapVectorTheme</key>')
    expect(xml).toContain('<value><![CDATA[/mapsVector/_themes/theme.xml]]></value>')
  })

  test('downloadAction should reject CDATA terminators in values', () => {
    expect(() =>
      locusMap.downloadAction({
        source: 'https://example.com/maps/map.zip',
        dest: '/maps/]]>/map.zip',
        after: 'importData',
      }),
    ).toThrow('Locus Map action CDATA values cannot contain "]]>".')
  })
})
