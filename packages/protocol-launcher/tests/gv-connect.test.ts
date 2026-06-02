import { describe, expect, test } from 'vitest'
import { gvConnect } from '../src'

describe('gvConnect', () => {
  test('open should return the generic launch URL', () => {
    expect(gvConnect.open()).toBe('gvconnect://')
  })

  test('tab helpers should return the documented case-sensitive tab URLs', () => {
    expect(gvConnect.openTab({ tab: 'call' })).toBe('gvconnect://call')
    expect(gvConnect.openCallTab()).toBe('gvconnect://call')
    expect(gvConnect.openSmsTab()).toBe('gvconnect://sms')
    expect(gvConnect.openVoicemailTab()).toBe('gvconnect://vm')
    expect(gvConnect.openHistory()).toBe('gvconnect://history')
    expect(gvConnect.openSettings()).toBe('gvconnect://settings')
  })

  test('tab helpers should support account selection', () => {
    expect(gvConnect.openSettings({ account: 'Personal Voice' })).toBe('gvconnect://settings?account=Personal%20Voice')
  })

  test('dial should use the compact call-number URL form', () => {
    expect(gvConnect.dial({ number: '+15551234567' })).toBe('gvconnect://call?%2B15551234567')
  })

  test('dial should support FAVORITES and account selection', () => {
    expect(gvConnect.dial({ number: 'FAVORITES', account: 'Work Voice' })).toBe(
      'gvconnect://call?FAVORITES&account=Work%20Voice',
    )
  })

  test('call should use official number and callmethod query parameters', () => {
    const url = gvConnect.call({
      number: '+15551234567',
      callMethod: 'DirectCall',
    })

    expect(url).toBe('gvconnect://call?number=%2B15551234567&callmethod=DirectCall')
  })

  test('call should encode forwarding phone names and account selection', () => {
    const url = gvConnect.call({
      number: '+15551234567',
      callMethod: 'Mobile Phone',
      account: 'Work Voice',
    })

    expect(url).toBe('gvconnect://call?number=%2B15551234567&callmethod=Mobile%20Phone&account=Work%20Voice')
  })

  test('smsRecipient should use the compact recipient-only URL form', () => {
    expect(gvConnect.smsRecipient({ number: '+15551234567' })).toBe('gvconnect://sms?%2B15551234567')
  })

  test('smsRecipient should encode comma-separated group SMS recipients', () => {
    const url = gvConnect.smsRecipient({
      number: ['+15551234567', '+15557654321'],
    })

    expect(url).toBe('gvconnect://sms?%2B15551234567%2C%2B15557654321')
  })

  test('sms should support number and message parameters independently', () => {
    expect(gvConnect.sms({ number: '+15551234567' })).toBe('gvconnect://sms?number=%2B15551234567')
    expect(gvConnect.sms({ message: 'On my way' })).toBe('gvconnect://sms?message=On%20my%20way')
  })

  test('sms should support group recipients, message text, and account selection', () => {
    const url = gvConnect.sms({
      number: ['+15551234567', '+15557654321'],
      message: 'Meet at 5?',
      account: 'Work Voice',
    })

    expect(url).toBe(
      'gvconnect://sms?number=%2B15551234567%2C%2B15557654321&message=Meet%20at%205%3F&account=Work%20Voice',
    )
  })

  test('sms should reject more than five recipients from the documented group SMS limit', () => {
    expect(() =>
      gvConnect.sms({
        number: [
          '+15550000001',
          '+15550000002',
          '+15550000003',
          '+15550000004',
          '+15550000005',
          '+15550000006',
        ] as never,
      }),
    ).toThrow('GV Connect SMS supports up to five recipients.')

    expect(() =>
      gvConnect.sms({
        number: '+15550000001,+15550000002,+15550000003,+15550000004,+15550000005,+15550000006',
      }),
    ).toThrow('GV Connect SMS supports up to five recipients.')
  })

  test('quickSetting should use the compact quicksetting URL form', () => {
    expect(gvConnect.quickSetting({ name: 'Do Not Disturb' })).toBe('gvconnect://quicksetting?Do%20Not%20Disturb')
  })

  test('quickSetting should support account selection', () => {
    expect(gvConnect.quickSetting({ name: 'Office', account: 'Work Voice' })).toBe(
      'gvconnect://quicksetting?Office&account=Work%20Voice',
    )
  })
})
