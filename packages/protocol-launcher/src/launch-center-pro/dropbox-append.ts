import { dropboxTextFileParams, type LaunchCenterProDropboxTextFileWithLineBreak, launchCenterProUrl } from './shared'

/**
 * Append text to a Dropbox plain text file with Launch Center Pro.
 *
 * @param payload Dropbox append text file payload.
 * @returns Launch Center Pro Dropbox append URL.
 * @example
 * dropboxAppend({ text: '[prompt-return:My Note]', name: 'MyFile.markdown' })
 * // => 'launch://dropbox/append?text=%5Bprompt-return%3AMy%20Note%5D&name=MyFile.markdown'
 * @example
 * dropboxAppend({ text: 'Next line', name: 'MyFile.markdown', linebreak: 'NO' })
 * // => 'launch://dropbox/append?text=Next%20line&name=MyFile.markdown&linebreak=NO'
 * @link https://help.contrast.co/hc/en-us/articles/200612283-Dropbox-Actions
 */
export function dropboxAppend(payload: LaunchCenterProDropboxTextFileWithLineBreak) {
  const { linebreak } = payload

  return launchCenterProUrl('dropbox/append', payload, {
    ...dropboxTextFileParams(payload),
    ...(linebreak !== undefined ? { linebreak } : {}),
  })
}
