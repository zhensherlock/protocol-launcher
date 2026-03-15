type FindMyTab = 'devices' | 'items' | 'friends'

interface FindMy {
  tab?: FindMyTab
}

/**
 * Open Find My app.
 *
 * @param payload - Optional tab to open.
 * @returns Find My open URL.
 * @example
 * findMy()
 * // => 'findmy://'
 * @example
 * findMy({ tab: 'devices' })
 * // => 'findmy://devices'
 * @example
 * findMy({ tab: 'items' })
 * // => 'findmy://items'
 * @example
 * findMy({ tab: 'friends' })
 * // => 'findmy://friends'
 */
export function findMy(payload: FindMy = {}) {
  const { tab = '' } = payload
  return `findmy://${tab}`
}
