import { describe, expect, test } from 'vitest'
import { chute } from '../src'

describe('chute', () => {
  test('start should return a documented Chute start URL', () => {
    const url = chute.start()

    expect(url).toBe('chute:///start')
  })

  test('start should include the documented autoclose option', () => {
    const url = chute.start({ autoclose: true })

    expect(url).toBe('chute:///start?autoclose=true')
  })

  test('stop should return a documented Chute stop URL', () => {
    const url = chute.stop()

    expect(url).toBe('chute:///stop')
  })

  test('stop should include the documented autoclose option', () => {
    const url = chute.stop({ autoclose: true })

    expect(url).toBe('chute:///stop?autoclose=true')
  })

  test('toggle should return a documented Chute toggle URL', () => {
    const url = chute.toggle()

    expect(url).toBe('chute:///toggle')
  })

  test('toggle should include the documented autoclose option', () => {
    const url = chute.toggle({ autoclose: true })

    expect(url).toBe('chute:///toggle?autoclose=true')
  })

  test('xCallbackStart should return the documented Chute x-callback-url start action', () => {
    const url = chute.xCallbackStart()

    expect(url).toBe('chute://x-callback-url/start')
  })

  test('xCallbackStart should include documented callback parameters', () => {
    const url = chute.xCallbackStart({
      xSuccess: 'sms://',
      xError: 'tel://',
    })

    expect(url).toBe('chute://x-callback-url/start?x-success=sms%3A%2F%2F&x-error=tel%3A%2F%2F')
  })

  test('xCallbackStop should return the documented Chute x-callback-url stop action', () => {
    const url = chute.xCallbackStop()

    expect(url).toBe('chute://x-callback-url/stop')
  })

  test('xCallbackToggle should return the documented Chute x-callback-url toggle action', () => {
    const url = chute.xCallbackToggle()

    expect(url).toBe('chute://x-callback-url/toggle')
  })
})
