/**
 * Hiddify import URL payload definition.
 */
export interface HiddifyImportPayload {
  /**
   * Clash link, Singbox link, v2ray sublink, or single proxy link.
   *
   * @example 'https://example.com/subscriptions/clash.yml'
   * @example 'trojan://REPLACE_WITH_PASSWORD@example.com:443#name'
   */
  sublink: string

  /**
   * Optional profile title fragment appended after the sublink.
   *
   * @example 'name'
   */
  name?: string
}

export function hiddifyImportUrl(payload: HiddifyImportPayload) {
  const { sublink, name } = payload
  const fragment = name ? `#${name}` : ''

  return `hiddify://import/${sublink}${fragment}`
}
