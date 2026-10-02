import { describe, expect, test } from 'vitest'
import { surge } from '../src'

describe('surge', () => {
  test('start should return the official Surge start URL', () => {
    const url = surge.start()

    expect(url).toBe('surge:///start')
  })

  test('start should include the documented autoclose option', () => {
    const url = surge.start({ autoclose: true })

    expect(url).toBe('surge:///start?autoclose=true')
  })

  test('stop should return the official Surge stop URL', () => {
    const url = surge.stop()

    expect(url).toBe('surge:///stop')
  })

  test('toggle should return the official Surge toggle URL', () => {
    const url = surge.toggle()

    expect(url).toBe('surge:///toggle')
  })

  test('toggle should include the documented autoclose option', () => {
    const url = surge.toggle({ autoclose: true })

    expect(url).toBe('surge:///toggle?autoclose=true')
  })

  test('installConfig should percent-encode the configuration URL', () => {
    const url = surge.installConfig({
      url: 'https://example.com/surge.conf?token=REPLACE_WITH_TOKEN',
    })

    expect(url).toBe('surge:///install-config?url=https%3A%2F%2Fexample.com%2Fsurge.conf%3Ftoken%3DREPLACE_WITH_TOKEN')
  })

  test('xCallbackStart should return the documented Surge x-callback-url start action', () => {
    const url = surge.xCallbackStart()

    expect(url).toBe('surge://x-callback-url/start')
  })

  test('xCallbackStop should return the documented Surge x-callback-url stop action', () => {
    const url = surge.xCallbackStop()

    expect(url).toBe('surge://x-callback-url/stop')
  })

  test('xCallbackToggle should return the documented Surge x-callback-url toggle action', () => {
    const url = surge.xCallbackToggle()

    expect(url).toBe('surge://x-callback-url/toggle')
  })

  test('installConfig supports the macOS compatibility scheme', () => {
    expect(surge.installConfig({ url: 'https://example.com/surge.conf', scheme: 'surgeconfig' })).toBe(
      'surgeconfig:///install-config?url=https%3A%2F%2Fexample.com%2Fsurge.conf',
    )
  })
  test('installModule percent encodes its URL', () => {
    expect(surge.installModule({ url: 'https://example.com/a.sgmodule?x=1&y=2' })).toBe(
      'surge:///install-module?url=https%3A%2F%2Fexample.com%2Fa.sgmodule%3Fx%3D1%26y%3D2',
    )
    expect(surge.installModule({ url: 'https://example.com/a.sgmodule', scheme: 'surgeconfig', autoclose: true })).toBe(
      'surgeconfig:///install-module?url=https%3A%2F%2Fexample.com%2Fa.sgmodule&autoclose=true',
    )
  })
  test('emailLicense preserves encoded activation credentials', () => {
    expect(surge.emailLicense({ email: 'name+work@example.com', key: 'A&B' })).toBe(
      'surge:///email-license?email=name%2Bwork%40example.com&key=A%26B',
    )
    expect(surge.emailLicense({ email: 'name@example.com', key: 'KEY', scheme: 'surgeconfig', autoclose: true })).toBe(
      'surgeconfig:///email-license?email=name%40example.com&key=KEY&autoclose=true',
    )
  })
  test('enterpriseLicense uses the documented field casing', () => {
    expect(surge.enterpriseLicense({ companyID: 'Company & Co', userID: 'USER_ID', passcode: 'A+B' })).toBe(
      'surge:///enterprise-license?companyID=Company%20%26%20Co&userID=USER_ID&passcode=A%2BB',
    )
    expect(
      surge.enterpriseLicense({ companyID: 'C', userID: 'U', passcode: 'P', scheme: 'surgeconfig', autoclose: true }),
    ).toBe('surgeconfig:///enterprise-license?companyID=C&userID=U&passcode=P&autoclose=true')
  })
})
