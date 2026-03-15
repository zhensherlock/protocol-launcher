import { describe, expect, test } from 'vitest'
import { encodeUrlPayload, isUndefined, qs } from '../src'

describe('index.ts', () => {
  test('encodeUrlPayload should return a base64-encoded string', async () => {
    const payload = { key: 'value', 键: '值' }
    const encoded = encodeUrlPayload(payload)
    expect(encoded).toBe('eyJrZXkiOiJ2YWx1ZSIsIumUriI6IuWAvCJ9')
  })

  test('encodeUrlPayload should return a safe base64-encoded string', async () => {
    const payload = { key: 'value', 键: '值' }
    const encoded = encodeUrlPayload(payload, { useSafeEncoding: true })
    expect(encoded).toBe('eyJrZXkiOiJ2YWx1ZSIsIumUriI6IuWAvCJ9')
  })

  test('encodeUrlPayload should NOT encodeURIComponent when encodeForUrl is false', () => {
    const payload = 'hello=world&name=test'
    const encoded = encodeUrlPayload(payload, { encodeForUrl: false })
    expect(encoded).toBe('aGVsbG89d29ybGQmbmFtZT10ZXN0')
  })

  test('isUndefined should return true for undefined', async () => {
    expect(isUndefined(undefined)).toBe(true)
  })

  test('isUndefined should return false for other values', async () => {
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined('')).toBe(false)
    expect(isUndefined(0)).toBe(false)
    expect(isUndefined(false)).toBe(false)
  })

  test('qs should return empty string for empty object', () => {
    expect(qs({})).toBe('')
  })

  test('qs should encode simple key-value pairs', () => {
    expect(qs({ key: 'value', name: 'test' })).toBe('?key=value&name=test')
  })

  test('qs should skip null and undefined values', () => {
    expect(qs({ key: 'value', nullVal: null, undefVal: undefined })).toBe('?key=value')
  })

  test('qs should encode array values as multiple params', () => {
    expect(qs({ tags: ['a', 'b', 'c'] })).toBe('?tags=a&tags=b&tags=c')
  })

  test('qs should encode special characters', () => {
    expect(qs({ query: 'hello world', url: 'https://example.com' })).toBe(
      '?query=hello%20world&url=https%3A%2F%2Fexample.com',
    )
  })

  test('qs should handle mixed types', () => {
    expect(qs({ str: 'hello', num: 42, arr: [1, 2], skip: null })).toBe('?str=hello&num=42&arr=1&arr=2')
  })
})
