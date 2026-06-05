import { describe, expect, test } from 'vitest'
import { iRealPro } from '../src'

describe('iRealPro', () => {
  test('should expose only the documented iReal Pro helpers', () => {
    expect(Object.keys(iRealPro).sort()).toEqual(['customChordChart', 'customChordChartPlaylist', 'search'])
  })

  test('search should launch the official song search URL and percent-encode the title', () => {
    const url = iRealPro.search({
      title: 'Song Title',
    })

    expect(url).toBe('irealb://search?Song%20Title')
  })

  test('search should encode reserved characters in the query component', () => {
    const url = iRealPro.search({
      title: 'Blue Bossa / Latin #1',
    })

    expect(url).toBe('irealb://search?Blue%20Bossa%20%2F%20Latin%20%231')
  })

  test('customChordChart should generate the official irealbook six-component URL shape', () => {
    const url = iRealPro.customChordChart({
      title: 'Song Title',
      composer: 'LastName FirstName',
      style: 'Style',
      key: 'Ab',
      chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
    })

    expect(url).toBe(
      'irealbook://Song%20Title%3DLastName%20FirstName%3DStyle%3DAb%3Dn%3DT44*A%7BC%5E7%20%7CA-7%20%7CD-9%20%7CG7%235%20%7D',
    )
  })

  test('customChordChart should preserve slash chord inversions like the official encoded example', () => {
    const url = iRealPro.customChordChart({
      title: 'Song Title',
      composer: 'LastName FirstName',
      style: 'Style',
      key: 'Ab',
      chordProgression: 'T44*A{C/E |C-7/Bb |C^7 Z}',
    })

    expect(url).toBe(
      'irealbook://Song%20Title%3DLastName%20FirstName%3DStyle%3DAb%3Dn%3DT44*A%7BC/E%20%7CC-7/Bb%20%7CC%5E7%20Z%7D',
    )
  })

  test('customChordChartPlaylist should append multiple songs into one official irealbook URL', () => {
    const url = iRealPro.customChordChartPlaylist({
      songs: [
        {
          title: 'Song 1',
          composer: 'LastName FirstName',
          style: 'Style',
          key: 'Ab',
          chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
        },
        {
          title: 'Song 2',
          composer: 'LastName FirstName',
          style: 'Style',
          key: 'Ab',
          chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
        },
        {
          title: 'Song 3',
          composer: 'LastName FirstName',
          style: 'Style',
          key: 'Ab',
          chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
        },
      ],
    })

    expect(url).toBe(
      'irealbook://Song%201%3DLastName%20FirstName%3DStyle%3DAb%3Dn%3DT44*A%7BC%5E7%20%7CA-7%20%7CD-9%20%7CG7%235%20%7D%3DSong%202%3DLastName%20FirstName%3DStyle%3DAb%3Dn%3DT44*A%7BC%5E7%20%7CA-7%20%7CD-9%20%7CG7%235%20%7D%3DSong%203%3DLastName%20FirstName%3DStyle%3DAb%3Dn%3DT44*A%7BC%5E7%20%7CA-7%20%7CD-9%20%7CG7%235%20%7D',
    )
  })

  test('customChordChartPlaylist should reject empty playlists', () => {
    expect(() =>
      iRealPro.customChordChartPlaylist({
        songs: [],
      }),
    ).toThrow('iReal Pro custom chord chart playlist requires at least one song.')
  })

  test('customChordChart should reject undocumented key signatures', () => {
    expect(() =>
      iRealPro.customChordChart({
        title: 'Song Title',
        composer: 'LastName FirstName',
        style: 'Style',
        key: 'H' as never,
        chordProgression: 'T44*A{C^7 |A-7 |D-9 |G7#5 }',
      }),
    ).toThrow('Unsupported iReal Pro key signature.')
  })

  test('customChordChart should reject field separators because the official format uses equals signs', () => {
    expect(() =>
      iRealPro.customChordChart({
        title: 'Song Title',
        composer: 'LastName FirstName',
        style: 'Style',
        key: 'Ab',
        chordProgression: 'T44*A{C^7 |<bad=value>G7#5 }',
      }),
    ).toThrow('iReal Pro custom chord chart fields cannot contain "=".')
  })
})
