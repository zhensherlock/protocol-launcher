import { describe, expect, test } from 'vitest'
import { calendar366 } from '../src'

describe('calendar366', () => {
  describe('add', () => {
    test('add should return the official event add URL with natural language query', () => {
      const url = calendar366.add({
        type: 'event',
        query: 'Meeting tomorrow 10am',
      })

      expect(url).toBe('cal366://add?type=event&query=Meeting%20tomorrow%2010am')
    })

    test('add should return the official task add URL with natural language query', () => {
      const url = calendar366.add({
        type: 'task',
        query: 'Call dentist',
      })

      expect(url).toBe('cal366://add?type=task&query=Call%20dentist')
    })

    test('add should omit the optional query parameter', () => {
      const url = calendar366.add({ type: 'event' })

      expect(url).toBe('cal366://add?type=event')
    })

    test('addEvent and addTask should set the documented type parameter', () => {
      expect(calendar366.addEvent({ query: 'Meeting tomorrow 10am' })).toBe(
        'cal366://add?type=event&query=Meeting%20tomorrow%2010am',
      )
      expect(calendar366.addTask({ query: 'Call dentist' })).toBe('cal366://add?type=task&query=Call%20dentist')
    })
  })

  describe('openItem', () => {
    test('openItem should return the official event open URL', () => {
      const url = calendar366.openItem({
        type: 'event',
        id: 'ABC123',
      })

      expect(url).toBe('cal366://open?type=event&id=ABC123')
    })

    test('openItem should include task date when provided', () => {
      const url = calendar366.openItem({
        type: 'task',
        id: 'TASK123',
        date: 1717200000,
      })

      expect(url).toBe('cal366://open?type=task&id=TASK123&date=1717200000')
    })

    test('openItem should not serialize date for events', () => {
      const url = calendar366.openItem({
        type: 'event',
        id: 'ABC123',
        date: 1717200000,
      } as never)

      expect(url).toBe('cal366://open?type=event&id=ABC123')
    })
  })

  describe('show', () => {
    test('show should return the bare show command when payload is omitted', () => {
      expect(calendar366.show()).toBe('cal366://show')
    })

    test('show should include the documented view parameter', () => {
      expect(calendar366.show({ view: 'year' })).toBe('cal366://show?view=year')
      expect(calendar366.show({ view: 'month' })).toBe('cal366://show?view=month')
      expect(calendar366.show({ view: 'agenda' })).toBe('cal366://show?view=agenda')
      expect(calendar366.show({ view: 'week' })).toBe('cal366://show?view=week')
      expect(calendar366.show({ view: 'day' })).toBe('cal366://show?view=day')
      expect(calendar366.show({ view: 'tasks' })).toBe('cal366://show?view=tasks')
    })

    test('show should include documented task list values', () => {
      expect(calendar366.show({ tasks: 0 })).toBe('cal366://show?tasks=0')
      expect(calendar366.show({ tasks: 1 })).toBe('cal366://show?tasks=1')
      expect(calendar366.show({ tasks: 2 })).toBe('cal366://show?tasks=2')
      expect(calendar366.show({ tasks: 3 })).toBe('cal366://show?tasks=3')
    })

    test('show should include date as timeIntervalSince1970', () => {
      expect(calendar366.show({ view: 'day', date: 1717200000 })).toBe('cal366://show?view=day&date=1717200000')
    })
  })

  test('summarize should return the official summarize command URL', () => {
    expect(calendar366.summarize()).toBe('cal366://summarize')
  })

  test('importCalendar should return the official import URL with encoded URL parameter', () => {
    const url = calendar366.importCalendar({
      url: 'https://example.com/calendar.ics',
    })

    expect(url).toBe('cal366://import?url=https%3A%2F%2Fexample.com%2Fcalendar.ics')
  })

  test('importCalendar should accept the documented file URL form', () => {
    const url = calendar366.importCalendar({
      url: 'file:///Users/example/calendar.ics',
    })

    expect(url).toBe('cal366://import?url=file%3A%2F%2F%2FUsers%2Fexample%2Fcalendar.ics')
  })

  test('importCalendar should reject URL schemes not documented by Calendar 366', () => {
    expect(() =>
      calendar366.importCalendar({
        url: 'http://example.com/calendar.ics',
      } as never),
    ).toThrow('Calendar 366 import URL must start with file:// or https://.')
  })
})
