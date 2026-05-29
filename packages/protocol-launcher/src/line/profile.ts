import { lineR } from './shared'

/**
 * Open the user's My profile screen.
 *
 * @returns LINE My profile URL.
 * @example
 * openMyProfile()
 * // => 'https://line.me/R/nv/profile'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-profile-information
 */
export function openMyProfile() {
  return lineR('/nv/profile')
}

/**
 * Open the user's LINE ID screen.
 *
 * @returns LINE ID settings URL.
 * @example
 * openProfileSetId()
 * // => 'https://line.me/R/nv/profileSetId'
 * @link https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/#opening-profile-information
 */
export function openProfileSetId() {
  return lineR('/nv/profileSetId')
}
