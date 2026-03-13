/**
 * Open shortcut definition.
 */
type OpenShortcut = {
  /**
   * Shortcut name.
   */
  name: string
}

/**
 * Open a specific shortcut in the gallery.
 *
 * @param payload Open shortcut definition.
 * @returns Shortcuts open shortcut URL.
 * @example
 * openShortcut({ name: 'Kaleidoscope Compare' })
 * // => 'shortcuts://open-shortcut?name=Kaleidoscope%20Compare'
 * @link https://support.apple.com/zh-cn/guide/shortcuts/apda283236d7/9.0/ios/26
 */
export function openShortcut(payload: OpenShortcut) {
  const { name } = payload
  return `shortcuts://open-shortcut?name=${encodeURIComponent(name)}`
}
