import { qs } from '@protocol-launcher/shared'

/**
 * Launch Center Pro x-callback-url parameters documented for internal actions.
 */
export type LaunchCenterProXCallback = {
  /**
   * URL to open after the action succeeds.
   */
  xSuccess?: string
}

/**
 * Photo attachment values documented by Launch Center Pro.
 */
export type LaunchCenterProPhotoAttachment =
  | 'photo'
  | 'photo:last'
  | 'photo:camera'
  | 'photo:frontcamera'
  | 'photo:library'
  | 'photo:cameraroll'
  | 'photo:dropbox'
  | 'photo:clipboard'
  | 'photo:gif'

/**
 * yes/no values used by Launch Center Pro URL parameters.
 */
export type LaunchCenterProYesNo = 'yes' | 'no' | 'YES' | 'NO'

/**
 * Dropbox text file payload shared by new, append, and prepend actions.
 */
export type LaunchCenterProDropboxTextFile = LaunchCenterProXCallback & {
  /**
   * Text to write to the file.
   */
  text: string

  /**
   * Dropbox directory path.
   */
  path?: string

  /**
   * Filename as saved to Dropbox.
   */
  name?: string

  /**
   * Whether an existing file should be overwritten.
   */
  overwrite?: LaunchCenterProYesNo

  /**
   * Whether Launch Center Pro should get a sharable link after upload.
   */
  getlink?: LaunchCenterProYesNo

  /**
   * Whether the first line should remain in the supplied text when using the [firstline] tag.
   */
  leavefirstline?: LaunchCenterProYesNo
}

/**
 * Dropbox append/prepend text file payload.
 */
export type LaunchCenterProDropboxTextFileWithLineBreak = LaunchCenterProDropboxTextFile & {
  /**
   * Whether a linebreak should be inserted between the old and new content.
   */
  linebreak?: LaunchCenterProYesNo
}

export function launchCenterProUrl(action: string, payload: LaunchCenterProXCallback = {}, params = {}) {
  const { xSuccess } = payload
  const path = xSuccess !== undefined ? `x-callback-url/${action}` : action

  return `launch://${path}${qs({
    ...params,
    ...(xSuccess !== undefined ? { 'x-success': xSuccess } : {}),
  })}`
}

export function dropboxTextFileParams(payload: LaunchCenterProDropboxTextFile) {
  const { text, path, name, overwrite, getlink, leavefirstline } = payload

  return {
    text,
    ...(path !== undefined ? { path } : {}),
    ...(name !== undefined ? { name } : {}),
    ...(overwrite !== undefined ? { overwrite } : {}),
    ...(getlink !== undefined ? { getlink } : {}),
    ...(leavefirstline !== undefined ? { leavefirstline } : {}),
  }
}
