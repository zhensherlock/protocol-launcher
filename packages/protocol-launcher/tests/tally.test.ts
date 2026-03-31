import { describe, expect, test } from 'vitest'
import { tally } from '../src'

describe('tally', () => {
  describe('open', () => {
    test('should return open URL', () => {
      const url = tally.open()
      expect(url).toBe('tally://open')
    })
  })

  describe('get', () => {
    test('should return get URL with tallySet and tally', () => {
      const url = tally.get({
        tallySet: 'Daily Habits',
        tally: 'Exercise',
        'x-success': 'myapp://callback',
      })
      expect(url).toBe('tally://get?tallySet=Daily%20Habits&tally=Exercise&x-success=myapp%3A%2F%2Fcallback')
    })

    test('should return get URL with tallySetID and tallyID', () => {
      const url = tally.get({
        tallySetID: 'abc-123',
        tallyID: 'xyz-789',
        'x-success': 'myapp://callback',
        retParam: 'count',
      })
      expect(url).toBe('tally://get?tallySetID=abc-123&tallyID=xyz-789&retParam=count&x-success=myapp%3A%2F%2Fcallback')
    })
  })

  describe('increment', () => {
    test('should return increment URL with tallySet and tally', () => {
      const url = tally.increment({
        tallySet: 'Game Score',
        tally: 'Player 1',
      })
      expect(url).toBe('tally://increment?tallySet=Game%20Score&tally=Player%201')
    })

    test('should return increment URL with tallySetID and tallyID', () => {
      const url = tally.increment({
        tallySetID: 'abc-123',
        tallyID: 'xyz-789',
      })
      expect(url).toBe('tally://increment?tallySetID=abc-123&tallyID=xyz-789')
    })

    test('should return increment URL without parameters', () => {
      const url = tally.increment()
      expect(url).toBe('tally://increment')
    })
  })

  describe('decrement', () => {
    test('should return decrement URL with tallySet and tally', () => {
      const url = tally.decrement({
        tallySet: 'Game Score',
        tally: 'Player 1',
      })
      expect(url).toBe('tally://decrement?tallySet=Game%20Score&tally=Player%201')
    })

    test('should return decrement URL with tallySetID and tallyID', () => {
      const url = tally.decrement({
        tallySetID: 'abc-123',
        tallyID: 'xyz-789',
      })
      expect(url).toBe('tally://decrement?tallySetID=abc-123&tallyID=xyz-789')
    })

    test('should return decrement URL without parameters', () => {
      const url = tally.decrement()
      expect(url).toBe('tally://decrement')
    })
  })

  describe('reset', () => {
    test('should return reset URL with tallySet and tally', () => {
      const url = tally.reset({
        tallySet: 'Daily Habits',
        tally: 'Exercise',
      })
      expect(url).toBe('tally://reset?tallySet=Daily%20Habits&tally=Exercise')
    })

    test('should return reset URL with tallySetID and tallyID', () => {
      const url = tally.reset({
        tallySetID: 'abc-123',
        tallyID: 'xyz-789',
      })
      expect(url).toBe('tally://reset?tallySetID=abc-123&tallyID=xyz-789')
    })

    test('should return reset URL without parameters', () => {
      const url = tally.reset()
      expect(url).toBe('tally://reset')
    })
  })
})
