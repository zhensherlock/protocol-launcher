/**
 * Log out of Webex App with the documented webexauth logout URL.
 *
 * @returns Webex webexauth logout URL.
 * @example
 * logout()
 * // => 'webexauth://logout'
 * @link https://help.webex.com/en-us/article/n45mhmab/Webex-App-%7C-Cross-launch-URL-for-sign-in-and-calling
 */
export function logout() {
  return 'webexauth://logout'
}
