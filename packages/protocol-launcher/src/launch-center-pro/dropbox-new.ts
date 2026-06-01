import { dropboxTextFileParams, type LaunchCenterProDropboxTextFile, launchCenterProUrl } from './shared'

/**
 * Create a new plain text file in Dropbox with Launch Center Pro.
 *
 * @param payload Dropbox new text file payload.
 * @returns Launch Center Pro Dropbox new URL.
 * @example
 * dropboxNew({ text: '[prompt-return:My Note]' })
 * // => 'launch://dropbox/new?text=%5Bprompt-return%3AMy%20Note%5D'
 * @example
 * dropboxNew({ text: '[clipboard]', path: '/Notes/', name: 'MyFile.markdown', overwrite: 'NO' })
 * // => 'launch://dropbox/new?text=%5Bclipboard%5D&path=%2FNotes%2F&name=MyFile.markdown&overwrite=NO'
 * @link https://help.contrast.co/hc/en-us/articles/200612283-Dropbox-Actions
 */
export function dropboxNew(payload: LaunchCenterProDropboxTextFile) {
  return launchCenterProUrl('dropbox/new', payload, dropboxTextFileParams(payload))
}
