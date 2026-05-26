import { type BunchBoolean, type BunchCallbacks, type BunchDebugLevel, bunchUrl } from './shared'

/**
 * Set preference method payload definition.
 */
export type SetPref = BunchCallbacks & {
  /**
   * Absolute path to Bunch folder.
   */
  configDir?: string

  /**
   * Set Toggle Bunches mode.
   */
  toggleBunches?: BunchBoolean

  /**
   * Set Single Bunch Mode.
   */
  singleBunchMode?: BunchBoolean

  /**
   * Set Restore Open Bunches on Launch.
   */
  preserveOpenBunches?: BunchBoolean

  /**
   * Set the logging level for the Bunch Log.
   */
  debugLevel?: BunchDebugLevel
}

/**
 * Set or toggle supported Bunch preferences.
 *
 * @param payload Set preference method payload.
 * @returns Bunch setPref URL.
 * @example
 * setPref({ toggleBunches: 1 })
 * // => 'x-bunch://setPref?toggleBunches=1'
 * @example
 * setPref({ configDir: '~/Dropbox/Sync/Bunches' })
 * // => 'x-bunch://setPref?configDir=~%2FDropbox%2FSync%2FBunches'
 * @link https://bunchapp.co/docs/integration/url-handler/
 */
export function setPref(payload: SetPref = {}) {
  const { configDir, toggleBunches, singleBunchMode, preserveOpenBunches, debugLevel } = payload

  return bunchUrl(
    'setPref',
    {
      configDir,
      toggleBunches,
      singleBunchMode,
      preserveOpenBunches,
      debugLevel,
    },
    payload,
  )
}
