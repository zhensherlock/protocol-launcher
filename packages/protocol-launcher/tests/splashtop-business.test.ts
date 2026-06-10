import { describe, expect, test } from 'vitest'
import { splashtopBusiness } from '../src'

describe('splashtop-business', () => {
  test('should expose only the documented Splashtop Business URI helpers', () => {
    expect(Object.keys(splashtopBusiness).sort()).toEqual(['connectByMac', 'connectSos'])
  })

  describe('connectByMac', () => {
    test('should match the documented remote computer MAC URI format', () => {
      const url = splashtopBusiness.connectByMac({
        account: 'email@example.com',
        mac: 'C04A001C72EC',
      })

      expect(url).toBe('st-business://com.splashtop.business?account=email@example.com&mac=C04A001C72EC')
    })
  })

  describe('connectSos', () => {
    test('should match the documented SOS session code URI format', () => {
      const url = splashtopBusiness.connectSos({
        account: 'url.launch@splashtop',
        sos: '123456789',
      })

      expect(url).toBe('st-business://com.splashtop.business?account=url.launch@splashtop&sos=123456789')
    })
  })
})
