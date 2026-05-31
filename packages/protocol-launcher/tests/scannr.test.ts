import { describe, expect, test } from 'vitest'
import { scannr } from '../src'

describe('scannr', () => {
  describe('scanId', () => {
    test('should return the Android launch URL without parameters', () => {
      const url = scannr.scanId()
      expect(url).toBe('scannr://')
    })

    test('should return the iOS launch URL with a callback scheme', () => {
      const url = scannr.scanId({
        callbackScheme: 'foo',
      })
      expect(url).toBe('scannr://?callbackScheme=foo')
    })
  })
})
