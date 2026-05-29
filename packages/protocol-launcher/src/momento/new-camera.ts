import type { MomentoTextTagPayload } from './shared'
import { momentoTextTagParams, momentoUrl } from './shared'

/**
 * Camera payload definition.
 */
type NewCamera = MomentoTextTagPayload & {
  /**
   * Open the front camera. Momento documents `front=true`.
   */
  front?: true
}

/**
 * Launch Camera in Momento.
 *
 * @param payload Camera payload.
 * @returns Momento Camera URL.
 * @example
 * newCamera()
 * // => 'momento://new/camera'
 * @example
 * newCamera({ front: true })
 * // => 'momento://new/camera?front=true'
 * @example
 * newCamera({ text: 'Just Arrived!', tag: ['Holiday', 'Summer'] })
 * // => 'momento://new/camera?text=Just%20Arrived!&tag=Holiday&tag=Summer'
 * @link https://momento.zendesk.com/hc/en-us/articles/205668512-Momento-URL-Scheme
 */
export function newCamera(payload: NewCamera = {}) {
  const { scheme = 'momento', front } = payload

  return momentoUrl(
    'new/camera',
    {
      ...momentoTextTagParams(payload),
      ...(front === true ? { front } : {}),
    },
    scheme,
  )
}
