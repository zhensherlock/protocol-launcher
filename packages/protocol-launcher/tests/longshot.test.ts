import { describe, expect, test } from 'vitest'
import { longshot } from '../src'

describe('longshot', () => {
  test('snip should return a URL with func', async () => {
    const url = longshot.snip({
      func: 'start',
    })
    expect(url).toBe('longshot://snip?func=start')
  })

  test('record should return a URL with func', async () => {
    const url = longshot.record({
      func: 'startArea',
    })
    expect(url).toBe('longshot://record?func=startArea')
  })

  test('ocr should return a URL with func', async () => {
    const url = longshot.ocr({
      func: 'start',
    })
    expect(url).toBe('longshot://ocr?func=start')
  })

  test('rule should return a URL with func', async () => {
    const url = longshot.rule({
      func: 'start',
    })
    expect(url).toBe('longshot://rule?func=start')
  })

  test('pref should return a URL with page', async () => {
    const url = longshot.pref({
      page: 'shortcuts',
    })
    expect(url).toBe('longshot://pref?page=shortcuts')
  })

  test('pref should return a URL with other page', async () => {
    const url = longshot.pref({
      page: 'general',
    })
    expect(url).toBe('longshot://pref?page=general')
  })

  test('snip callback encodes nested URLs and selects data result', () => {
    expect(
      longshot.snip({ func: 'start', xSource: 'My App', xSuccess: 'myapp://done?a=1&b=2', xError: 'myapp://error' }),
    ).toBe(
      'longshot://x-callback-url/snip?func=start&channel=clipboard&type=data&x-source=My%20App&x-success=myapp%3A%2F%2Fdone%3Fa%3D1%26b%3D2&x-error=myapp%3A%2F%2Ferror',
    )
  })
  test('record serializes the documented plain and callback area commands', () => {
    expect(longshot.record({ func: 'start_area' })).toBe('longshot://record?func=start_area')
    expect(longshot.record({ func: 'startArea', xCallback: true })).toBe(
      'longshot://x-callback-url/record?func=startArea&channel=clipboard&type=filepath',
    )
    expect(longshot.record({ func: 'startArea', xSuccess: 'myapp://done' })).toBe(
      'longshot://x-callback-url/record?func=startArea&channel=clipboard&type=filepath&x-success=myapp%3A%2F%2Fdone',
    )
  })
  test('OCR callbacks select string results, including channel-only selection', () => {
    expect(longshot.ocr({ func: 'start', channel: 'clipboard' })).toBe(
      'longshot://x-callback-url/ocr?func=start&channel=clipboard&type=string',
    )
    expect(longshot.ocr({ func: 'start', xCallback: false })).toBe('longshot://ocr?func=start')
  })
})
