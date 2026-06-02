export type ChoosyBuiltInApiMethod = 'open' | 'prompt.all' | 'prompt.running' | 'best.all' | 'best.running'

export type ChoosyApiMethod = ChoosyBuiltInApiMethod | (string & {})

/**
 * Choosy web URL payload definition.
 */
export type ChoosyUrlPayload = {
  /**
   * The web URL Choosy should open.
   *
   * @example 'https://example.com'
   */
  url: string
}

export function choosyUrl(method: ChoosyApiMethod, url: string) {
  return `x-choosy://${method}/${url}`
}
