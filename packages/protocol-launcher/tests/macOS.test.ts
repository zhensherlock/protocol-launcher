import { describe, expect, test } from 'vitest'
import { macOS } from '../src'

describe('macOS', () => {
  test('sms should return a URL without phone', async () => {
    const url = macOS.sms()
    expect(url).toBe('sms://')
  })

  test('sms should return a URL with phone', async () => {
    const url = macOS.sms({ phone: '1234567890' })
    expect(url).toBe('sms://1234567890')
  })

  test('facetime should return a URL with phone', async () => {
    const url = macOS.facetime({ phone: '1234567890' })
    expect(url).toBe('tel://1234567890')
  })

  test('mail should return a URL', async () => {
    const url = macOS.mail()
    expect(url).toBe('message://')
  })

  test('wallet should return a URL', async () => {
    const url = macOS.wallet()
    expect(url).toBe('shoebox://')
  })

  test('calendar should return a URL without link', async () => {
    const url = macOS.calendar()
    expect(url).toBe('ical://')
  })

  test('calendar should return a URL with webcal link', async () => {
    const url = macOS.calendar({ link: 'https://example.com/calendar.ics' })
    expect(url).toBe('webcal://example.com/calendar.ics')
  })

  test('calendar should convert http to webcal', async () => {
    const url = macOS.calendar({ link: 'http://example.com/calendar.ics' })
    expect(url).toBe('webcal://example.com/calendar.ics')
  })

  test('findMy should return a URL without tab', async () => {
    const url = macOS.findMy()
    expect(url).toBe('findmy://')
  })

  test('findMy should return a URL with devices tab', async () => {
    const url = macOS.findMy({ tab: 'devices' })
    expect(url).toBe('findmy://devices')
  })

  test('findMy should return a URL with items tab', async () => {
    const url = macOS.findMy({ tab: 'items' })
    expect(url).toBe('findmy://items')
  })

  test('findMy should return a URL with friends tab', async () => {
    const url = macOS.findMy({ tab: 'friends' })
    expect(url).toBe('findmy://friends')
  })
})
