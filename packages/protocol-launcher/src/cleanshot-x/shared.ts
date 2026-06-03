import { qs } from '@protocol-launcher/shared'

/**
 * Action CleanShot can perform after taking a screenshot.
 */
export type CleanShotCaptureAction = 'copy' | 'save' | 'annotate' | 'upload' | 'pin'

/**
 * Screen area parameters. Point (0,0) is the lower-left corner of the screen.
 */
export type CleanShotArea = {
  /**
   * Left coordinate of the target area.
   */
  x?: number
  /**
   * Bottom coordinate of the target area.
   */
  y?: number
  /**
   * Width of the target area.
   */
  width?: number
  /**
   * Height of the target area.
   */
  height?: number
  /**
   * Display number: 1 is the main display, 2 is the secondary display, etc.
   */
  display?: number
}

/**
 * Screenshot action payload.
 */
export type CleanShotCaptureActionPayload = {
  /**
   * Action to perform after taking a screenshot.
   */
  action?: CleanShotCaptureAction
}

/**
 * File path payload.
 */
export type CleanShotFilePathPayload = {
  /**
   * Path to a file accepted by the command.
   */
  filepath?: string
}

/**
 * CleanShot settings tabs supported by the URL scheme API.
 */
export type CleanShotSettingsTab =
  | 'general'
  | 'wallpaper'
  | 'shortcuts'
  | 'quickaccess'
  | 'recording'
  | 'screenshots'
  | 'annotate'
  | 'cloud'
  | 'advanced'
  | 'about'

export function cleanShotUrl(command: string, params: Record<string, unknown> = {}) {
  return `cleanshot://${command}${cleanShotQs(params)}`
}

function cleanShotQs(params: Record<string, unknown>) {
  return qs(params).replace(/%2F/g, '/')
}
