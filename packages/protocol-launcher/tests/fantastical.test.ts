import { describe, expect, test } from 'vitest'
import { fantastical } from '../src'

describe('fantastical', () => {
  describe('parse', () => {
    test('should return URL with sentence', async () => {
      const url = fantastical.parse({
        sentence: 'Lunch with John at 12pm tomorrow',
      })
      expect(url).toBe('x-fantastical3://parse?sentence=Lunch%20with%20John%20at%2012pm%20tomorrow')
    })

    test('should return URL with structured parameters', async () => {
      const url = fantastical.parse({
        title: 'Team Meeting',
        start: '2026-03-30 10:00',
        end: '2026-03-30 11:00',
      })
      expect(url).toBe(
        'x-fantastical3://parse?title=Team%20Meeting&start=2026-03-30%2010%3A00&end=2026-03-30%2011%3A00',
      )
    })

    test('should return URL with notes and add flag', async () => {
      const url = fantastical.parse({
        sentence: 'Meeting',
        notes: 'Discuss project',
        add: true,
      })
      expect(url).toBe('x-fantastical3://parse?sentence=Meeting&add=1&notes=Discuss%20project')
    })

    test('should return URL with reminder flag', async () => {
      const url = fantastical.parse({
        title: 'Call mom',
        reminder: true,
        due: '2026-03-30 09:00',
      })
      expect(url).toBe('x-fantastical3://parse?reminder=1&due=2026-03-30%2009%3A00&title=Call%20mom')
    })

    test('should return URL with location and url', async () => {
      const url = fantastical.parse({
        title: 'Conference Call',
        location: 'Zoom',
        url: 'https://zoom.us/j/123456789',
      })
      expect(url).toBe(
        'x-fantastical3://parse?title=Conference%20Call&location=Zoom&url=https%3A%2F%2Fzoom.us%2Fj%2F123456789',
      )
    })

    test('should return URL with allDay and availability', async () => {
      const url = fantastical.parse({
        title: 'Company Holiday',
        allDay: true,
        availability: 'free',
      })
      expect(url).toBe('x-fantastical3://parse?title=Company%20Holiday&allDay=1&availability=free')
    })

    test('should return URL with private flag', async () => {
      const url = fantastical.parse({
        title: 'Private Meeting',
        private: true,
      })
      expect(url).toBe('x-fantastical3://parse?title=Private%20Meeting&private=1')
    })

    test('should return URL with empty payload', async () => {
      const url = fantastical.parse({})
      expect(url).toBe('x-fantastical3://parse')
    })

    test('should ignore title when sentence is provided', async () => {
      const url = fantastical.parse({
        sentence: 'Quick meeting',
        title: 'Ignored Title',
      })
      expect(url).toBe('x-fantastical3://parse?sentence=Quick%20meeting')
    })
  })

  describe('show', () => {
    test('should return URL with today', async () => {
      const url = fantastical.show({ date: 'today' })
      expect(url).toBe('x-fantastical3://show?date=today')
    })

    test('should return URL with specific date', async () => {
      const url = fantastical.show({ date: '2026-03-30' })
      expect(url).toBe('x-fantastical3://show?date=2026-03-30')
    })

    test('should return URL with natural language date', async () => {
      const url = fantastical.show({ date: 'next monday' })
      expect(url).toBe('x-fantastical3://show?date=next%20monday')
    })

    test('should return URL with tomorrow', async () => {
      const url = fantastical.show({ date: 'tomorrow' })
      expect(url).toBe('x-fantastical3://show?date=tomorrow')
    })
  })
})
