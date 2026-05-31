import { describe, expect, test } from 'vitest'
import { sorted } from '../src'

describe('sorted', () => {
  describe('open', () => {
    test('open should return the official item URL', () => {
      const url = sorted.open({ item: 'today' })

      expect(url).toBe('sorted://x-callback-url/open?item=today')
    })

    test('item helpers should return the official item URLs', () => {
      expect(sorted.openToday()).toBe('sorted://x-callback-url/open?item=today')
      expect(sorted.openInbox()).toBe('sorted://x-callback-url/open?item=inbox')
      expect(sorted.openNew()).toBe('sorted://x-callback-url/open?item=new')
      expect(sorted.openSearch()).toBe('sorted://x-callback-url/open?item=search')
    })

    test('openDate should return a URL with a yyyy-MM-dd date', () => {
      const url = sorted.openDate({ date: '2018-07-20' })

      expect(url).toBe('sorted://x-callback-url/open?date=2018-07-20')
    })

    test('openDate should return a URL with a documented casual date', () => {
      const url = sorted.openDate({ date: 'tomorrow' })

      expect(url).toBe('sorted://x-callback-url/open?date=tomorrow')
    })

    test('openOffset should return the documented offset parameters', () => {
      const url = sorted.openOffset({ offset: 3 })

      expect(url).toBe('sorted://x-callback-url/open?date=offset&offset=3')
    })

    test('openWeekday should return the documented weekday parameters', () => {
      const url = sorted.openWeekday({ weekday: 2 })

      expect(url).toBe('sorted://x-callback-url/open?date=weekday&weekday=2')
    })

    test('openList should include the list title and optional tag filter', () => {
      const url = sorted.openList({
        list: 'Work',
        filterByTags: 'urgent,office',
      })

      expect(url).toBe('sorted://x-callback-url/open?list=Work&filterByTags=urgent%2Coffice')
    })

    test('openTag should include the tag title and optional tag filter', () => {
      const url = sorted.openTag({
        tag: 'urgent',
        filterByTags: 'office,phone',
      })

      expect(url).toBe('sorted://x-callback-url/open?tag=urgent&filterByTags=office%2Cphone')
    })

    test('search should return the official search query parameter', () => {
      const url = sorted.search({ search: 'Meeting' })

      expect(url).toBe('sorted://x-callback-url/open?search=Meeting')
    })
  })

  describe('add', () => {
    test('addTask should return the official add URL with task parameters', () => {
      const url = sorted.addTask({
        title: 'Plan launch',
        date: '2026-06-01 09:00',
        duration: 45,
        earlyAlert: 'none',
        list: 'Work',
        tags: 'urgent,office',
      })

      expect(url).toBe(
        'sorted://x-callback-url/add?title=Plan%20launch&date=2026-06-01%2009%3A00&duration=45&earlyAlert=none&list=Work&tags=urgent%2Coffice',
      )
    })

    test('addTask should include time and completionDate when provided', () => {
      const url = sorted.addTask({
        title: 'Follow up',
        time: '14:30',
        completionDate: '2026-06-01 15:00',
      })

      expect(url).toBe('sorted://x-callback-url/add?title=Follow%20up&time=14%3A30&completionDate=2026-06-01%2015%3A00')
    })

    test('addTask should omit optional values when they are not provided', () => {
      const url = sorted.addTask({
        title: 'Inbox task',
      })

      expect(url).toBe('sorted://x-callback-url/add?title=Inbox%20task')
    })

    test('addEvent should return the official add URL with event parameters', () => {
      const url = sorted.addEvent({
        title: 'Planning meeting',
        date: '2026-06-01 10:00',
        duration: 60,
        earlyAlert: 15,
        calendar: 'Work',
        location: 'Conference Room',
      })

      expect(url).toBe(
        'sorted://x-callback-url/add?title=Planning%20meeting&date=2026-06-01%2010%3A00&duration=60&earlyAlert=15&type=event&calendar=Work&location=Conference%20Room',
      )
    })
  })
})
