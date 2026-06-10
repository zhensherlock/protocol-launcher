const SPARK_DEEP_LINK_PREFIX = 'readdle-spark://bl='

export interface OpenDeepLinkPayload {
  /**
   * Spark Desktop Deep Link copied from Spark.
   *
   * @example 'readdle-spark://bl=REPLACE_WITH_COPIED_DEEP_LINK_VALUE'
   */
  url: string
}

/**
 * Open a Spark Desktop Deep Link copied from Spark.
 *
 * @param payload Spark Deep Link payload.
 * @returns Spark Deep Link URL.
 * @throws When the URL does not start with the documented Spark Deep Link prefix.
 * @example
 * openDeepLink({
 *   url: 'readdle-spark://bl=REPLACE_WITH_COPIED_DEEP_LINK_VALUE',
 * })
 * // => 'readdle-spark://bl=REPLACE_WITH_COPIED_DEEP_LINK_VALUE'
 * @link https://sparkmailapp.com/help/tips-tricks/streamline-your-workflow-with-deep-links
 */
export function openDeepLink(payload: OpenDeepLinkPayload) {
  if (!payload.url.startsWith(SPARK_DEEP_LINK_PREFIX)) {
    throw new Error('Unsupported Spark Deep Link format.')
  }

  return payload.url
}
