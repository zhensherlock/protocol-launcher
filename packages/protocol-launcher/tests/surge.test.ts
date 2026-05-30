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
})
