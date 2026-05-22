import { keyboardMaestroValue } from './shared'

/**
 * Edit macro or macro group definition.
 */
type EditMacroOrGroup = {
  /**
   * Macro name or UUID.
   */
  macroOrGroup: string
}

/**
 * Edit a specific Keyboard Maestro macro or macro group.
 *
 * @param payload Macro or macro group definition.
 * @returns Keyboard Maestro editor URL.
 * @example
 * editMacroOrGroup({ macroOrGroup: 'Activate Application Switcher' })
 * // => 'keyboardmaestro://m=Activate%20Application%20Switcher'
 * @example
 * editMacroOrGroup({ macroOrGroup: 'D2F427A1-51E3-4719-820B-4C25B6FF7329' })
 * // => 'keyboardmaestro://m=D2F427A1-51E3-4719-820B-4C25B6FF7329'
 * @link https://wiki.keyboardmaestro.com/manual/URL_Schemes
 */
export function editMacroOrGroup(payload: EditMacroOrGroup) {
  const { macroOrGroup } = payload

  return `keyboardmaestro://m=${keyboardMaestroValue(macroOrGroup)}`
}
