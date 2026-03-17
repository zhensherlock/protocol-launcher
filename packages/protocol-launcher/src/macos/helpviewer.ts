interface HelpViewer {
  collection?: string
}

/**
 * Open Help Viewer app.
 *
 * @param payload - Optional collection identifier.
 * @returns Help Viewer open URL.
 * @example
 * helpViewer()
 * // => 'x-apple-tips://'
 * @example
 * helpViewer({ collection: 'WelcomeToMac' })
 * // => 'x-apple-tips://open?collection=WelcomeToMac'
 */
export function helpViewer(payload: HelpViewer = {}) {
  const { collection } = payload
  if (collection) {
    return `x-apple-tips://open?collection=${collection}`
  }
  return 'x-apple-tips://'
}
