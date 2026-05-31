import { describe, expect, test } from 'vitest'
import { forscore } from '../src'

describe('forscore', () => {
  describe('open', () => {
    test('open should return the official score filename URL', () => {
      const url = forscore.open({ path: 'My Score.pdf' })

      expect(url).toBe('forscore://open?path=My%20Score.pdf')
    })

    test('open should return the official score title URL', () => {
      const url = forscore.open({ score: 'My Score' })

      expect(url).toBe('forscore://open?score=My%20Score')
    })

    test('open should return the official setlist URL', () => {
      const url = forscore.open({ setlist: 'My Setlist' })

      expect(url).toBe('forscore://open?setlist=My%20Setlist')
    })

    test('open should support score, setlist, bookmark, and page together', () => {
      const url = forscore.open({
        setlist: 'My Setlist',
        score: 'My Score',
        bookmark: 'My Bookmark',
        page: 3,
      })

      expect(url).toBe('forscore://open?setlist=My%20Setlist&score=My%20Score&bookmark=My%20Bookmark&page=3')
    })

    test('open should match the official setlist and score example', () => {
      const url = forscore.open({
        setlist: 'My Setlist',
        score: 'My Score',
      })

      expect(url).toBe('forscore://open?setlist=My%20Setlist&score=My%20Score')
    })

    test('open should match the official bookmark and page examples', () => {
      expect(
        forscore.open({
          path: 'My Score.pdf',
          bookmark: 'My Bookmark',
        }),
      ).toBe('forscore://open?path=My%20Score.pdf&bookmark=My%20Bookmark')

      expect(
        forscore.open({
          score: 'My Score',
          bookmark: 'My Bookmark',
        }),
      ).toBe('forscore://open?score=My%20Score&bookmark=My%20Bookmark')

      expect(
        forscore.open({
          score: 'My Score',
          page: 3,
        }),
      ).toBe('forscore://open?score=My%20Score&page=3')

      expect(
        forscore.open({
          path: 'My Score.pdf',
          bookmark: 'My Bookmark',
          page: 3,
        }),
      ).toBe('forscore://open?path=My%20Score.pdf&bookmark=My%20Bookmark&page=3')
    })

    test('open should preserve both path and score so forScore can apply its documented precedence', () => {
      const url = forscore.open({
        path: 'My Score.pdf',
        score: 'My Score',
      })

      expect(url).toBe('forscore://open?path=My%20Score.pdf&score=My%20Score')
    })

    test('open should reject payloads missing the official required values', () => {
      expect(() => forscore.open({} as never)).toThrow(
        'forScore open requires at least one of path, score, setlist, or page.',
      )
    })
  })

  describe('service', () => {
    test('service should open Dropbox', () => {
      expect(forscore.service({ type: 'dropbox' })).toBe('forscore://service?type=dropbox')
    })

    test('service should include a path for Dropbox or Box', () => {
      const url = forscore.service({
        type: 'dropbox',
        path: 'Directory/Subdirectory',
      })

      expect(url).toBe('forscore://service?type=dropbox&path=Directory%2FSubdirectory')
    })

    test('service should open official content provider service types', () => {
      expect(forscore.service({ type: 'musicnotes' })).toBe('forscore://service?type=musicnotes')
      expect(forscore.service({ type: 'noteflight' })).toBe('forscore://service?type=noteflight')
      expect(forscore.service({ type: 'virtualsheetmusic' })).toBe('forscore://service?type=virtualsheetmusic')
      expect(forscore.service({ type: 'carlfischer' })).toBe('forscore://service?type=carlfischer')
      expect(forscore.service({ type: 'presser' })).toBe('forscore://service?type=presser')
      expect(forscore.service({ type: 'brilee' })).toBe('forscore://service?type=brilee')
      expect(forscore.service({ type: 'presto' })).toBe('forscore://service?type=presto')
    })

    test('service should reject content provider paths because forScore does not support them', () => {
      expect(() =>
        forscore.service({
          type: 'presto',
          path: 'Directory/Subdirectory',
        } as never),
      ).toThrow('forScore service paths are only supported for dropbox and box.')
    })
  })

  describe('action', () => {
    test('action should return official relative navigation URLs', () => {
      expect(forscore.action({ type: 'prevpage' })).toBe('forscore://action?type=prevpage')
      expect(forscore.action({ type: 'nextpage' })).toBe('forscore://action?type=nextpage')
      expect(forscore.action({ type: 'previtem' })).toBe('forscore://action?type=previtem')
      expect(forscore.action({ type: 'nextitem' })).toBe('forscore://action?type=nextitem')
      expect(forscore.action({ type: 'back' })).toBe('forscore://action?type=back')
      expect(forscore.action({ type: 'nowplaying' })).toBe('forscore://action?type=nowplaying')
    })
  })
})
