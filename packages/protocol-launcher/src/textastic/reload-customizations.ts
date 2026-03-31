/**
 * Reload customizations (custom syntax definitions, themes, and code completions)
 * from the "Local Files/#Textastic" folder.
 *
 * @returns Textastic reload customizations URL.
 * @example
 * reloadCustomizations()
 * // => 'textastic://x-callback-url/reloadCustomizations'
 * @link https://www.textasticapp.com/v10/manual/integration_other_apps/x-callback-url.html#reloadcustomizations
 */
export function reloadCustomizations() {
  return 'textastic://x-callback-url/reloadCustomizations'
}
