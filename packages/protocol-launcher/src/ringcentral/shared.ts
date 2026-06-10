import { qs } from '@protocol-launcher/shared'

export const RINGCENTRAL_APP_BASE_URL = 'https://app.ringcentral.com'
export const RINGCENTRAL_VIDEO_BASE_URL = 'https://v.ringcentral.com'

export type RingCentralPhoneNumberPayload = {
  /**
   * Phone number value used by the documented RingCentral URI.
   *
   * @example '15551234567'
   */
  phoneNumber: string
}

export function ringCentralMobileUrl(path: string, params: Record<string, unknown> = {}) {
  return `rcmobile://${path}${qs(params)}`
}

export function ringCentralAppUrl(path: string, params: Record<string, unknown> = {}) {
  return `${RINGCENTRAL_APP_BASE_URL}/${path}${qs(params)}`
}

export function ringCentralDesktopPath(path: string, params: Record<string, unknown> = {}) {
  return `/r/${path}${qs(params)}`
}

export function ringCentralVideoUrl(path: string, params: Record<string, unknown> = {}) {
  return `${RINGCENTRAL_VIDEO_BASE_URL}/${path}${qs(params)}`
}

export function ringCentralPath(...segments: string[]) {
  return segments.map(segment => encodeURIComponent(segment)).join('/')
}
