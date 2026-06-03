import { describe, expect, test } from 'vitest'
import { pcalc } from '../src'

describe('pcalc', () => {
  test('open should return the documented launch URL', () => {
    const url = pcalc.open()
    expect(url).toBe('pcalc://')
  })

  test('setValue should set the main register', () => {
    const url = pcalc.setValue({ value: 12345 })
    expect(url).toBe('pcalc://set/12345')
  })

  test('convertValue should set the main register and open conversions', () => {
    const url = pcalc.convertValue({ value: 12345 })
    expect(url).toBe('pcalc://convert/12345')
  })

  test('openConstants should return the documented constants URL', () => {
    const url = pcalc.openConstants()
    expect(url).toBe('pcalc://constants')
  })

  test('openTape should return the documented tape URL', () => {
    const url = pcalc.openTape()
    expect(url).toBe('pcalc://tape')
  })

  test('openRegisters should return the documented registers URL', () => {
    const url = pcalc.openRegisters()
    expect(url).toBe('pcalc://registers')
  })

  test('openStack should return the documented stack URL', () => {
    const url = pcalc.openStack()
    expect(url).toBe('pcalc://stack')
  })

  test('openSettings should return the documented settings URL', () => {
    const url = pcalc.openSettings()
    expect(url).toBe('pcalc://settings')
  })

  test('clearAll should return the documented AC URL', () => {
    const url = pcalc.clearAll()
    expect(url).toBe('pcalc://ac')
  })

  test('openLayout should return the documented layout URL', () => {
    const url = pcalc.openLayout({ name: 'Engineering' })
    expect(url).toBe('pcalc://layout/Engineering')
  })

  test('openCalculator should return the documented calculator URL', () => {
    const url = pcalc.openCalculator({ name: 'name' })
    expect(url).toBe('pcalc://calculator/name')
  })

  test('xCallbackSet should return the documented callback endpoint', () => {
    const url = pcalc.xCallbackSet()
    expect(url).toBe('pcalc://x-callback-url/set')
  })

  test('xCallbackError should return the documented callback endpoint', () => {
    const url = pcalc.xCallbackError()
    expect(url).toBe('pcalc://x-callback-url/error')
  })
})
