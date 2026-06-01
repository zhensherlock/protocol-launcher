import { describe, expect, test } from 'vitest'
import { anydesk } from '../src'

describe('anydesk', () => {
  describe('connect', () => {
    test('should match the official AnyDesk ID URL format', () => {
      const url = anydesk.connect({ idOrAlias: '123456789' })

      expect(url).toBe('anydesk:123456789')
    })

    test('should match the official AnyDesk alias URL format', () => {
      const url = anydesk.connect({ idOrAlias: 'user@namespace' })

      expect(url).toBe('anydesk:user@namespace')
    })
  })

  describe('connectCustomClient', () => {
    test('should match the official non-MSI custom client URL format', () => {
      const url = anydesk.connectCustomClient({
        prefix: 'example',
        idOrAlias: '123456789',
      })

      expect(url).toBe('anydesk-example:123456789')
    })

    test('should match the official non-MSI custom client alias URL format', () => {
      const url = anydesk.connectCustomClient({
        prefix: 'example',
        idOrAlias: 'user@namespace',
      })

      expect(url).toBe('anydesk-example:user@namespace')
    })
  })

  describe('connectCustomClientMsi', () => {
    test('should match the official MSI custom client URL format', () => {
      const url = anydesk.connectCustomClientMsi({
        prefix: 'example',
        idOrAlias: '123456789',
      })

      expect(url).toBe('anydesk:AnyDesk-example_msi:123456789')
    })
  })

  describe('registerLicense', () => {
    test('should match the official license registration URL format', () => {
      const url = anydesk.registerLicense({ key: 'LICENSE-KEY' })

      expect(url).toBe('anydesk://register-license?key=LICENSE-KEY')
    })

    test('should match the official silent license registration URL format', () => {
      const url = anydesk.registerLicense({ key: 'LICENSE-KEY', silent: true })

      expect(url).toBe('anydesk://register-license?key=LICENSE-KEY&silent')
    })

    test('should encode the license key query value', () => {
      const url = anydesk.registerLicense({ key: 'A B+C=' })

      expect(url).toBe('anydesk://register-license?key=A%20B%2BC%3D')
    })
  })

  describe('registerLicenseCustomClient', () => {
    test('should match the official non-MSI custom client license registration URL format', () => {
      const url = anydesk.registerLicenseCustomClient({
        prefix: 'example',
        key: 'LICENSE-KEY',
      })

      expect(url).toBe('anydesk-example://register-license?key=LICENSE-KEY')
    })

    test('should support the official silent parameter', () => {
      const url = anydesk.registerLicenseCustomClient({
        prefix: 'example',
        key: 'LICENSE-KEY',
        silent: true,
      })

      expect(url).toBe('anydesk-example://register-license?key=LICENSE-KEY&silent')
    })
  })

  describe('registerLicenseCustomClientMsi', () => {
    test('should match the official MSI custom client license registration URL format', () => {
      const url = anydesk.registerLicenseCustomClientMsi({
        prefix: 'example',
        key: 'LICENSE-KEY',
      })

      expect(url).toBe('anydesk:AnyDesk-example_msi://register-license?key=LICENSE-KEY')
    })

    test('should support the official silent parameter', () => {
      const url = anydesk.registerLicenseCustomClientMsi({
        prefix: 'example',
        key: 'LICENSE-KEY',
        silent: true,
      })

      expect(url).toBe('anydesk:AnyDesk-example_msi://register-license?key=LICENSE-KEY&silent')
    })
  })
})
