import { describe, expect, test } from 'vitest'
import { keyboardMaestro } from '../src'

describe('keyboard-maestro', () => {
  test('enterUserAndSerial should return username and serial URL', () => {
    const url = keyboardMaestro.enterUserAndSerial({
      user: 'support@stairways.com',
      serial: 'ABCDEFGH0123456789',
    })

    expect(url).toBe('keyboardmaestro://u=support%40stairways.com/s=ABCDEFGH0123456789')
  })

  test('editMacroOrGroup should return macro name URL', () => {
    const url = keyboardMaestro.editMacroOrGroup({
      macroOrGroup: 'Activate Application Switcher',
    })

    expect(url).toBe('keyboardmaestro://m=Activate%20Application%20Switcher')
  })

  test('editMacroOrGroup should return macro UUID URL', () => {
    const url = keyboardMaestro.editMacroOrGroup({
      macroOrGroup: 'D2F427A1-51E3-4719-820B-4C25B6FF7329',
    })

    expect(url).toBe('keyboardmaestro://m=D2F427A1-51E3-4719-820B-4C25B6FF7329')
  })

  test('filterMacros should return macro filter URL', () => {
    const url = keyboardMaestro.filterMacros({
      keyword: 'Activate',
    })

    expect(url).toBe('keyboardmaestro://q=Activate')
  })

  test('filterMacros should return macro group filter URL', () => {
    const url = keyboardMaestro.filterMacros({
      group: 'All Macros',
      keyword: 'Activate',
    })

    expect(url).toBe('keyboardmaestro://g=All%20Macros/q=Activate')
  })

  test('filterActions should return action filter URL', () => {
    const url = keyboardMaestro.filterActions({
      keyword: 'Execute',
    })

    expect(url).toBe('keyboardmaestro://a=Execute')
  })

  test('filterActions should return action category filter URL', () => {
    const url = keyboardMaestro.filterActions({
      category: 'All Actions',
      keyword: 'Execute',
    })

    expect(url).toBe('keyboardmaestro://c=All%20Actions/a=Execute')
  })

  test('triggerMacro should return macro name trigger URL', () => {
    const url = keyboardMaestro.triggerMacro({
      macro: 'Your Macro Name',
    })

    expect(url).toBe('kmtrigger://macro=Your%20Macro%20Name')
  })

  test('triggerMacro should return macro UUID trigger URL', () => {
    const url = keyboardMaestro.triggerMacro({
      macro: '224AA8CB-07EB-4C92-8201-68FED82B6E9F',
    })

    expect(url).toBe('kmtrigger://macro=224AA8CB-07EB-4C92-8201-68FED82B6E9F')
  })

  test('triggerMacro should return trigger value URL', () => {
    const url = keyboardMaestro.triggerMacro({
      macro: 'Your Macro Name',
      value: 'Your Trigger Value',
    })

    expect(url).toBe('kmtrigger://macro=Your%20Macro%20Name&value=Your%20Trigger%20Value')
  })

  test('triggerMacro should return UUID trigger value URL', () => {
    const url = keyboardMaestro.triggerMacro({
      macro: '224AA8CB-07EB-4C92-8201-68FED82B6E9F',
      value: 'Your Trigger Value',
    })

    expect(url).toBe('kmtrigger://macro=224AA8CB-07EB-4C92-8201-68FED82B6E9F&value=Your%20Trigger%20Value')
  })
})
