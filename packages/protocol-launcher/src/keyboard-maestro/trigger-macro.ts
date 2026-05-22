import { keyboardMaestroValue } from './shared'

/**
 * Trigger macro definition.
 */
type TriggerMacro = {
  /**
   * Macro name or UUID.
   */
  macro: string

  /**
   * Optional trigger value.
   */
  value?: string
}

/**
 * Trigger an active and enabled Keyboard Maestro macro.
 *
 * @param payload Macro trigger definition.
 * @returns Keyboard Maestro trigger URL.
 * @example
 * triggerMacro({ macro: 'Your Macro Name' })
 * // => 'kmtrigger://macro=Your%20Macro%20Name'
 * @example
 * triggerMacro({ macro: '224AA8CB-07EB-4C92-8201-68FED82B6E9F' })
 * // => 'kmtrigger://macro=224AA8CB-07EB-4C92-8201-68FED82B6E9F'
 * @example
 * triggerMacro({ macro: 'Your Macro Name', value: 'Your Trigger Value' })
 * // => 'kmtrigger://macro=Your%20Macro%20Name&value=Your%20Trigger%20Value'
 * @example
 * triggerMacro({ macro: '224AA8CB-07EB-4C92-8201-68FED82B6E9F', value: 'Your Trigger Value' })
 * // => 'kmtrigger://macro=224AA8CB-07EB-4C92-8201-68FED82B6E9F&value=Your%20Trigger%20Value'
 * @link https://wiki.keyboardmaestro.com/manual/URL_Schemes
 */
export function triggerMacro(payload: TriggerMacro) {
  const { macro, value } = payload
  const triggerValue = value === undefined ? '' : `&value=${keyboardMaestroValue(value)}`

  return `kmtrigger://macro=${keyboardMaestroValue(macro)}${triggerValue}`
}
