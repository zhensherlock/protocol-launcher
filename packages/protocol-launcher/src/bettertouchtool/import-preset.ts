import { bttUrl, type SharedSecret } from './shared'

/**
 * Import preset payload definition.
 */
type ImportPreset = SharedSecret & {
  /**
   * The file path to the preset to import.
   */
  path: string

  /**
   * Set to 0 to keep existing presets with the same name. Defaults to 1.
   */
  replaceExisting?: 0 | 1
}

/**
 * Import a BetterTouchTool preset from a file path.
 *
 * @param payload Preset import payload.
 * @returns BetterTouchTool import_preset URL.
 * @example
 * importPreset({ path: '/Users/andi/Desktop/MyPreset.bttpreset' })
 * // => 'btt://import_preset/?path=%2FUsers%2Fandi%2FDesktop%2FMyPreset.bttpreset'
 * @example
 * importPreset({ path: '/Users/andi/Desktop/MyPreset.bttpreset', replaceExisting: 1 })
 * // => 'btt://import_preset/?path=%2FUsers%2Fandi%2FDesktop%2FMyPreset.bttpreset&replaceExisting=1'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#import_preset
 */
export function importPreset(payload: ImportPreset) {
  const { path, replaceExisting, sharedSecret } = payload

  return bttUrl('import_preset', { path, replaceExisting }, sharedSecret)
}
