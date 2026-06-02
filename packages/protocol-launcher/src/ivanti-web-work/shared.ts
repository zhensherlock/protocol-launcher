/**
 * Ivanti Web@Work URL payload definition.
 */
export interface IvantiWebWorkUrlPayload {
  /**
   * The HTTP or HTTPS URL to open in Ivanti Web@Work.
   */
  url: string
}

type SourceScheme = 'http' | 'https'
type WebWorkScheme = 'mibrowser' | 'mibrowsers' | 'mibrowserf' | 'mibrowsersf'

/**
 * Replace an official HTTP or HTTPS URL prefix with an Ivanti Web@Work scheme.
 */
export function webWorkUrl(payload: IvantiWebWorkUrlPayload, sourceScheme: SourceScheme, webWorkScheme: WebWorkScheme) {
  const { url } = payload
  const sourcePrefix = `${sourceScheme}://`

  if (!url.startsWith(sourcePrefix)) {
    throw new Error(`Unsupported Ivanti Web@Work ${sourceScheme.toUpperCase()} URL format.`)
  }

  return `${webWorkScheme}://${url.slice(sourcePrefix.length)}`
}
