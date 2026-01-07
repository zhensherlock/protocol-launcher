import { describe, expect, test } from 'vitest'
import { encodeUrlPayload, isUndefined } from '../src'

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

  test('isUndefined should return true for undefined', async () => {
    expect(isUndefined(undefined)).toBe(true)
  })

  test('isUndefined should return false for other values', async () => {
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined('')).toBe(false)
    expect(isUndefined(0)).toBe(false)
    expect(isUndefined(false)).toBe(false)
  })
})
