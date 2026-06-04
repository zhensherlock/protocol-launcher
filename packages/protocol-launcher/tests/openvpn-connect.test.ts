import { describe, expect, test } from 'vitest'
import { openvpnConnect } from '../src'

describe('openvpnConnect', () => {
  test('importProfile should prefix an Access Server HTTPS token URL', () => {
    const url = openvpnConnect.importProfile({
      url: 'https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
    })

    expect(url).toBe(
      'openvpn://import-profile/https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
    )
  })

  test('importProfileTokenUrl should return the same official token import URL', () => {
    const url = openvpnConnect.importProfileTokenUrl({
      url: 'https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
    })

    expect(url).toBe(
      'openvpn://import-profile/https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
    )
  })

  test('importProfile should reject non-HTTPS token URLs', () => {
    expect(() =>
      openvpnConnect.importProfile({
        url: 'http://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
      }),
    ).toThrow('Unsupported OpenVPN Connect HTTPS token URL format.')
  })

  test('importProfileTokenUrl should reject URLs that are already prefixed', () => {
    expect(() =>
      openvpnConnect.importProfileTokenUrl({
        url: 'openvpn://import-profile/https://vpn.example.com/rest/GetProfileViaToken?token=REPLACE_WITH_TOKEN',
      }),
    ).toThrow('Unsupported OpenVPN Connect HTTPS token URL format.')
  })
})
