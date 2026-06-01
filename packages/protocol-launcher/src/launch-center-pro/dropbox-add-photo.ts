import {
  type LaunchCenterProPhotoAttachment,
  type LaunchCenterProXCallback,
  type LaunchCenterProYesNo,
  launchCenterProUrl,
} from './shared'

/**
 * Dropbox add photo payload definition.
 */
type DropboxAddPhoto = LaunchCenterProXCallback & {
  /**
   * Photo attachment source to upload.
   */
  attach: LaunchCenterProPhotoAttachment

  /**
   * Dropbox directory path.
   */
  path?: string

  /**
   * Filename for the uploaded photo.
   */
  name?: string

  /**
   * Whether Launch Center Pro should get a sharable link after upload.
   */
  getlink?: LaunchCenterProYesNo
}

/**
 * Upload a photo to Dropbox with Launch Center Pro.
 *
 * @param payload Dropbox add photo payload.
 * @returns Launch Center Pro Dropbox addphoto URL.
 * @example
 * dropboxAddPhoto({ attach: 'photo:frontcamera', path: '/selfies/' })
 * // => 'launch://dropbox/addphoto?attach=photo%3Afrontcamera&path=%2Fselfies%2F'
 * @example
 * dropboxAddPhoto({ attach: 'photo:last', getlink: 'yes', xSuccess: 'tweetbot://' })
 * // => 'launch://x-callback-url/dropbox/addphoto?attach=photo%3Alast&getlink=yes&x-success=tweetbot%3A%2F%2F'
 * @link https://help.contrast.co/hc/en-us/articles/200612283-Dropbox-Actions
 */
export function dropboxAddPhoto(payload: DropboxAddPhoto) {
  const { attach, path, name, getlink } = payload

  return launchCenterProUrl('dropbox/addphoto', payload, {
    attach,
    ...(path !== undefined ? { path } : {}),
    ...(name !== undefined ? { name } : {}),
    ...(getlink !== undefined ? { getlink } : {}),
  })
}
