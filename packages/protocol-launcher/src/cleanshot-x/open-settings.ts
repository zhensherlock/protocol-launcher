import { type CleanShotSettingsTab, cleanShotUrl } from './shared'

/**
 * Open settings payload definition.
 */
export type OpenSettings = {
  /**
   * Settings tab to open.
   */
  tab?: CleanShotSettingsTab
}

/**
 * Open CleanShot settings, optionally at a specific tab.
 *
 * @param payload Open settings payload.
 * @returns CleanShot open-settings URL.
 * @example
 * openSettings()
 * // => 'cleanshot://open-settings'
 * @example
 * openSettings({ tab: 'recording' })
 * // => 'cleanshot://open-settings?tab=recording'
 * @link https://cleanshot.com/docs-api
 */
export function openSettings(payload: OpenSettings = {}) {
  return cleanShotUrl('open-settings', payload)
}
