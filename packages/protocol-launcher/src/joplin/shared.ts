import { qs } from '@protocol-launcher/shared'

export type JoplinItemLink = {
  /**
   * Joplin item ID.
   */
  id: string
}

export function joplinUrl(action: 'openNote' | 'openFolder' | 'openTag', payload: JoplinItemLink) {
  const { id } = payload

  return `joplin://x-callback-url/${action}${qs({ id })}`
}
