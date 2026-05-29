import { lineR } from './shared'

/**
 * Open the camera from a LINE chat.
 *
 * @returns LINE camera URL.
 * @example
 * openCamera()
 * // => 'https://line.me/R/nv/camera/'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-the-camera-and-camera-roll
 */
export function openCamera() {
  return lineR('/nv/camera/')
}

/**
 * Open the camera roll and let the user select one image from a LINE chat.
 *
 * @returns LINE single-image camera roll URL.
 * @example
 * openCameraRollSingle()
 * // => 'https://line.me/R/nv/cameraRoll/single'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-the-camera-and-camera-roll
 */
export function openCameraRollSingle() {
  return lineR('/nv/cameraRoll/single')
}

/**
 * Open the camera roll and let the user select multiple images from a LINE chat.
 *
 * @returns LINE multi-image camera roll URL.
 * @example
 * openCameraRollMulti()
 * // => 'https://line.me/R/nv/cameraRoll/multi'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-the-camera-and-camera-roll
 */
export function openCameraRollMulti() {
  return lineR('/nv/cameraRoll/multi')
}
