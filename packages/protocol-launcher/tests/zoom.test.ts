import { describe, expect, test } from 'vitest'
import { zoom } from '../src'

describe('zoom', () => {
  test('open should return the official Zoom app launch URL', () => {
    const url = zoom.open()

    expect(url).toBe('zoomus://')
  })

  test('phoneCall should return the official Zoom Phone outbound call URL', () => {
    const url = zoom.phoneCall({
      phoneNumber: '+15551234567',
    })

    expect(url).toBe('zoomphonecall://+15551234567')
  })

  test('callto should return the official Zoom Phone callto URL', () => {
    const url = zoom.callto({
      phoneNumber: '+123456789',
    })

    expect(url).toBe('callto:+123456789')
  })

  test('tel should return the official Zoom Phone tel URL', () => {
    const url = zoom.tel({
      phoneNumber: '+123456789',
    })

    expect(url).toBe('tel:+123456789')
  })

  test('phoneCall should support the official callerid parameter', () => {
    const url = zoom.phoneCall({
      phoneNumber: '+15551234567',
      callerId: '+15557654321',
    })

    expect(url).toBe('zoomphonecall://+15551234567?callerid=%2B15557654321')
  })

  test('phoneSms should return the official Zoom Phone SMS URL', () => {
    const url = zoom.phoneSms({
      phoneNumber: '+123456789',
      callerId: '+16692520210',
    })

    expect(url).toBe('zoomphonesms://+123456789?callerid=%2B16692520210')
  })
})
