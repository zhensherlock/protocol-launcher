import { bttUrl, type SharedSecret } from './shared'

/**
 * Export preset payload definition.
 */
type ExportPreset = SharedSecret & {
  /**
   * The name of the preset to export.
   */
  name: string

  /**
   * The file path where the preset should be saved.
   */
  outputPath: string

  /**
   * Set to 1 to compress the exported preset.
   */
  compress?: 1

  /**
   * Set to 1 to include BetterTouchTool settings in the export.
   */
  includeSettings?: 1

  /**
   * A comment to include in the export.
   */
  comment?: string

  /**
   * A link to include in the export.
   */
  link?: string

  /**
   * The minimum BetterTouchTool version required for this preset.
   */
  minimumVersion?: string
}

/**
 * Export a BetterTouchTool preset to a file.
 *
 * @param payload Preset export payload.
 * @returns BetterTouchTool export_preset URL.
 * @example
 * exportPreset({ name: 'MyPreset', outputPath: '/Users/andi/Desktop/MyPreset.bttpreset', compress: 1 })
 * // => 'btt://export_preset/?name=MyPreset&outputPath=%2FUsers%2Fandi%2FDesktop%2FMyPreset.bttpreset&compress=1'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#export_preset
 */
export function exportPreset(payload: ExportPreset) {
  const { name, outputPath, compress, includeSettings, comment, link, minimumVersion, sharedSecret } = payload

  return bttUrl(
    'export_preset',
    {
      name,
      outputPath,
      compress,
      includeSettings,
      comment,
      link,
      minimumVersion,
    },
    sharedSecret,
  )
}
