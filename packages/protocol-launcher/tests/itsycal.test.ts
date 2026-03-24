import { describe, expect, test } from 'vitest'
import { itsycal } from '../src'

describe('itsycal', () => {
  test('open should return a URL', async () => {
    const url = itsycal.open()
    expect(url).toBe('itsycal://')
  })

  test('openDate with default should return now', async () => {
    const url = itsycal.openDate()
    expect(url).toBe('itsycal://date/now')
  })

  test('openDate with now should return a URL', async () => {
    const url = itsycal.openDate({ date: 'now' })
    expect(url).toBe('itsycal://date/now')
  })

  test('openDate with specific date should return a URL', async () => {
    const url = itsycal.openDate({ date: '2024-01-10' })
    expect(url).toBe('itsycal://date/2024-01-10')
  })
})
