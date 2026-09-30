import { describe, expect, test } from 'vitest'
import { infuse } from '../src'

describe('infuse', () => {
  test('play should return the official x-callback-url with one URL', () => {
    const url = infuse.play({
      url: 'https://files.firecore.com/infuse/sample-5s-360p.mp4',
    })

    expect(url).toBe('infuse://x-callback-url/play?url=https%3A%2F%2Ffiles.firecore.com%2Finfuse%2Fsample-5s-360p.mp4')
  })

  test('play should support multiple URL, filename, sub, and callback entries', () => {
    const url = infuse.play({
      url: ['https://files.firecore.com/infuse/sample-5s-360p.mp4', 'https://files.firecore.com/infuse/mov_bbb.mp4'],
      filename: ['Inception-2010.mp4', 'Mad-Men-S01-E01.mp4'],
      sub: ['https://files.firecore.com/infuse/example.srt', 'https://files.firecore.com/infuse/example2.srt'],
      xSuccess: 'some-app://success',
      xError: 'some-app://error',
    })

    expect(url).toBe(
      'infuse://x-callback-url/play?url=https%3A%2F%2Ffiles.firecore.com%2Finfuse%2Fsample-5s-360p.mp4&filename=Inception-2010.mp4&sub=https%3A%2F%2Ffiles.firecore.com%2Finfuse%2Fexample.srt&url=https%3A%2F%2Ffiles.firecore.com%2Finfuse%2Fmov_bbb.mp4&filename=Mad-Men-S01-E01.mp4&sub=https%3A%2F%2Ffiles.firecore.com%2Finfuse%2Fexample2.srt&x-success=some-app%3A%2F%2Fsuccess&x-error=some-app%3A%2F%2Ferror',
    )
  })

  test('save should return the official x-callback-url and download flag', () => {
    const url = infuse.save({
      url: 'https://files.firecore.com/infuse/sample-5s-360p.mp4',
      download: 0,
      xSuccess: 'some-app://success',
      xError: 'some-app://error',
    })

    expect(url).toBe(
      'infuse://x-callback-url/save?url=https%3A%2F%2Ffiles.firecore.com%2Finfuse%2Fsample-5s-360p.mp4&download=0&x-success=some-app%3A%2F%2Fsuccess&x-error=some-app%3A%2F%2Ferror',
    )
  })

  test('save should support the official download value for saving and downloading', () => {
    const url = infuse.save({
      url: 'https://files.firecore.com/infuse/mov_bbb.mp4',
      download: 1,
    })

    expect(url).toBe(
      'infuse://x-callback-url/save?url=https%3A%2F%2Ffiles.firecore.com%2Finfuse%2Fmov_bbb.mp4&download=1',
    )
  })

  test('save should omit optional values that are not provided', () => {
    const url = infuse.save({
      url: 'https://files.firecore.com/infuse/mov_bbb.mp4',
    })

    expect(url).toBe('infuse://x-callback-url/save?url=https%3A%2F%2Ffiles.firecore.com%2Finfuse%2Fmov_bbb.mp4')
  })

  test('openMovie should return the official movie deep link', () => {
    const url = infuse.openMovie({ tmdbId: 12345 })

    expect(url).toBe('infuse://movie/12345')
  })

  test('openSeries should return the official series deep link', () => {
    const url = infuse.openSeries({ tmdbId: 12345 })

    expect(url).toBe('infuse://series/12345')
  })

  test('openSeason should return the official season deep link', () => {
    const url = infuse.openSeason({ tmdbId: 12345, seasonNumber: 1 })

    expect(url).toBe('infuse://series/12345-1')
  })

  test('openEpisode should return the official episode deep link', () => {
    const url = infuse.openEpisode({ tmdbId: 12345, seasonNumber: 1, episodeNumber: 2 })

    expect(url).toBe('infuse://series/12345-1-2')
  })
})

describe('documented URL updates', () => {
  test('play preserves a zero playback position', () => {
    expect(infuse.play({ url: 'https://example.com/video.mp4', position: 0 })).toBe(
      'infuse://x-callback-url/play?url=https%3A%2F%2Fexample.com%2Fvideo.mp4&position=0',
    )
  })

  test('play associates positions and metadata with their video', () => {
    expect(
      infuse.play({
        url: ['https://example.com/one.mp4', 'https://example.com/two.mp4'],
        position: [0, 6],
        filename: ['One.mp4', 'Two.mp4'],
        sub: ['https://example.com/one.srt'],
        xSuccess: 'some-app://success',
      }),
    ).toBe(
      'infuse://x-callback-url/play?url=https%3A%2F%2Fexample.com%2Fone.mp4&position=0&filename=One.mp4&sub=https%3A%2F%2Fexample.com%2Fone.srt&url=https%3A%2F%2Fexample.com%2Ftwo.mp4&position=6&filename=Two.mp4&x-success=some-app%3A%2F%2Fsuccess',
    )
  })

  test('openMovie supports the bare play flag', () => {
    expect(infuse.openMovie({ tmdbId: 1327819, play: true })).toBe('infuse://movie/1327819?play')
  })

  test('openSeries supports autoplay', () => {
    expect(infuse.openSeries({ tmdbId: 12345, play: true })).toBe('infuse://series/12345?play')
  })

  test('openSeason supports autoplay', () => {
    expect(infuse.openSeason({ tmdbId: 12345, seasonNumber: 1, play: true })).toBe('infuse://series/12345-1?play')
  })

  test('openEpisode supports autoplay', () => {
    expect(infuse.openEpisode({ tmdbId: 12345, seasonNumber: 1, episodeNumber: 2, play: true })).toBe(
      'infuse://series/12345-1-2?play',
    )
  })

  test('openMovie omits play when false', () => {
    expect(infuse.openMovie({ tmdbId: 12345, play: false })).toBe('infuse://movie/12345')
  })
})
