import { describe, expect, test } from 'vitest'
import { calendarsReaddle } from '../src'

describe('calendarsReaddle', () => {
  test('open should return the official Calendars by Readdle open URL', () => {
    expect(calendarsReaddle.open()).toBe('calendarslite://open')
  })

  test('open should support the official Calendars 5 scheme', () => {
    expect(calendarsReaddle.open({ scheme: 'calendars' })).toBe('calendars://open')
  })

  test('newEvent should return the official new event URL', () => {
    expect(calendarsReaddle.newEvent()).toBe('calendarslite://newevent')
  })

  test('newEvent should support the official Calendars 5 scheme', () => {
    expect(calendarsReaddle.newEvent({ scheme: 'calendars' })).toBe('calendars://newevent')
  })

  test('parseEvent should return the official parse URL with natural-language text', () => {
    const url = calendarsReaddle.parseEvent({ text: 'new event at 8 pm' })

    expect(url).toBe('calendarslite://parse="new%20event%20at%208%20pm"')
  })

  test('parseEvent should support the official Calendars 5 scheme', () => {
    const url = calendarsReaddle.parseEvent({ scheme: 'calendars', text: 'new event at 8 pm' })

    expect(url).toBe('calendars://parse="new%20event%20at%208%20pm"')
  })

  test('parseEvent should omit text when it is not provided', () => {
    expect(calendarsReaddle.parseEvent()).toBe('calendarslite://parse')
  })

  test('newTask should return the official new task URL', () => {
    expect(calendarsReaddle.newTask()).toBe('calendarslite://newtask')
  })

  test('newTask should support the official Calendars 5 scheme', () => {
    expect(calendarsReaddle.newTask({ scheme: 'calendars' })).toBe('calendars://newtask')
  })
})
