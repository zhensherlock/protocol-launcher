import { describe, expect, test } from 'vitest'
import { busycal } from '../src'

describe('busycal', () => {
  describe('macOS creation URLs', () => {
    test('newEvent should return the official natural language event URL', () => {
      const url = busycal.newEvent({
        description: 'Staff meeting Thursday at 10am',
      })

      expect(url).toBe('busycalevent://new/Staff%20meeting%20Thursday%20at%2010am')
    })

    test('newEvent should include notes as the optional second path parameter', () => {
      const url = busycal.newEvent({
        description: 'Meeting with Joe June 7 at 3pm /Work',
        notes: 'Some Notes',
      })

      expect(url).toBe('busycalevent://new/Meeting%20with%20Joe%20June%207%20at%203pm%20%2FWork/Some%20Notes')
    })

    test('newTask should prefix the official task hyphen and encode the task description', () => {
      const url = busycal.newTask({
        description: 'Pay Taxes April 15!!! /Personal',
      })

      expect(url).toBe('busycalevent://new/-Pay%20Taxes%20April%2015!!!%20%2FPersonal')
    })
  })

  describe('macOS navigation URLs', () => {
    test('find should search all calendars when calendar is omitted', () => {
      const url = busycal.find({
        title: 'Buy Toner',
      })

      expect(url).toBe('busycalevent://find//Buy%20Toner')
    })

    test('find should include calendar, title, and date-time path parameters', () => {
      const url = busycal.find({
        calendar: 'Personal',
        title: 'Pay Taxes',
        date: '2017-04-15T12:00:00+0000',
      })

      expect(url).toBe('busycalevent://find/Personal/Pay%20Taxes/2017-04-15T12%3A00%3A00+0000')
    })

    test('find should include date-only occurrence values', () => {
      const url = busycal.find({
        title: 'Meeting with Joe',
        date: '2016-06-07',
      })

      expect(url).toBe('busycalevent://find//Meeting%20with%20Joe/2016-06-07')
    })

    test('openDate should return a specific date URL', () => {
      const url = busycal.openDate({ date: '2021-05-31' })

      expect(url).toBe('busycalevent://date/2021-05-31')
    })

    test('openDate should return the current date URL', () => {
      const url = busycal.openDate({ date: 'now' })

      expect(url).toBe('busycalevent://date/now')
    })

    test('openFilter should encode Smart Filter or Calendar Set names', () => {
      const url = busycal.openFilter({ name: 'Team Meetings' })

      expect(url).toBe('busycal://filter/Team%20Meetings')
    })
  })

  describe('macOS utility URLs', () => {
    test('openEventQuickEntry should return the event Quick Entry URL', () => {
      expect(busycal.openEventQuickEntry()).toBe('busycal://newEvent')
    })

    test('openTaskQuickEntry should return the task Quick Entry URL', () => {
      expect(busycal.openTaskQuickEntry()).toBe('busycal://newTask')
    })

    test('subscribeCalendar should pass through the documented webcal URL', () => {
      expect(busycal.subscribeCalendar({ url: 'webcal://example.com/calendar.ics' })).toBe(
        'webcal://example.com/calendar.ics',
      )
    })

    test('syncCalDAV should return the CalDAV sync URL', () => {
      expect(busycal.syncCalDAV()).toBe('busycalsync://caldav')
    })

    test('syncWebDAV should return the WebDAV sync URL', () => {
      expect(busycal.syncWebDAV()).toBe('busycalsync://webdav')
    })

    test('setDoNotDisturb should return the DND minutes URL', () => {
      expect(busycal.setDoNotDisturb({ minutes: 15 })).toBe('busycaldnd://15')
      expect(busycal.setDoNotDisturb({ minutes: 0 })).toBe('busycaldnd://0')
    })

    test('setLogLevel should return the logging level URL', () => {
      expect(busycal.setLogLevel({ level: 3 })).toBe('busycalsetting://loglevel/3')
    })

    test('setCrashReporting should return the crash reporting URL', () => {
      expect(busycal.setCrashReporting({ option: 1 })).toBe('busycalsetting://crashreporting/1')
    })
  })

  describe('iOS URLs', () => {
    test('newIosEvent should return the official natural language event URL', () => {
      const url = busycal.newIosEvent({
        description: 'Baseball game tomorrow',
      })

      expect(url).toBe('busycal://new/Baseball%20game%20tomorrow')
    })

    test('newIosEvent should include notes and autosave parameters', () => {
      const url = busycal.newIosEvent({
        description: 'Meeting with Joe June 7 at 3pm /Work',
        notes: 'Some Notes',
        autosave: true,
      })

      expect(url).toBe('busycal://new/Meeting%20with%20Joe%20June%207%20at%203pm%20%2FWork/Some%20Notes/true')
    })

    test('newIosEvent should keep the empty notes segment when autosave is used without notes', () => {
      const url = busycal.newIosEvent({
        description: 'Project review 3pm /Work',
        autosave: 1,
      })

      expect(url).toBe('busycal://new/Project%20review%203pm%20%2FWork//1')
    })

    test('newIosTask should return the official natural language task URL', () => {
      const url = busycal.newIosTask({
        description: 'Call Bob tomorrow',
      })

      expect(url).toBe('busycal://new/-Call%20Bob%20tomorrow')
    })

    test('newIosTask should match the official autosave task example', () => {
      const url = busycal.newIosTask({
        description: 'Buy Toner /Shopping <www.amazon.com>',
        autosave: true,
      })

      expect(url).toBe('busycal://new/-Buy%20Toner%20%2FShopping%20%3Cwww.amazon.com%3E/true')
    })

    test('openIosDate should return a specific date URL', () => {
      const url = busycal.openIosDate({ date: '2021-05-31' })

      expect(url).toBe('busycal://date/2021-05-31')
    })

    test('openIosDate should return the current date URL', () => {
      const url = busycal.openIosDate({ date: 'now' })

      expect(url).toBe('busycal://date/now')
    })

    test('launchIosView should return the documented view URL', () => {
      expect(busycal.launchIosView({ view: 'list' })).toBe('busycal://launch/list')
      expect(busycal.launchIosView({ view: 'day' })).toBe('busycal://launch/day')
      expect(busycal.launchIosView({ view: 'week' })).toBe('busycal://launch/week')
      expect(busycal.launchIosView({ view: 'month' })).toBe('busycal://launch/month')
      expect(busycal.launchIosView({ view: 'tasks' })).toBe('busycal://launch/tasks')
    })
  })
})
