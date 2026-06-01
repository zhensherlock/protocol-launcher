import { type HotTubNotificationPayload, hotTubUrl } from './shared'

/**
 * Display an in-app toast notification in Hot Tub.
 *
 * @param payload Notification payload.
 * @returns Hot Tub notification URL.
 * @example
 * notification({ type: 'success', title: 'Success', message: 'Video added to playlist!' })
 * // => 'hottub://notification?type=success&title=Success&message=Video%20added%20to%20playlist!'
 * @link https://docs.hottubapp.io/developers/url-schemes/
 */
export function notification(payload: HotTubNotificationPayload = {}) {
  const { type, title, message } = payload

  return hotTubUrl('notification', {
    type,
    title,
    message,
  })
}
