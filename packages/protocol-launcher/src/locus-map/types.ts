/**
 * Locus Map actions URL payload definition.
 */
export interface LocusMapActionsPayload {
  /**
   * HTTPS URL of the XML actions file hosted on a web server.
   *
   * @example 'https://example.com/path/to/actions.xml'
   */
  url: string
}

/**
 * Locus Map download `after` action documented by Locus Actions.
 */
export type LocusMapDownloadAfterAction = 'refreshMap' | 'importData' | 'displayData' | 'extract' | 'deleteSource'

/**
 * Locus Map download source definition.
 */
export interface LocusMapDownloadSource {
  /**
   * URL to the source file.
   *
   * @example 'https://example.com/maps/map.tar'
   */
  url: string

  /**
   * Optional file size in bytes, used by Locus Map to check whether the file already exists.
   */
  size?: number

  /**
   * Optional last edit date in `yyyy-MM-dd_HH-mm-ss` format.
   */
  date?: string
}

/**
 * Locus Map download action payload definition.
 */
export interface LocusMapDownloadActionPayload {
  /**
   * Source file URL or source metadata.
   */
  source: string | LocusMapDownloadSource

  /**
   * Alternate path relative to the Locus root directory where the file is downloaded.
   *
   * @example '/maps/map.tar'
   */
  dest: string

  /**
   * Action performed after download. Multiple values are joined with `|`.
   */
  after: LocusMapDownloadAfterAction | readonly LocusMapDownloadAfterAction[]
}

/**
 * Locus Map event keys documented by Locus Actions.
 */
export type LocusMapEventKey = 'setMapVector' | 'setMapVectorTheme'

/**
 * Locus Map event action payload definition.
 */
export interface LocusMapEventActionPayload {
  /**
   * Predefined event key.
   */
  key: LocusMapEventKey

  /**
   * Relative path to the map or theme.
   */
  value: string
}
