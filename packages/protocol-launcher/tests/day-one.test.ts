import { describe, expect, test } from 'vitest'
import { dayOne } from '../src'

describe('dayOne', () => {
  test('open should return a URL', async () => {
    const url = dayOne.open()
    expect(url).toBe('dayone://')
  })

  test('openTimeline should return a URL', async () => {
    const url = dayOne.openTimeline()
    expect(url).toBe('dayone://entries')
  })

  test('openCalendar should return a URL', async () => {
    const url = dayOne.openCalendar()
    expect(url).toBe('dayone://calendar')
  })

  test('openStarred should return a URL', async () => {
    const url = dayOne.openStarred()
    expect(url).toBe('dayone://starred')
  })

  test('openSettings should return a URL', async () => {
    const url = dayOne.openSettings()
    expect(url).toBe('dayone://preferences')
  })

  test('createEntry should return a URL with entry', async () => {
    const url = dayOne.createEntry({
      entry: 'Hello World',
    })
    expect(url).toBe('dayone://post?entry=Hello%20World')
  })

  test('createEntry should return a URL with entry and tags', async () => {
    const url = dayOne.createEntry({
      entry: 'Hello',
      tags: 'work, test',
    })
    expect(url).toBe('dayone://post?entry=Hello&tags=work%2C%20test')
  })

  test('createEntry should return a URL with entry and journal', async () => {
    const url = dayOne.createEntry({
      entry: 'Hello',
      journal: 'Day One',
    })
    expect(url).toBe('dayone://post?entry=Hello&journal=Day%20One')
  })

  test('createEntry should return a URL with entry and imageClipboard', async () => {
    const url = dayOne.createEntry({
      entry: 'Hello',
      imageClipboard: 1,
    })
    expect(url).toBe('dayone://post?entry=Hello&imageClipboard=1')
  })

  test('createEntry should return a URL with all parameters', async () => {
    const url = dayOne.createEntry({
      entry: 'Hello World',
      tags: 'work, test',
      journal: 'Day One',
      imageClipboard: 1,
    })
    expect(url).toBe('dayone://post?entry=Hello%20World&tags=work%2C%20test&journal=Day%20One&imageClipboard=1')
  })

  test('createEntry should return a URL without parameters', async () => {
    const url = dayOne.createEntry({})
    expect(url).toBe('dayone://post')
  })

  test('viewEntry should return a URL with entryId', async () => {
    const url = dayOne.viewEntry({
      entryId: '22B178B33B2A4149538280F9C34102C5',
    })
    expect(url).toBe('dayone://view?entryId=22B178B33B2A4149538280F9C34102C5')
  })

  test('editEntry should return a URL with entryId', async () => {
    const url = dayOne.editEntry({
      entryId: '3415BB00651C4533B41F62544A775CCC',
    })
    expect(url).toBe('dayone://edit?entryId=3415BB00651C4533B41F62544A775CCC')
  })

  test('openDailyPrompt should return a URL without parameters', async () => {
    const url = dayOne.openDailyPrompt()
    expect(url).toBe('dayone://new/daily-prompt')
  })

  test('openDailyPrompt should return a URL with promptId', async () => {
    const url = dayOne.openDailyPrompt({
      promptId: 'ck7zw8sybj6kv09983znvrmof',
    })
    expect(url).toBe('dayone://new/daily-prompt?promptId=ck7zw8sybj6kv09983znvrmof')
  })

  test('openDailyPrompt should return a URL with promptDate', async () => {
    const url = dayOne.openDailyPrompt({
      promptDate: '2020-04-02',
    })
    expect(url).toBe('dayone://new/daily-prompt?promptDate=2020-04-02')
  })

  test('openDailyPrompt should return a URL with promptId and promptDate', async () => {
    const url = dayOne.openDailyPrompt({
      promptId: 'ck7zw8sybj6kv09983znvrmof',
      promptDate: '2020-04-02',
    })
    expect(url).toBe('dayone://new/daily-prompt?promptId=ck7zw8sybj6kv09983znvrmof&promptDate=2020-04-02')
  })

  test('openDate should return a URL with date', async () => {
    const url = dayOne.openDate({
      date: '2020-04-02',
    })
    expect(url).toBe('dayone://open?date=2020-04-02')
  })

  test('openDate should return a URL with day', async () => {
    const url = dayOne.openDate({
      day: '04-12',
    })
    expect(url).toBe('dayone://open?day=04-12')
  })

  test('openDate should return a URL without parameters', async () => {
    const url = dayOne.openDate({})
    expect(url).toBe('dayone://open')
  })

  test('openOnThisDay should return a URL', async () => {
    const url = dayOne.openOnThisDay()
    expect(url).toBe('dayone://thisday')
  })

  test('filterByTag should return a URL with tag', async () => {
    const url = dayOne.filterByTag({
      tag: 'work',
    })
    expect(url).toBe('dayone://filter?tag=work')
  })

  test('filterByTag should return a URL without parameters', async () => {
    const url = dayOne.filterByTag({})
    expect(url).toBe('dayone://filter')
  })
})
