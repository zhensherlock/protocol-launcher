import { qs } from '@protocol-launcher/shared'

export type BoxScheme = 'boxapp' | 'boxemm'

export type BoxObjectType = 'folder' | 'file' | 'sharedlink'

export interface BoxFolderPayload {
  /**
   * Box folder ID.
   *
   * @example '123456789'
   */
  id: string
}

export interface BoxFilePayload {
  /**
   * Box file ID.
   *
   * @example '987654321'
   */
  id: string
}

export interface BoxSharedLinkPayload {
  /**
   * Box shared link URL.
   *
   * @example 'https://app.box.com/s/shared-link-id'
   */
  url: string
}

export function boxUrl(scheme: BoxScheme, objectType: BoxObjectType, params: Record<string, string>) {
  return `${scheme}://${objectType}${qs(params)}`
}
