import { describe, expect, test } from 'vitest'
import { due } from '../src'

describe('due', () => {
  describe('add', () => {
    test('should return URL with title and duedate', async () => {
      const url = due.add({
        title: 'Prank someone in UK',
        duedate: 1333238400,
      })
      expect(url).toBe('due://x-callback-url/add?title=Prank%20someone%20in%20UK&duedate=1333238400')
    })

    test('should return URL with title, duedate and timezone', async () => {
      const url = due.add({
        title: 'Prank someone',
        duedate: 1333238400,
        timezone: 'GMT',
      })
      expect(url).toBe('due://x-callback-url/add?title=Prank%20someone&duedate=1333238400&timezone=GMT')
    })

    test('should return URL with recurring reminder', async () => {
      const url = due.add({
        title: 'Pay rent',
        duedate: 1306954800,
        timezone: 'GMT',
        recurunit: 8,
        recurfromdate: 1306954800,
      })
      expect(url).toBe(
        'due://x-callback-url/add?title=Pay%20rent&duedate=1306954800&timezone=GMT&recurunit=8&recurfromdate=1306954800',
      )
    })

    test('should return URL with weekly recurrence', async () => {
      const url = due.add({
        title: 'Recycle trash',
        duedate: 1306832400,
        timezone: 'GMT',
        recurunit: 256,
        recurfromdate: 1306832400,
        recurbyday: '3,6',
      })
      expect(url).toBe(
        'due://x-callback-url/add?title=Recycle%20trash&duedate=1306832400&timezone=GMT&recurunit=256&recurfromdate=1306832400&recurbyday=3%2C6',
      )
    })

    test('should return URL with secslater and x-callback-url', async () => {
      const url = due.add({
        title: 'Call John',
        secslater: 3600,
        xSource: 'SuperCal',
        xSuccess: 'supercal://x-callback-url/returnAction',
      })
      expect(url).toBe(
        'due://x-callback-url/add?title=Call%20John&secslater=3600&x-source=SuperCal&x-success=supercal%3A%2F%2Fx-callback-url%2FreturnAction',
      )
    })

    test('should return URL with minslater', async () => {
      const url = due.add({
        title: 'Meeting',
        minslater: 30,
      })
      expect(url).toBe('due://x-callback-url/add?title=Meeting&minslater=30')
    })

    test('should return URL with hourslater', async () => {
      const url = due.add({
        title: 'Dinner',
        hourslater: 2,
      })
      expect(url).toBe('due://x-callback-url/add?title=Dinner&hourslater=2')
    })

    test('should return URL with autosnooze', async () => {
      const url = due.add({
        title: 'Medication',
        autosnooze: 15,
      })
      expect(url).toBe('due://x-callback-url/add?title=Medication&autosnooze=15')
    })

    test('should return URL with x-error', async () => {
      const url = due.add({
        title: 'Task',
        xSource: 'MyApp',
        xError: 'myapp://error',
      })
      expect(url).toBe('due://x-callback-url/add?title=Task&x-source=MyApp&x-error=myapp%3A%2F%2Ferror')
    })

    test('should return URL with empty payload', async () => {
      const url = due.add({})
      expect(url).toBe('due://x-callback-url/add')
    })

    test('should return URL with recurfreq', async () => {
      const url = due.add({
        title: 'Meeting',
        recurunit: 16,
        recurfreq: 2,
        recurfromdate: 1306954800,
      })
      expect(url).toBe('due://x-callback-url/add?title=Meeting&recurunit=16&recurfreq=2&recurfromdate=1306954800')
    })

    test('should return URL with recurbysetpos', async () => {
      const url = due.add({
        title: 'Monthly review',
        recurunit: 8,
        recurfromdate: 1306954800,
        recurbyday: '2,3,4,5,6',
        recurbysetpos: -1,
      })
      expect(url).toBe(
        'due://x-callback-url/add?title=Monthly%20review&recurunit=8&recurfromdate=1306954800&recurbyday=2%2C3%2C4%2C5%2C6&recurbysetpos=-1',
      )
    })
  })

  describe('search', () => {
    test('should return URL with query and section', async () => {
      const url = due.search({
        query: '#work',
        section: 'Reminders',
      })
      expect(url).toBe('due:///search?section=Reminders&query=%23work')
    })

    test('should return URL with query for timers', async () => {
      const url = due.search({
        query: '#HIIT',
        section: 'Timers',
      })
      expect(url).toBe('due:///search?section=Timers&query=%23HIIT')
    })

    test('should return URL with query for logbook', async () => {
      const url = due.search({
        query: 'completed',
        section: 'Logbook',
      })
      expect(url).toBe('due:///search?section=Logbook&query=completed')
    })

    test('should return URL with only query', async () => {
      const url = due.search({
        query: 'test',
      })
      expect(url).toBe('due:///search?query=test')
    })

    test('should return URL with only section', async () => {
      const url = due.search({
        section: 'Timers',
      })
      expect(url).toBe('due:///search?section=Timers')
    })

    test('should return URL with empty payload', async () => {
      const url = due.search({})
      expect(url).toBe('due:///search')
    })
  })
})
