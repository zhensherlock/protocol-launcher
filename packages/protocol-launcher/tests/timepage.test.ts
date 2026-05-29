import { describe, expect, test } from 'vitest'
import { timepage } from '../src'

describe('timepage', () => {
  test('open should return a URL', () => {
    const url = timepage.open()
    expect(url).toBe('timepage://')
  })

  test('addEvent should return a URL without optional values', () => {
    const url = timepage.addEvent()
    expect(url).toBe('timepage://add_event')
  })

  test('addEvent should return a URL with title and day', () => {
    const url = timepage.addEvent({
      title: 'Team Sync',
      day: 'today',
    })
    expect(url).toBe('timepage://add_event?title=Team%20Sync&day=today')
  })

  test('addEvent should return x-callback-url when callback values are provided', () => {
    const url = timepage.addEvent({
      title: 'Team Sync',
      day: 'tomorrow',
      xSuccess: 'shortcuts://callback',
      xCancel: 'shortcuts://cancel',
    })
    expect(url).toBe(
      'timepage://x-callback-url/add_event?x-success=shortcuts%3A%2F%2Fcallback&x-cancel=shortcuts%3A%2F%2Fcancel&title=Team%20Sync&day=tomorrow',
    )
  })

  test('openEvent should return a URL for the next event', () => {
    const url = timepage.openEvent({
      event: 'next',
    })
    expect(url).toBe('timepage://open_event?event=next')
  })

  test('openEvent should return a URL for an event id', () => {
    const url = timepage.openEvent({
      event: 'event-123',
    })
    expect(url).toBe('timepage://open_event?event=event-123')
  })

  test('openEventMap should return a URL', () => {
    const url = timepage.openEventMap({
      event: 'next',
    })
    expect(url).toBe('timepage://open_event_map?event=next')
  })

  test('openDay should return a URL', () => {
    const url = timepage.openDay({
      day: '2026-03-30',
    })
    expect(url).toBe('timepage://open_day?day=2026-03-30')
  })

  test('openWeek should return a URL with a special string', () => {
    const url = timepage.openWeek({
      week: 'next',
    })
    expect(url).toBe('timepage://open_week?week=next')
  })

  test('openWeek should return a URL with an index', () => {
    const url = timepage.openWeek({
      week: -1,
    })
    expect(url).toBe('timepage://open_week?week=-1')
  })

  test('openMonth should return a URL with a special string', () => {
    const url = timepage.openMonth({
      month: 'this',
    })
    expect(url).toBe('timepage://open_month?month=this')
  })

  test('openMonth should return a URL with an index', () => {
    const url = timepage.openMonth({
      month: 2,
    })
    expect(url).toBe('timepage://open_month?month=2')
  })

  test('openWeather should return a URL for a day', () => {
    const url = timepage.openWeather({
      day: 'today',
    })
    expect(url).toBe('timepage://open_weather?day=today')
  })

  test('openWeather should return a URL for a week', () => {
    const url = timepage.openWeather({
      week: 'this',
    })
    expect(url).toBe('timepage://open_weather?week=this')
  })

  test('search should return a URL', () => {
    const url = timepage.search({
      query: 'project review',
    })
    expect(url).toBe('timepage://search?query=project%20review')
  })

  test('getEvent should return an x-callback-url', () => {
    const url = timepage.getEvent({
      event: 'next',
      xSuccess: 'shortcuts://callback',
    })
    expect(url).toBe('timepage://x-callback-url/get_event?event=next&x-success=shortcuts%3A%2F%2Fcallback')
  })
})
