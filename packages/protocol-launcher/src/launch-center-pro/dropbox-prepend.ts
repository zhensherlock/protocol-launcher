import { dropboxTextFileParams, type LaunchCenterProDropboxTextFileWithLineBreak, launchCenterProUrl } from './shared'

/**
 * Prepend text to a Dropbox plain text file with Launch Center Pro.
 *
 * @param payload Dropbox prepend text file payload.
 * @returns Launch Center Pro Dropbox prepend URL.
 * @example
 * dropboxPrepend({ text: '[prompt-return:My Note]', name: 'MyFile.markdown' })
 * // => 'launch://dropbox/prepend?text=%5Bprompt-return%3AMy%20Note%5D&name=MyFile.markdown'
 * @example
 * dropboxPrepend({ text: 'First line\\nBody', name: 'note_[firstline].text', leavefirstline: 'NO' })
 * // => 'launch://dropbox/prepend?text=First%20line%5CnBody&name=note_%5Bfirstline%5D.text&leavefirstline=NO'
 * @link https://help.contrast.co/hc/en-us/articles/200612283-Dropbox-Actions
 */
export function dropboxPrepend(payload: LaunchCenterProDropboxTextFileWithLineBreak) {
  const { linebreak } = payload

  return launchCenterProUrl('dropbox/prepend', payload, {
    ...dropboxTextFileParams(payload),
    ...(linebreak !== undefined ? { linebreak } : {}),
  })
}
