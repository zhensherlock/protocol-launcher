import { describe, expect, test } from 'vitest'
import { mical } from '../src'

describe('mical', () => {
  test('open should return a URL', async () => {
    const url = mical.open()
    expect(url).toBe('miCal7://')
  })

  test('show should return a URL with view', async () => {
    const url = mical.show({ view: 'weekagenda' })
    expect(url).toBe('miCal7://show?view=weekagenda')
  })

  test('show should return a URL with month view', async () => {
    const url = mical.show({ view: 'month' })
    expect(url).toBe('miCal7://show?view=month')
  })

  test('show should return a URL with day view', async () => {
    const url = mical.show({ view: 'day' })
    expect(url).toBe('miCal7://show?view=day')
  })

  test('show should return a URL with dashboard view', async () => {
    const url = mical.show({ view: 'dashboard' })
    expect(url).toBe('miCal7://show?view=dashboard')
  })

  test('show should return a URL with week view', async () => {
    const url = mical.show({ view: 'week' })
    expect(url).toBe('miCal7://show?view=week')
  })

  test('show should return a URL with year view', async () => {
    const url = mical.show({ view: 'year' })
    expect(url).toBe('miCal7://show?view=year')
  })

  test('show should return a URL with list view', async () => {
    const url = mical.show({ view: 'list' })
    expect(url).toBe('miCal7://show?view=list')
  })

  test('add should return a URL with input', async () => {
    const url = mical.add({ input: 'Lunch tomorrow at 12' })
    expect(url).toBe('miCal7://add?input=Lunch%20tomorrow%20at%2012')
  })

  test('add should return a URL with input and notes', async () => {
    const url = mical.add({ input: 'Lunch tomorrow at 12', notes: 'Meeting with team' })
    expect(url).toBe('miCal7://add?input=Lunch%20tomorrow%20at%2012&notes=Meeting%20with%20team')
  })

  test('addReminder should return a URL with title', async () => {
    const url = mical.addReminder({ title: 'Buy groceries' })
    expect(url).toBe('miCal7://addReminder?title=Buy%20groceries')
  })

  test('addReminder should return a URL with title and notes', async () => {
    const url = mical.addReminder({ title: 'Buy groceries', notes: 'Milk, eggs, bread' })
    expect(url).toBe('miCal7://addReminder?title=Buy%20groceries&notes=Milk%2C%20eggs%2C%20bread')
  })
})
