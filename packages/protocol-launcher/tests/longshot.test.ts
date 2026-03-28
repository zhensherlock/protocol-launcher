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
})
