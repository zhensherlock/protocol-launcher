import { qs } from '@protocol-launcher/shared'

/**
 * Get action payload definition.
 */
type Get = {
  /**
   * The UUID identifier for a draft.
   */
  uuid: string
  /**
   * The name of the argument to use to pass the draft content back to the x-success URL. Defaults to "text".
   */
  retParam?: string
}

/**
 * Return the current content of the draft specified by the UUID argument as an argument to the x-success URL provided.
 *
 * @param payload Get action payload.
 * @returns Drafts get URL.
 * @example
 * get({ uuid: 'UUID-TO-VALID-DRAFT' })
 * // => 'drafts:///get?uuid=UUID-TO-VALID-DRAFT'
 * @example
 * get({ uuid: 'UUID-TO-VALID-DRAFT', retParam: 'input' })
 * // => 'drafts:///get?uuid=UUID-TO-VALID-DRAFT&retParam=input'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function get(payload: Get) {
  const { uuid, retParam } = payload

  const params = qs({
    uuid,
    ...(retParam ? { retParam } : {}),
  })

  return `drafts:///get${params}`
}
