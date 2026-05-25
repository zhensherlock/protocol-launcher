/**
 * Import via URL payload definition.
 */
type ImportViaUrl = {
  /**
   * The URL to download the preset from.
   */
  url: string

  /**
   * Use the documented unzip path variant when the downloaded file needs to be unzipped first.
   */
  unzip?: true
}

/**
 * Import a BetterTouchTool preset by providing a URL to download it from.
 *
 * @param payload Import URL payload.
 * @returns BetterTouchTool importviaurl URL.
 * @example
 * importViaUrl({ url: 'https://example.com/mypreset.bttpreset' })
 * // => 'btt://importviaurl/https://example.com/mypreset.bttpreset'
 * @example
 * importViaUrl({ url: 'https://example.com/mypreset.zip', unzip: true })
 * // => 'btt://importviaurl/unzip/https://example.com/mypreset.zip'
 * @link https://docs.folivora.ai/docs/scripting/url-scheme/#importviaurl
 */
export function importViaUrl(payload: ImportViaUrl) {
  const { url, unzip } = payload

  return `btt://importviaurl/${unzip ? 'unzip/' : ''}${url}`
}
