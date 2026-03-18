import { qs } from '@protocol-launcher/shared'

/**
 * App command payload definition.
 */
type App = {
  /**
   * The App Store app ID.
   */
  id: string

  /**
   * Action to perform (e.g., 'write-review').
   */
  action?: string
}

/**
 * Open an app page in the App Store.
 *
 * @param payload App command payload.
 * @returns App Store app URL.
 * @example
 * app({ id: '836500024' })
 * // => 'itms-apps://itunes.apple.com/app/id836500024'
 * @example
 * app({ id: '836500024', action: 'write-review' })
 * // => 'itms-apps://itunes.apple.com/app/id836500024?action=write-review'
 */
export function app(payload: App) {
  const { id, action } = payload
  const params = qs({
    ...(action ? { action } : {}),
  })

  return `itms-apps://itunes.apple.com/app/id${id}${params}`
}
