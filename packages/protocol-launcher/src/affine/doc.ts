/**
 * Open AFFiNE documentation.
 */
type OpenDoc = {
  /**
   * Workspace ID.
   */
  workspaceId: string

  /**
   * Documentation ID.
   */
  docId: string
}

/**
 * Open AFFiNE documentation.
 *
 * @returns AFFiNE documentation open URL.
 * @example
 * openDoc({
 *   workspaceId: '4f5a46cf-5eeb-4130-beda-25b438cd8c60',
 *   docId: 'ykchLzhvFXEUMwJu_spHY',
 * })
 * // => 'affine://app.affine.pro/workspace/4f5a46cf-5eeb-4130-beda-25b438cd8c60/ykchLzhvFXEUMwJu_spHY?new-tab=1'
 * @link https://github.com/toeverything/AFFiNE/blob/canary/packages/frontend/apps/electron/src/main/deep-link.ts
 */
export function openDoc(payload: OpenDoc) {
  const { workspaceId, docId } = payload
  return `affine://app.affine.pro/workspace/${workspaceId}/${docId}?new-tab=1`
}
