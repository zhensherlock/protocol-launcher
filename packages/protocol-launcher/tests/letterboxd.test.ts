import { describe, expect, test } from 'vitest'
import { letterboxd } from '../src'

describe('letterboxd', () => {
  test('should expose only the documented Letterboxd iOS x-callback-url actions', () => {
    expect(Object.keys(letterboxd).sort()).toEqual(['addToWatchlist', 'log', 'search'])
  })

  test('search should return the documented search action URL', () => {
    const url = letterboxd.search({ query: 'Blade Runner', type: 'film' })

    expect(url).toBe('letterboxd://x-callback-url/search?query=Blade%20Runner&type=film')
  })

  test('search should omit optional values', () => {
    const url = letterboxd.search()

    expect(url).toBe('letterboxd://x-callback-url/search')
  })

  test('search should support documented x-callback parameters', () => {
    const url = letterboxd.search({
      query: 'Wong Kar Wai',
      type: 'contributor',
      xSuccess: 'shortcuts://x-callback-url/run-shortcut?name=Done',
      xCancel: 'shortcuts://x-callback-url/run-shortcut?name=Cancel',
      xError: 'shortcuts://x-callback-url/run-shortcut?name=Error',
    })

    expect(url).toBe(
      'letterboxd://x-callback-url/search?query=Wong%20Kar%20Wai&type=contributor&x-success=shortcuts%3A%2F%2Fx-callback-url%2Frun-shortcut%3Fname%3DDone&x-cancel=shortcuts%3A%2F%2Fx-callback-url%2Frun-shortcut%3Fname%3DCancel&x-error=shortcuts%3A%2F%2Fx-callback-url%2Frun-shortcut%3Fname%3DError',
    )
  })

  test('addToWatchlist should return the documented addToWatchlist action URL', () => {
    const url = letterboxd.addToWatchlist({ name: 'Heat' })

    expect(url).toBe('letterboxd://x-callback-url/addToWatchlist?name=Heat')
  })

  test('addToWatchlist should omit optional values', () => {
    const url = letterboxd.addToWatchlist()

    expect(url).toBe('letterboxd://x-callback-url/addToWatchlist')
  })

  test('log should return the documented log action URL with official parameters', () => {
    const url = letterboxd.log({
      name: 'Heat',
      date: '2026-06-10',
      rewatch: true,
      tags: 'crime,friendship',
      review: '<strong>Great</strong>',
      containsSpoilers: false,
      rating: 4.5,
      like: true,
    })

    expect(url).toBe(
      'letterboxd://x-callback-url/log?name=Heat&date=2026-06-10&rewatch=true&tags=crime%2Cfriendship&review=%3Cstrong%3EGreat%3C%2Fstrong%3E&containsSpoilers=false&rating=4.5&like=true',
    )
  })

  test('log should include the deprecated official shareOnFacebook parameter when requested', () => {
    const url = letterboxd.log({ name: 'Heat', review: 'Review text', shareOnFacebook: true })

    expect(url).toBe('letterboxd://x-callback-url/log?name=Heat&review=Review%20text&shareOnFacebook=true')
  })

  test('log should support the official no-rating value', () => {
    const url = letterboxd.log({ name: 'Heat', rating: 0 })

    expect(url).toBe('letterboxd://x-callback-url/log?name=Heat&rating=0')
  })

  test('log should omit optional values', () => {
    const url = letterboxd.log()

    expect(url).toBe('letterboxd://x-callback-url/log')
  })
})
