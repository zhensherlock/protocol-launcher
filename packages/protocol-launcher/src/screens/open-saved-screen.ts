import { type ScreensSavedScreenPayload, screensUrl } from './shared'

/**
 * Open a saved screen in Screens.
 *
 * @param payload Open saved screen payload.
 * @returns Screens saved screen URL.
 * @example
 * openSavedScreen({ target: 'Johns-MacBook-Pro.local' })
 * // => 'screens://Johns-MacBook-Pro.local'
 * @example
 * openSavedScreen({ target: 'Johns-MacBook-Pro.local', guest: true })
 * // => 'screens://Johns-MacBook-Pro.local?guest=true'
 * @link https://help.edovia.com/en/screens-5/features/url-schemes
 */
export function openSavedScreen(payload: ScreensSavedScreenPayload) {
  return screensUrl('screens', payload, payload)
}
