import { type ScreensConnectionPayload, screensUrl } from './shared'

/**
 * Connect to a computer that is not in the saved Screens list using VNC.
 *
 * @param payload VNC connection payload.
 * @returns Screens VNC URL.
 * @example
 * vnc({ host: '10.0.1.10' })
 * // => 'vnc://10.0.1.10'
 * @example
 * vnc({ host: '10.0.1.10', port: 5900 })
 * // => 'vnc://10.0.1.10:5900'
 * @link https://help.edovia.com/en/screens-5/features/url-schemes
 */
export function vnc(payload: ScreensConnectionPayload) {
  return screensUrl('vnc', { ...payload, target: payload.host }, payload)
}
