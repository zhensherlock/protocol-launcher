import { describe, expect, test } from 'vitest'
import { simpleScan } from '../src'

describe('simpleScan', () => {
  test('open should return a URL', async () => {
    const url = simpleScan.open()
    expect(url).toBe('simple-scan://')
  })

  test('scan with all parameters should return a URL', async () => {
    const url = simpleScan.scan({
      destination: 'email',
      format: 'pdf',
      quality: 'large',
    })
    expect(url).toBe('simple-scan://scan?destination=email&format=pdf&quality=large')
  })

  test('scan with partial parameters should return a URL', async () => {
    const url = simpleScan.scan({
      destination: 'email',
      format: 'pdf',
    })
    expect(url).toBe('simple-scan://scan?destination=email&format=pdf')
  })

  test('scan with empty payload should return a URL', async () => {
    const url = simpleScan.scan({})
    expect(url).toBe('simple-scan://scan')
  })
})
